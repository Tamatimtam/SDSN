// About section — reveal animations + counter
export function initAbout() {
    const section = document.getElementById('about');
    if (!section) return;

    // Reveal elements on scroll
    const reveals = section.querySelectorAll('[data-reveal]');
    reveals.forEach((el, i) => {
        gsap.fromTo(el,
            { opacity: 0, y: 40 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                delay: i * 0.1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: el,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                }
            }
        );
    });

    // Counter animations
    const counters = section.querySelectorAll('[data-count]');
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-count'));
        const obj = { value: 0 };

        gsap.to(obj, {
            value: target,
            duration: 2,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: counter,
                start: 'top 85%',
                toggleActions: 'play none none none'
            },
            onUpdate: () => {
                counter.textContent = Math.round(obj.value).toLocaleString();
            }
        });
    });

    // Stat cards stagger
    const statCards = section.querySelectorAll('.stat-card');
    gsap.fromTo(statCards,
        { opacity: 0, scale: 0.9, y: 30 },
        {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'back.out(1.7)',
            scrollTrigger: {
                trigger: statCards[0],
                start: 'top 85%',
                toggleActions: 'play none none none'
            }
        }
    );
}
