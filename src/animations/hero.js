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

    // Ensure words are initially rotated/scaled similar to MoMoney
    gsap.set(words, { y: 100, rotation: 10, scaleY: 0 });
    gsap.set([subtitle, ctaWrap, scrollIndicator], { opacity: 0, scale: 0.8 });

    tl.to(words, {
        y: 0,
        rotation: 0,
        scaleY: 1,
        duration: 1.2,
        stagger: 0.05,
        ease: 'elastic.out(0.75, 0.6)'
    })
        .to(subtitle, {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: 'back.out(1.7)'
        }, '-=0.6')
        .to(ctaWrap, {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: 'back.out(3)'
        }, '-=0.6')
        .to(scrollIndicator, {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: 'back.out(1.7)'
        }, '-=0.4');

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
