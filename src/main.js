// Main entry — initialise GSAP plugins + all section animations
import { initHeader } from './animations/header.js';
import { initHero } from './animations/hero.js';
import { initAbout } from './animations/about.js';
import { initSDGs } from './animations/sdgs.js';
import { initNews } from './animations/news.js';
import { initEvents } from './animations/events.js';
import { initTeam } from './animations/team.js';
import { initFooter } from './animations/footer.js';
import { initFooterPhysics } from './animations/footer-physics.js';

// Wait for GSAP to load (loaded via CDN with defer)
function waitForGsap() {
    return new Promise((resolve) => {
        if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
            resolve();
            return;
        }
        const check = setInterval(() => {
            if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
                clearInterval(check);
                resolve();
            }
        }, 50);
    });
}

async function init() {
    await waitForGsap();

    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);

    // Global GSAP defaults
    gsap.defaults({
        ease: 'power3.out',
        duration: 0.8
    });

    // Init all sections
    initHeader();
    initHero();
    initAbout();
    initSDGs();
    initNews();
    initEvents();
    initTeam();
    initFooter();
    initFooterPhysics();

    // Smooth anchor scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                gsap.to(window, {
                    duration: 1.2,
                    scrollTo: { y: target, offsetY: 80 },
                    ease: 'power3.inOut'
                });
            }
        });
    });

    // Refresh ScrollTrigger after all content is loaded
    window.addEventListener('load', () => {
        ScrollTrigger.refresh();
    });

    // Handle resize
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            ScrollTrigger.refresh();
        }, 250);
    });
}

// Start
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
