// Members page entry — Heavy GSAP, Leaflet Map, Epic Expand Cards, Lenis
import { members, memberStats } from './data/members.js';

// Leaflet coordinates for the institutions
const cityCoords = {
    'DKI Jakarta': [-6.2088, 106.8456],
    'Semarang': [-6.9667, 110.4167],
    'Aceh': [5.5483, 95.3238],
    'Palangka Raya': [-2.2083, 113.9167],
    'Padang': [-0.9471, 100.3697],
    'Bengkulu': [-3.8004, 102.2562],
    'Bogor': [-6.5971, 106.7932],
    'Tangerang': [-6.2886, 106.7179],
    'Bandung': [-6.9175, 107.6191]
};

// SDG colors for rainbow effects
const sdgColors = [
    '#E5243B', '#DDA63A', '#4C9F38', '#C5192D', '#FF3A21',
    '#26BDE2', '#FCC30B', '#A21942', '#FD6925', '#DD1367',
    '#FD9D24', '#BF8B2E', '#3F7E44', '#0A97D9', '#56C02B',
    '#00689D', '#19486A'
];

function waitForLibs() {
    return new Promise((resolve) => {
        const check = () => {
            if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined' && typeof L !== 'undefined') {
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
            if (typeof Lenis !== 'undefined') { resolve(true); return true; }
            return false;
        };
        if (check()) return;
        const interval = setInterval(() => {
            if (check()) clearInterval(interval);
        }, 50);
        setTimeout(() => { clearInterval(interval); resolve(false); }, 3000);
    });
}

// Render SDG rainbow bar
function renderSDGBar() {
    const bar = document.getElementById('sdg-bar');
    if (!bar) return;
    sdgColors.forEach(color => {
        const span = document.createElement('span');
        span.style.background = color;
        bar.appendChild(span);
    });
}

// Leaflet Map Init
function initMap() {
    const mapEl = document.getElementById('members-map');
    if (!mapEl || typeof L === 'undefined') return;

    // Center on Indonesia
    const map = L.map('members-map', {
        center: [-2.5, 118],
        zoom: window.innerWidth < 768 ? 4 : 5,
        zoomControl: false,
        scrollWheelZoom: false,
        dragging: window.innerWidth >= 768,
        attributionControl: false
    });

    // Clean, light basemap
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        maxZoom: 19
    }).addTo(map);

    // Add markers for each city
    const uniqueCities = [...new Set(members.map(m => m.city))];

    uniqueCities.forEach(city => {
        const coords = cityCoords[city];
        if (!coords) return;

        const cityMembers = members.filter(m => m.city === city);
        // Use the first member's color for the dot
        const color = cityMembers[0].accentColor;

        const iconHtml = `
            <div style="width:16px; height:16px; background:${color}; border-radius:50%; box-shadow: 0 0 0 4px rgba(255,255,255,0.8), 0 4px 12px rgba(0,0,0,0.2);"></div>
        `;

        const customIcon = L.divIcon({
            html: iconHtml,
            className: '',
            iconSize: [24, 24],
            iconAnchor: [12, 12]
        });

        const popupContent = `
            <div class="map-popup">
                <h4 style="margin:0 0 0.5rem; font-family:var(--font-display); font-size:1.1rem; border-bottom:2px solid ${color}; padding-bottom:0.2rem;">${city}</h4>
                ${cityMembers.map(m => `
                    <div style="margin-bottom:0.8rem; display:flex; align-items:center; gap:0.5rem;">
                        <img src="https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${m.website}&size=128" style="width:28px; height:28px; object-fit:contain; border-radius:4px; background:white; padding:3px; flex-shrink:0;" onerror="this.style.display='none';" />
                        <div>
                            <span class="map-popup__sector" style="background:${m.accentColor}">${m.sector}</span>
                            <div class="map-popup__name" style="margin-top:0.2rem; margin-bottom:0px;">${m.name}</div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;

        L.marker(coords, { icon: customIcon })
            .addTo(map)
            .bindPopup(popupContent, { offset: [0, -10] });
    });

    return map;
}

