// File: SDSN/src/goal-main.js

function waitForLibs() {
    return new Promise((resolve) => {
        const check = () => {
            if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
                resolve();
                return true;
            }
            return false;
        };
        if (check()) return;
        const interval = setInterval(() => {
            if (check()) clearInterval(interval);
        }, 50);
        setTimeout(() => { clearInterval(interval); resolve(); }, 8000);
    });
}

function waitForLenis() {
    return new Promise((resolve) => {
        const check = () => {
            if (typeof Lenis !== 'undefined') { resolve(); return true; }
            return false;
        };
        if (check()) return;
        const interval = setInterval(() => {
            if (check()) clearInterval(interval);
        }, 50);
        setTimeout(() => { clearInterval(interval); resolve(); }, 5000);
    });
}

function splitText(selector) {
    const el = document.querySelector(selector);
    if (!el) return [];

    const text = el.textContent.trim();
    el.innerHTML = '';
    const chars = [];

    text.split(' ').forEach(word => {
        const wordSpan = document.createElement('span');
        wordSpan.style.display = 'inline-block';
        wordSpan.style.whiteSpace = 'nowrap';

        word.split('').forEach(char => {
            const charWrap = document.createElement('span');
            charWrap.className = 'char-wrap';

            const charInner = document.createElement('span');
            charInner.className = 'char';
            charInner.textContent = char;

            charWrap.appendChild(charInner);
            wordSpan.appendChild(charWrap);
            chars.push(charInner);
        });

        el.appendChild(wordSpan);
        el.appendChild(document.createTextNode(' '));
    });

    return chars;
}

// Fungsi init Lenis dipisah — TIDAK async, dipanggil setelah curtain selesai
function initLenis() {
    if (typeof Lenis === 'undefined') return;

    // Destroy instance lama kalau ada — mencegah dua instance jalan bersamaan
    if (window.lenisInstance) {
        window.lenisInstance.destroy();
        window.lenisInstance = null;
        if (window.lenisTicker) {
            gsap.ticker.remove(window.lenisTicker);
            window.lenisTicker = null;
        }
    }

    // Bersihkan class Lenis dari instance sebelumnya
    document.documentElement.classList.remove('lenis', 'lenis-smooth', 'lenis-stopped', 'lenis-scrolling');

    const lenis = new Lenis({
        autoRaf: false, // Mencegah bentrok dengan default update Lenis versi 1.1+
        wrapper: window,
        content: document.documentElement,
        lerp: 0.08,
        smoothWheel: true,
        wheelMultiplier: 1.0,
        touchMultiplier: 2.0,
    });

    lenis.on('scroll', ScrollTrigger.update);

    // Tempelkan loop ke GSAP ticker agar sinkron sempurna
    const ticker = (time) => {
        lenis.raf(time * 1000);
    };
    gsap.ticker.add(ticker);
    gsap.ticker.lagSmoothing(0);

    window.lenisInstance = lenis;
    window.lenisTicker = ticker;

    ScrollTrigger.refresh();
    lenis.resize();
}

// BFCache Restorer - Memastikan scroll pulih saat user menekan Back button browser
window.addEventListener('pageshow', (e) => {
    if (e.persisted) {
        document.body.style.overflow = '';
        document.documentElement.style.overflow = '';
        if (window.lenisInstance) window.lenisInstance.start();
    }
});

