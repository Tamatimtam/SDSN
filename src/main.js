// Main entry — initialise GSAP plugins, Lenis smooth scroll, all section animations
import { initHeader } from './animations/header.js';
import { initHero } from './animations/hero.js';
import { initAbout } from './animations/about.js';
import { initSDGs } from './animations/sdgs.js';
import { initNews } from './animations/news.js';
import { initEvents } from './animations/events.js';
import { initTeam } from './animations/team.js';
import { initFooter } from './animations/footer.js';
import { initFooterPhysics } from './animations/footer-physics.js';
import { sdgs } from './data/sdgs.js';

// Wait for GSAP to load (required), Lenis is optional
function waitForGsap() {
    return new Promise((resolve) => {
        console.log('[SDSN Debug] Waiting for GSAP...');
        const check = () => {
            if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
                console.log('[SDSN Debug] ✅ GSAP loaded');
                resolve();
                return true;
            }
            return false;
        };
        if (check()) return;
        const interval = setInterval(() => {
            if (check()) clearInterval(interval);
        }, 50);
        // Safety timeout
        setTimeout(() => {
            clearInterval(interval);
            console.error('[SDSN Debug] ❌ GSAP failed to load after 8s');
            console.log('[SDSN Debug] gsap:', typeof gsap, '| ScrollTrigger:', typeof ScrollTrigger);
            resolve(); // resolve anyway so we can show debug info
        }, 8000);
    });
}

function waitForLenis() {
    return new Promise((resolve) => {
        console.log('[SDSN Debug] Waiting for Lenis...');
        const check = () => {
            if (typeof Lenis !== 'undefined') {
                console.log('[SDSN Debug] ✅ Lenis loaded');
                resolve(true);
                return true;
            }
            return false;
        };
        if (check()) return;
        const interval = setInterval(() => {
            if (check()) clearInterval(interval);
        }, 50);
        // Lenis is optional — timeout after 3 seconds
        setTimeout(() => {
            clearInterval(interval);
            if (typeof Lenis === 'undefined') {
                console.warn('[SDSN Debug] ⚠️ Lenis not available after 3s — falling back to native scroll');
                resolve(false);
            }
        }, 3000);
    });
}

function assignRandomSDGColors() {
    const elementsToColorize = document.querySelectorAll(`
        .section-tag,
        .btn-primary,
        .btn-secondary,
        .social-icon,
        .footer__big-link a,
        .team-card__name,
        .footer__bottom a,
        .news-card__tag,
        .event-card__date,
        .team-card__role,
        .stat-card__number
    `);

    elementsToColorize.forEach(el => {
        const randomSdg = sdgs[Math.floor(Math.random() * sdgs.length)];
        el.style.setProperty('--accent', randomSdg.color);
    });
}

function safeInit(name, fn) {
    try {
        fn();
        console.log(`[SDSN Debug] ✅ ${name} initialized`);
    } catch (err) {
        console.error(`[SDSN Debug] ❌ ${name} FAILED:`, err);
    }
}

async function init() {
    console.log('[SDSN Debug] 🚀 Init started');
    console.log('[SDSN Debug] User Agent:', navigator.userAgent);

    await waitForGsap();

    // Abort if GSAP didn't load
    if (typeof gsap === 'undefined') {
        console.error('[SDSN Debug] ❌ Cannot continue without GSAP');
        return;
    }

    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);
    console.log('[SDSN Debug] ✅ ScrollTrigger registered');

    // Wait for Lenis (optional)
    const lenisAvailable = await waitForLenis();
    let lenis = null;

    if (lenisAvailable) {
        try {
            // === Lenis Smooth Scroll — slippery, buttery feel ===
            lenis = new Lenis({
                lerp: 0.08, // Adjust for slipperiness (default 0.1, lower is smoother)
                smoothWheel: true,
                wheelMultiplier: 1.0,
                touchMultiplier: 2.0,
            });

            // Connect Lenis to GSAP's ScrollTrigger
            lenis.on('scroll', ScrollTrigger.update);

            // Use GSAP's ticker for Lenis RAF loop
            gsap.ticker.add((time) => {
                lenis.raf(time * 1000);
            });
            gsap.ticker.lagSmoothing(0);
            console.log('[SDSN Debug] ✅ Lenis smooth scroll active');
        } catch (err) {
            console.error('[SDSN Debug] ❌ Lenis init failed:', err);
            lenis = null;
        }
    }

    // Global GSAP defaults — overshoot bounce as the baseline
    gsap.defaults({
        ease: 'back.out(2)',
        duration: 0.8
    });

    // Init all sections with error isolation
    safeInit('Header', initHeader);
    safeInit('Hero', initHero);
    safeInit('About', initAbout);
    safeInit('SDGs', initSDGs);
    safeInit('News', initNews);
    safeInit('Events', initEvents);
    safeInit('Team', initTeam);
    safeInit('Footer', initFooter);
    safeInit('FooterPhysics', initFooterPhysics);

    safeInit('RandomSDGColors', assignRandomSDGColors);

    // Smooth anchor scrolling — use Lenis if available, fallback to GSAP scrollTo
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const targetEl = document.querySelector(anchor.getAttribute('href'));
            if (targetEl) {
                if (lenis) {
                    lenis.scrollTo(targetEl, {
                        offset: -80,
                        duration: 1.5,
                        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                    });
                } else {
                    // Native smooth scroll fallback
                    targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });

    // === Back to Top Button ===
    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 800) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        }, { passive: true });

        backToTopBtn.addEventListener('click', () => {
            if (lenis) {
                lenis.scrollTo(0, { duration: 1.5 });
            } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    }

    // === Skip SDGs Button ===
    const skipSdgsBtn = document.getElementById('skip-sdgs');
    if (skipSdgsBtn) {
        skipSdgsBtn.addEventListener('click', () => {
            const newsSection = document.getElementById('news');
            if (newsSection) {
                if (lenis) {
                    lenis.scrollTo(newsSection, { offset: -80, duration: 1.5 });
                } else {
                    newsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    }

    // Refresh ScrollTrigger after all content is loaded
    window.addEventListener('load', () => {
        ScrollTrigger.refresh();
        console.log('[SDSN Debug] ✅ ScrollTrigger refreshed on load');
    });

    // Handle resize
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            ScrollTrigger.refresh();
        }, 250);
    });

    console.log('[SDSN Debug] 🎉 Init complete!');
}

// Start
console.log('[SDSN Debug] 📋 Script loaded, readyState:', document.readyState);
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
