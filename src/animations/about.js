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
                ease: 'back.out(3.5)',
                scrollTrigger: {
                    trigger: el,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                }
            }
        );
    });

    // === SDG Colored Letters for Heading ===
    const headingEm = section.querySelector('.about__heading em');
    if (headingEm) {
        const text = headingEm.textContent.trim();
        headingEm.textContent = ''; // clear original

        // Split and color
        let charIndex = 0;
        for (let i = 0; i < text.length; i++) {
            const charSpan = document.createElement('span');
            charSpan.textContent = text[i];

            // Only apply color to non-space characters to keep index aligned
            if (text[i].trim() !== '') {
                const sdgNum = (charIndex % 17) + 1;
                charSpan.style.color = `var(--sdg-${sdgNum})`;
                charIndex++;
            }
            headingEm.appendChild(charSpan);
        }
    }

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
            ease: 'back.out(3.5)',
            scrollTrigger: {
                trigger: statCards[0],
                start: 'top 85%',
                toggleActions: 'play none none none'
            }
        }
    );
}