// Text splitting for Hero
function prepareHeroText() {
    const titleWords = document.querySelectorAll('.members-hero__title-word');
    const titleChars = [];

    titleWords.forEach((word) => {
        const text = word.textContent.trim();
        word.textContent = '';
        word.style.opacity = 1;

        for (let i = 0; i < text.length; i++) {
            const charSpan = document.createElement('span');
            charSpan.textContent = text[i];
            charSpan.className = 'members-hero__title-char';

            // Check if it's the accent word, apply coloring
            if (word.classList.contains('members-hero__title-accent')) {
                const sdgNum = (i % 17) + 1;
                charSpan.style.color = `var(--sdg-${sdgNum})`;
            }

            word.appendChild(charSpan);
            titleChars.push(charSpan);
        }
    });

    return titleChars;
}

function renderStats() {
    const statsData = [
        { num: memberStats.total, label: 'Member Institutions', suffix: '' },
        { num: memberStats.universities, label: 'Universities', suffix: '' },
        { num: memberStats.ngos, label: 'NGO Partners', suffix: '' },
        { num: memberStats.cities, label: 'Cities', suffix: '+' }
    ];

    const container = document.getElementById('stats-grid');
    if (!container) return;

    statsData.forEach(stat => {
        const el = document.createElement('div');
        el.className = 'members-stat';
        el.innerHTML = `
            <div class="members-stat__number" data-count="${stat.num}">${stat.num}${stat.suffix}</div>
            <div class="members-stat__label">${stat.label}</div>
        `;
        container.appendChild(el);
    });
}

