// Hero animation — kinetic typography, parallax on scroll, CTA reveal
export function initHero() {
    const hero = document.getElementById('hero');
    if (!hero) return;

    const words = hero.querySelectorAll('.hero__title .word');
    const subtitle = hero.querySelector('.hero__subtitle');
    const ctaWrap = hero.querySelector('.hero__cta-wrap');
    const scrollIndicator = hero.querySelector('.hero__scroll-indicator');
    const videoWrap = hero.querySelector('.hero__video-wrap');

    // === Kinetic Typography — staggered word reveal ===
    const tl = gsap.timeline({ delay: 0.3 });

    tl.to(words, {
        y: 0,
        duration: 1.2,
        stagger: 0.12,
        ease: 'power4.out'
    })
        .to(subtitle, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out'
        }, '-=0.4')
        .to(ctaWrap, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out'
        }, '-=0.4')
        .to(scrollIndicator, {
            opacity: 1,
            duration: 0.6,
            ease: 'power2.out'
        }, '-=0.2');

    // === Parallax on scroll — video scales, content fades ===
    gsap.to(videoWrap, {
        scale: 1.15,
        scrollTrigger: {
            trigger: hero,
            start: 'top top',
            end: 'bottom top',
            scrub: 1
        }
    });

    gsap.to('.hero__content', {
        y: -80,
        opacity: 0,
        scrollTrigger: {
            trigger: hero,
            start: '60% top',
            end: 'bottom top',
            scrub: 1
        }
    });

    gsap.to(scrollIndicator, {
        opacity: 0,
        y: -20,
        scrollTrigger: {
            trigger: hero,
            start: '20% top',
            end: '40% top',
            scrub: 1
        }
    });

    // Simplified: we rely purely on the stagger reveal animation for the words
}
