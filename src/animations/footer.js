// Footer — MoMoney-inspired big nav links + floating SDG-colored circles
import { sdgs } from '../data/sdgs.js';

export function initFooter() {
    const footer = document.getElementById('footer');
    const circlesContainer = document.getElementById('footer-circles');
    if (!footer || !circlesContainer) return;

    // === Generate floating SDG-colored circles ===
    const circleHTML = sdgs.map((sdg, i) => {
        const size = 40 + Math.random() * 40; // 40-80px
        const bottom = -10 + Math.random() * 30;
        const left = (i / sdgs.length) * 100 + (Math.random() * 4 - 2);

        return `
      <div class="footer-circle"
           style="
             width: ${size}px;
             height: ${size}px;
             color: ${sdg.color};
             background: ${sdg.color}20;
             bottom: ${bottom}px;
             left: ${left}%;
             font-size: ${size * 0.35}px;
           "
           data-sdg="${sdg.number}"
           title="SDG ${sdg.number}: ${sdg.title}">
        ${sdg.number}
      </div>
    `;
    }).join('');

    circlesContainer.innerHTML = circleHTML;

    // Animate circles bouncing in
    const circles = circlesContainer.querySelectorAll('.footer-circle');
    gsap.fromTo(circles,
        { y: 100, opacity: 0, scale: 0 },
        {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: {
                each: 0.05,
                from: 'random'
            },
            ease: 'back.out(2)',
            scrollTrigger: {
                trigger: circlesContainer,
                start: 'top 95%',
                toggleActions: 'play none none none'
            }
        }
    );

    // Floating idle animation
    circles.forEach((circle, i) => {
        gsap.to(circle, {
            y: -8 - Math.random() * 12,
            duration: 2 + Math.random() * 2,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: Math.random() * 2
        });
    });

    // === Big footer nav link animations ===
    const bigLinks = footer.querySelectorAll('.footer__big-link');
    gsap.fromTo(bigLinks,
        { opacity: 0, x: -40 },
        {
            opacity: 1,
            x: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: 'power3.out',
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
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: rightCol,
                    start: 'top 90%',
                    toggleActions: 'play none none none'
                }
            }
        );
    }
}