function renderEpicCards() {
    const grid = document.getElementById('members-grid');
    if (!grid) return;

    members.forEach((member, i) => {
        const card = document.createElement('div');
        card.className = 'member-card';
        card.dataset.sector = member.sector;
        card.dataset.id = member.id;

        // Ensure we always have an image — if empty use a placeholder from UI/UID assets or generic
        const cardBgImage = member.id % 2 === 0 ? './src/assets/UID-UI.jpg' : './src/assets/UID-BG.jpg';
        const numStr = String(i + 1).padStart(2, '0');

        card.innerHTML = `
            <div class="member-card__bg" style="background: url('${cardBgImage}') center/cover; opacity: 0; filter: blur(5px) saturate(0%); mix-blend-mode: luminosity;"></div>
            <div class="member-card__bg" style="background: ${member.accentColor}; mix-blend-mode: multiply;"></div>
            <div class="member-card__overlay"></div>
            <img class="member-card__watermark" src="https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${member.website}&size=256" onerror="this.style.display='none'" />
            
            <div class="member-card__floating-logo">
                <div class="member-card__floating-logo-inner" style="background:white; padding: 6px;">
                    <img src="https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${member.website}&size=256" alt="${member.initials} Logo" onerror="this.onerror=null; this.style.display='none'; this.nextElementSibling.style.display='flex';" />
                    <div class="member-card__logo-initials-fallback" style="display:none; width:100%; height:100%; align-items:center; justify-content:center; background:${member.accentColor}; color:white; border-radius:4px; font-family:var(--font-display); font-weight:800; font-size:1.2rem;">${member.initials}</div>
                </div>
            </div>

            <div class="member-card__collapsed">
                <span class="member-card__number">${numStr}</span>
                <div class="member-card__logo-spacer"></div>
                <div class="member-card__collapsed-info">
                    <h3 class="member-card__name">${member.name}</h3>
                    <div class="member-card__meta">
                        <span class="member-card__badge">
                            <i class="ph-bold ${member.sector === 'University' ? 'ph-graduation-cap' : 'ph-hand-heart'}"></i>
                            ${member.sector}
                        </span>
                        <span class="member-card__badge">
                            <i class="ph-bold ph-map-pin"></i>
                            ${member.city}
                        </span>
                    </div>
                </div>
                <i class="ph ph-plus member-card__arrow"></i>
            </div>

            <div class="member-card__expanded">
                <div class="member-card__expanded-inner">
                    <div class="member-card__expanded-logo-spacer"></div>
                    <div class="member-card__expanded-text">
                        <h3 class="member-card__expanded-name">${member.name}</h3>
                        <p class="member-card__expanded-desc">${member.description}</p>
                        
                        <div class="member-card__expanded-details">
                            <div class="member-card__detail">
                                <span class="member-card__detail-label">Location</span>
                                <span class="member-card__detail-value">${member.city}, ${member.country}</span>
                            </div>
                            <div class="member-card__detail" style="flex:1;">
                                <span class="member-card__detail-label">Address</span>
                                <span class="member-card__detail-value">${member.address}</span>
                            </div>
                        </div>

                        <a href="${member.website}" target="_blank" rel="noopener" class="member-card__visit" onclick="event.stopPropagation()" style="--btn-color: ${member.accentColor}">
                            Visit Website <i class="ph ph-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        `;

        // Click to expand interaction
        card.addEventListener('click', (e) => {
            // Unexpand all others
            document.querySelectorAll('.member-card.is-expanded').forEach(c => {
                if (c !== card) c.classList.remove('is-expanded');
            });

            // Toggle this one
            card.classList.toggle('is-expanded');

            // Scroll into view if expanded
            if (card.classList.contains('is-expanded') && typeof Lenis !== 'undefined') {
                setTimeout(() => {
                    const rect = card.getBoundingClientRect();
                    const absoluteY = window.pageYOffset + rect.top - 120; // 120px offset for header
                    window.lenisInstance?.scrollTo(absoluteY, { duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
                }, 400); // Wait for expand animation to finish
            }
        });

        // Hover interaction -> change color of name to accent color
        card.addEventListener('mouseenter', () => {
            if (!card.classList.contains('is-expanded')) {
                const nameText = card.querySelector('.member-card__name');
                const numberText = card.querySelector('.member-card__number');
                nameText.style.color = member.accentColor;
                numberText.style.color = member.accentColor;
                numberText.style.opacity = '1';

                // GSAP subtle nudge
                gsap.to(card.querySelector('.member-card__logo-wrap'), {
                    scale: 1.05, rotate: 2, duration: 0.5, ease: 'back.out(2)'
                });
            }
        });

        card.addEventListener('mouseleave', () => {
            const nameText = card.querySelector('.member-card__name');
            const numberText = card.querySelector('.member-card__number');
            nameText.style.color = '';
            numberText.style.color = '';
            numberText.style.opacity = '';

            // GSAP return
            gsap.to(card.querySelector('.member-card__logo-wrap'), {
                scale: 1, rotate: 0, duration: 0.5, ease: 'back.out(2)'
            });
        });

        grid.appendChild(card);
    });
}

function initFilters() {
    const pills = document.querySelectorAll('.members-filter__pill');
    const cards = document.querySelectorAll('.member-card');
    const countEl = document.querySelector('.members-filter__count strong');

    pills.forEach(pill => {
        pill.addEventListener('click', () => {
            const filter = pill.dataset.filter;

            // Update active state
            pills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');

            let visibleCount = 0;

            // Close any expanded cards before filtering
            cards.forEach(card => card.classList.remove('is-expanded'));

            // GSAP Staggered Exit then Re-enter
            gsap.to(cards, {
                opacity: 0,
                y: 30,
                scale: 0.95,
                duration: 0.4,
                stagger: 0.02,
                ease: 'power2.in',
                onComplete: () => {
                    // Update visibility
                    cards.forEach(card => {
                        const sector = card.dataset.sector;
                        const show = filter === 'all' || sector === filter;

                        if (show) {
                            card.classList.remove('is-hidden');
                            visibleCount++;
                        } else {
                            card.classList.add('is-hidden');
                        }
                    });

                    if (countEl) countEl.textContent = visibleCount;

                    ScrollTrigger.refresh();

                    // Re-animate visible cards in
                    const visibleCards = document.querySelectorAll('.member-card:not(.is-hidden)');
                    gsap.fromTo(visibleCards,
                        { opacity: 0, y: 50, scale: 0.9 },
                        { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.08, ease: 'back.out(3.5)' }
                    );
                }
            });
        });
    });
}

// Main GSAP heavy animations
function initAnimations(titleChars) {
    if (typeof gsap === 'undefined') return;

    // Header reveal
    gsap.to('.members-header', { opacity: 1, duration: 1, ease: 'power2.inOut', delay: 0.5 });

    // Hero timeline matching main site back.out(4) style
    const tlh = gsap.timeline({ delay: 0.4 });
    tlh.to('.members-hero__tag', { opacity: 1, y: 0, duration: 0.8, ease: 'back.out(3)' })
        .to(titleChars, { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.03, ease: 'back.out(3.5)' }, '-=0.5')
        .to('.members-hero__subtitle', { opacity: 1, y: 0, duration: 0.7, ease: 'back.out(2.5)' }, '-=0.4')
        .to('.members-hero__scroll', { opacity: 1, y: 0, duration: 0.6, ease: 'back.out(2)' }, '-=0.3');

    // Hero exit parallax scrub
    gsap.to('.members-hero__content', {
        y: -150, opacity: 0, scale: 0.95,
        scrollTrigger: {
            trigger: '.members-hero',
            start: 'top top', end: 'bottom top', scrub: 1
        }
    });

    // Map section reveal
    gsap.to('.members-map__header > *', {
        opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'back.out(2)',
        scrollTrigger: { trigger: '.members-map-section', start: 'top 80%', once: true }
    });

    gsap.to('#members-map', {
        opacity: 1, y: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: '#members-map', start: 'top 85%', once: true }
    });

    // Stats Bar Trigger
    gsap.to('.members-stat', {
        opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.15, ease: 'back.out(3.5)',
        scrollTrigger: { trigger: '.members-stats', start: 'top 85%', once: true }
    });

    // Stats Counting up
    document.querySelectorAll('.members-stat__number[data-count]').forEach(el => {
        const target = parseInt(el.dataset.count);
        const suffix = el.textContent.replace(/[0-9]/g, '');

        ScrollTrigger.create({
            trigger: el, start: 'top 85%', once: true,
            onEnter: () => {
                const obj = { val: 0 };
                gsap.to(obj, {
                    val: target, duration: 2, ease: 'power2.out',
                    onUpdate: () => { el.textContent = Math.round(obj.val) + suffix; }
                });
            }
        });
    });

    // Cards Grid Entrance ScrollTrigger
    gsap.to('.member-card', {
        opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.08, ease: 'back.out(3.5)',
        scrollTrigger: { trigger: '.members-grid', start: 'top 85%', once: true }
    });

    // CTA Entrance
    gsap.to('.members-cta__inner', {
        opacity: 1, y: 0, duration: 0.8, ease: 'back.out(3)',
        scrollTrigger: { trigger: '.members-cta', start: 'top 85%', once: true }
    });
}

// Init Flow
async function init() {
    console.log('[SDSN] Waiting for GSAP & Leaflet...');
    await waitForLibs();

    if (typeof gsap === 'undefined') {
        console.error('GSAP not loaded');
        document.body.classList.remove('is-loading');
        return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const lenisAvailable = await waitForLenis();
    let lenis = null;

    if (lenisAvailable) {
        lenis = new Lenis({ lerp: 0.08, smoothWheel: true, touchMultiplier: 2.0 });
        lenis.on('scroll', ScrollTrigger.update);
        gsap.ticker.add((time) => { lenis.raf(time * 1000); });
        gsap.ticker.lagSmoothing(0);
        window.lenisInstance = lenis; // store for card click
    }

    gsap.defaults({ ease: 'back.out(2)', duration: 0.8 });

    // Build DOM Elements
    renderSDGBar();
    const map = initMap();
    renderStats();
    renderEpicCards();
    initFilters();

    // Setup initial text splitting
    const titleChars = prepareHeroText();
    gsap.set(titleChars, { opacity: 0, y: 30, scale: 0.8 });

    // Handle preloader
    window.addEventListener('load', () => {
        const preloader = document.getElementById('preloader');
        if (preloader) {
            gsap.to(preloader, {
                opacity: 0, duration: 0.6, ease: 'power2.inOut',
                onComplete: () => {
                    preloader.remove();
                    document.body.classList.remove('is-loading');
                    if (map) map.invalidateSize(); // Fix leaflet map gray tiles
                    initAnimations(titleChars);
                    ScrollTrigger.refresh();
                }
            });
        } else {
            document.body.classList.remove('is-loading');
            if (map) map.invalidateSize();
            initAnimations(titleChars);
        }
    });

    // Back to top
    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            backToTopBtn.classList.toggle('visible', window.scrollY > 600);
        }, { passive: true });

        backToTopBtn.addEventListener('click', () => {
            if (lenis) lenis.scrollTo(0, { duration: 1.5 });
            else window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => { ScrollTrigger.refresh(); }, 250);
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
