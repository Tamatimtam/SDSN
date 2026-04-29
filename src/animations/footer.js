// Footer — MoMoney-inspired big nav links + floating SDG-colored circles
import { sdgs } from '/src/data/sdgs.js';

export function initFooter() {
    const footer = document.getElementById('footer');
    // === Big footer nav link animations ===
    const bigLinks = footer.querySelectorAll('.footer__big-link');
    gsap.fromTo(bigLinks,
        { opacity: 0, x: -40 },
        {
            opacity: 1,
            x: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: 'back.out(1.5)',
            scrollTrigger: {
                trigger: bigLinks[0],
                start: 'top 90%',
                toggleActions: 'play none none none'
            }
        }
    );

    // === Right column reveals ===
    const rightCol = footer.querySelector('.footer__info-col');
    if (rightCol) {
        const children = rightCol.children;
        gsap.fromTo(children,
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.15,
                ease: 'back.out(2)',
                scrollTrigger: {
                    trigger: rightCol,
                    start: 'top 90%',
                    toggleActions: 'play none none none'
                }
            }
        );
    }
}
