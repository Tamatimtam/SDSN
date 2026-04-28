// File: SDSN/src/goal-main.js
// KUNCI 1: Menggunakan path absolut dari root server '/src/...'
import { sdgs } from '/src/data/sdgs.js';

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

function initLenis() {
    if (typeof Lenis === 'undefined') return;
    if (window.lenisInstance) {
        window.lenisInstance.destroy();
    }
    document.documentElement.classList.remove('lenis', 'lenis-smooth', 'lenis-stopped', 'lenis-scrolling');

    const lenis = new Lenis({
        autoRaf: false,
        wrapper: window,
        content: document.documentElement,
        lerp: 0.08,
        smoothWheel: true,
        wheelMultiplier: 1.0,
        touchMultiplier: 2.0,
    });
    lenis.on('scroll', ScrollTrigger.update);
    const ticker = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(ticker);
    gsap.ticker.lagSmoothing(0);
    window.lenisInstance = lenis;
    window.lenisTicker = ticker;
    ScrollTrigger.refresh();
    lenis.resize();
}

// Reusable function for curtain transition
function handleGoalTransition(targetIdPadded, targetColor) {
    const curtain = document.getElementById('enter-curtain');
    if (window.lenisInstance) window.lenisInstance.stop();
    document.body.style.overflow = 'hidden';

    gsap.set(curtain, { y: '100%', backgroundColor: targetColor });
    gsap.to(curtain, {
        y: '0%',
        duration: 0.8,
        ease: 'expo.inOut',
        onComplete: () => {
            window.location.href = `./${targetIdPadded}.html`;
        }
    });
}