async function initGoal() {
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    // Buang sisa class Lenis dari halaman sebelumnya
    document.documentElement.classList.remove('lenis', 'lenis-smooth', 'lenis-stopped', 'lenis-scrolling');
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';

    await waitForLibs();
    gsap.registerPlugin(ScrollTrigger);

    // --- DATA FETCHING ---
    const goalId = document.body.getAttribute('data-goal');
    if (goalId) {
        try {
            const module = await import(`../src/data/goals/goal-${goalId}.js`);
            const data = module.goalData;

            document.getElementById('inject-title').textContent = data.title;
            document.getElementById('inject-desc').textContent = data.description;
            document.getElementById('inject-pulse').textContent = data.pulseText;

            const bentoHTML = data.bento.map(b => `
                <div class="bento-box ${b.size === 'large' ? 'bento-box--large' : ''}">
                    <div class="bento-box__number" ${b.color ? `style="color:${b.color}; font-size:2.5rem;"` : ''}>${b.number}</div>
                    <div class="bento-box__label">${b.label}</div>
                    ${b.sub ? `<p style="margin-top: 1rem; color: var(--text-secondary);">${b.sub}</p>` : ''}
                </div>
            `).join('');
            document.getElementById('inject-bento').innerHTML = bentoHTML;

            const targetsHTML = data.targets.map(t => `
                <div class="target-card">
                    <div class="target-card__header">
                        <div class="target-card__badge"><span>${goalId}</span></div>
                        <div class="target-card__info">
                            <h3>Target</h3><span class="target-num">${t.targetId}</span>
                            <p>${t.description}</p>
                        </div>
                    </div>
                    <button class="target-card__toggle">
                        Indicators <i class="ph-bold ph-caret-down"></i>
                    </button>
                    <div class="target-card__content">
                        ${t.indicators.map(ind => `
                            <div class="indicator-item">
                                <h4>${ind.id}</h4><p>${ind.description}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `).join('');
            document.getElementById('inject-targets').innerHTML = targetsHTML;

            // FUNGSI BARU: Menyamakan tinggi semua Header Target Card
            const syncHeaderHeights = () => {
                const headers = document.querySelectorAll('.target-card__header');
                if (!headers.length) return;

                // Reset dulu (wajib agar bisa hitung ulang saat layar mengecil/membesar)
                headers.forEach(h => h.style.minHeight = 'auto');

                // Cari yang paling tinggi
                let maxHeight = 0;
                headers.forEach(h => {
                    if (h.offsetHeight > maxHeight) maxHeight = h.offsetHeight;
                });

                // Terapkan tinggi maksimal ke semua header
                headers.forEach(h => {
                    h.style.minHeight = `${maxHeight}px`;
                });
            };

            // Jalankan fungsi setelah DOM di-render
            requestAnimationFrame(() => {
                syncHeaderHeights();
            });

            // Delay sedikit untuk resize window agar tidak terjadi lag saat merubah ukuran layar
            let resizeTimer;
            window.addEventListener('resize', () => {
                clearTimeout(resizeTimer);
                resizeTimer = setTimeout(syncHeaderHeights, 150);
            });

        } catch (err) {
            console.error("Gagal load data goal:", err);
        }
    }

    // Tunggu Lenis tersedia di background (defer)
    waitForLenis();

    requestAnimationFrame(() => {
        const titleChars = splitText('.goal-hero__title');
        const label = document.querySelector('.goal-hero__label');
        const desc = document.querySelector('.goal-hero__desc');
        const curtain = document.getElementById('enter-curtain');
        const wrapper = document.getElementById('page-wrapper');

        if (wrapper) gsap.set(wrapper, { opacity: 1 });
        gsap.set('body', { backgroundColor: 'transparent' });

        const tl = gsap.timeline({
            // onComplete TIDAK async — panggil initLenis() langsung (synchronous)
            onComplete: () => {
                document.body.classList.remove('is-loading');

                if (typeof Lenis !== 'undefined') {
                    // Lenis sudah loaded (defer scripts biasanya selesai sebelum 1.2 detik animasi)
                    initLenis();
                } else {
                    // Fallback: kalau Lenis belum ready, tunggu lalu init
                    waitForLenis().then(() => initLenis());
                }
            }
        });

        if (curtain) tl.to(curtain, { y: '-100%', duration: 1.2, ease: 'expo.inOut' });

        if (label && titleChars.length > 0 && desc) {
            tl.fromTo(label, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'back.out(2)' }, "-=0.8")
                .fromTo(titleChars, { y: '100%' }, { y: '0%', duration: 0.8, stagger: 0.02, ease: 'expo.out' }, "-=0.7")
                .fromTo(desc, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'back.out(2)' }, "-=0.6");
        }

        document.querySelectorAll('.bento-box').forEach((box, i) => {
            gsap.fromTo(box, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.8, delay: i * 0.1, ease: 'back.out(2)', scrollTrigger: { trigger: box, start: 'top 85%' } });
        });

        // --- ACCORDION ---
        document.querySelectorAll('.target-card').forEach(card => {
            const toggleBtn = card.querySelector('.target-card__toggle');
            const content = card.querySelector('.target-card__content');

            toggleBtn.addEventListener('click', () => {
                const isOpen = card.classList.contains('is-open');
                if (!isOpen) {
                    card.classList.add('is-open');
                    gsap.to(content, { height: content.scrollHeight, duration: 0.5, ease: 'power3.inOut' });
                } else {
                    card.classList.remove('is-open');
                    gsap.to(content, { height: 0, duration: 0.4, ease: 'power3.inOut' });
                }
                setTimeout(() => {
                    ScrollTrigger.refresh();
                    if (window.lenisInstance) window.lenisInstance.resize();
                }, 500);
            });
        });

        document.querySelectorAll('.target-card').forEach((card, i) => {
            gsap.fromTo(card, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'back.out(2)', scrollTrigger: { trigger: card, start: 'top 90%' } });
        });
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGoal);
} else {
    initGoal();
}