async function initGoal() {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
    document.documentElement.classList.remove('lenis', 'lenis-smooth', 'lenis-stopped', 'lenis-scrolling');
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';

    await waitForLibs();
    gsap.registerPlugin(ScrollTrigger);

    const goalId = document.body.getAttribute('data-goal');
    if (goalId) {
        try {
            // KUNCI 2: Menggunakan path absolut dari root server '/src/...'
            const module = await import(`/src/data/goals/goal-${goalId}.js`);
            const data = module.goalData;

            document.getElementById('inject-title').textContent = data.title;
            document.getElementById('inject-desc').textContent = data.description;
            document.getElementById('inject-pulse').textContent = data.pulseText;
            const logoImg = document.getElementById('inject-logo');
            if (logoImg) logoImg.src = `../src/assets/SDGs Logo/E SDG Icons WEB/E-WEB-Goal-${goalId}.png`;

            const bentoHTML = data.pulseMetrics.map(item => `
                <div class="pulse-card">
                    <div class="pulse-card__label">${item.label}</div>
                    <div class="pulse-card__value">${item.value}</div>
                    ${item.trend ? `<div class="pulse-card__trend" ${item.trendColor ? `style="color: ${item.trendColor};"` : ''}>${item.trend}</div>` : ''}
                    ${item.source ? `<div class="pulse-card__source"><strong>Sumber:</strong> ${item.sourceUrl ? `<a href="${item.sourceUrl}" target="_blank" rel="noopener" class="pulse-card__link">${item.source}</a>` : `<span>${item.source}</span>`}</div>` : ''}
                </div>`).join('');
            document.getElementById('inject-bento').innerHTML = bentoHTML;

            const targetsHTML = data.targets.map(t => `
                <div class="target-card">
                    <div class="target-card__header">
                        <div class="target-card__badge"><img src="../src/assets/SDGs Logo/E SDG Icons WEB/E-WEB-Goal-${goalId}.png" alt="Goal ${goalId} Icon" /></div>
                        <div class="target-card__info">
                            <h3>Target</h3><span class="target-num">${t.targetId}</span>
                            <p>${t.description}</p>
                        </div>
                    </div>
                    <button class="target-card__toggle">Indicators <i class="ph-bold ph-caret-down"></i></button>
                    <div class="target-card__content">${t.indicators.map(ind => `<div class="indicator-item"><h4>${ind.id}</h4><p>${ind.description}</p></div>`).join('')}</div>
                </div>`).join('');
            document.getElementById('inject-targets').innerHTML = targetsHTML;

            const syncHeights = () => {
                const headers = document.querySelectorAll('.target-card__header');
                if (!headers.length) return;
                headers.forEach(h => h.style.minHeight = 'auto');
                let maxHeight = 0;
                headers.forEach(h => { if (h.offsetHeight > maxHeight) maxHeight = h.offsetHeight; });
                headers.forEach(h => { h.style.minHeight = `${maxHeight}px`; });
            };
            requestAnimationFrame(syncHeights);
            let resizeTimer;
            window.addEventListener('resize', () => {
                clearTimeout(resizeTimer);
                resizeTimer = setTimeout(syncHeights, 150);
            });

        } catch (err) {
            console.error("Gagal load data goal:", err);
        }
    }

    // --- NAVIGATION LOGIC (NEXT GOAL & FOOTER) ---
    const currentId = parseInt(goalId);
    const prevId = (currentId === 1) ? 17 : currentId - 1;
    const nextId = (currentId === 17) ? 1 : currentId + 1;

    const prevIdPadded = String(prevId).padStart(2, '0');
    const nextIdPadded = String(nextId).padStart(2, '0');

    const prevData = sdgs.find(s => s.number === prevId);
    const nextData = sdgs.find(s => s.number === nextId);

    // Populate Next Goal Section
    const nextSection = document.getElementById('next-goal-link');
    if (nextSection && nextData) {
        nextSection.querySelector('.next-goal__id').textContent = nextIdPadded;
        nextSection.querySelector('.next-goal__name').textContent = nextData.title;
        nextSection.style.setProperty('--next-sdg-color', nextData.color);
        nextSection.addEventListener('click', () => handleGoalTransition(nextIdPadded, nextData.color));
    }

    // Populate Footer Navigation
    const footer = document.querySelector('.goal-page-wrapper .footer');
    if (footer && prevData && nextData) {
        footer.innerHTML = `
            <div class="footer__nav-wrapper">
                <a href="#" id="prev-goal-footer" class="footer-nav-link">
                    <i class="ph-bold ph-arrow-left"></i>
                    <div class="footer-nav-text">
                        <span>${prevIdPadded}</span>
                        <h3>${prevData.title}</h3>
                    </div>
                </a>
                <div class="footer-copyright">
                    &copy; 2026 SDSN Indonesia
                </div>
                <a href="#" id="next-goal-footer" class="footer-nav-link footer-nav-link--next">
                    <div class="footer-nav-text">
                        <span>${nextIdPadded}</span>
                        <h3>${nextData.title}</h3>
                    </div>
                    <i class="ph-bold ph-arrow-right"></i>
                </a>
            </div>
        `;
        document.getElementById('prev-goal-footer').addEventListener('click', (e) => {
            e.preventDefault();
            handleGoalTransition(prevIdPadded, prevData.color);
        });
        document.getElementById('next-goal-footer').addEventListener('click', (e) => {
            e.preventDefault();
            handleGoalTransition(nextIdPadded, nextData.color);
        });
    }

    // --- PAGE ENTRANCE & ANIMATIONS ---
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
            onComplete: () => {
                document.body.classList.remove('is-loading');
                if (typeof Lenis !== 'undefined') initLenis();
                else waitForLenis().then(initLenis);
            }
        });

        if (curtain) tl.to(curtain, { y: '-100%', duration: 1.2, ease: 'expo.inOut' });

        if (label && titleChars.length > 0 && desc) {
            tl.fromTo(label, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'back.out(2)' }, "-=0.8")
                .fromTo(titleChars, { y: '100%' }, { y: '0%', duration: 0.8, stagger: 0.02, ease: 'expo.out' }, "-=0.7")
                .fromTo(desc, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'back.out(2)' }, "-=0.6")
                .fromTo('.goal-hero__logo-wrap', { opacity: 0, x: 50, scale: 0.8 }, { opacity: 1, x: 0, scale: 1, duration: 1, ease: 'back.out(1.5)' }, "-=1");
        }

        document.querySelectorAll('.pulse-card').forEach((card, i) => {
            gsap.fromTo(card, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.8, delay: i * 0.1, ease: 'back.out(2)', scrollTrigger: { trigger: card, start: 'top 85%' } });
        });

        // Accordion Logic
        document.querySelectorAll('.target-card').forEach(card => {
            const toggleBtn = card.querySelector('.target-card__toggle');
            const content = card.querySelector('.target-card__content');
            toggleBtn.addEventListener('click', () => {
                const isOpen = card.classList.contains('is-open');
                if (!isOpen) {
                    card.classList.add('is-open');
                    gsap.to(content, { height: 'auto', duration: 0.5, ease: 'power3.inOut' });
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
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGoal);
} else {
    initGoal();
}