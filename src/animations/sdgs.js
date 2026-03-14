// SDG horizontal scroll carousel — ScrollTrigger pinned horizontal scroll
import { sdgs } from '../data/sdgs.js';

export function initSDGs() {
    const carousel = document.getElementById('sdgs-carousel');
    const section = document.querySelector('.sdgs');
    if (!carousel || !section) return;

    // Inject SDG cards
    carousel.innerHTML = sdgs.map(sdg => `
    <div class="sdg-card" style="--sdg-color: ${sdg.color}">
      <div class="sdg-card__accent" style="background: ${sdg.color}"></div>
      <div class="sdg-card__image-wrap">
        <img class="sdg-card__image" src="${sdg.icon}" alt="SDG ${sdg.number}: ${sdg.title}" loading="lazy" />
      </div>
      <div class="sdg-card__body">
        <span class="sdg-card__number" style="color: ${sdg.color}">Goal ${sdg.number}</span>
        <h3 class="sdg-card__title">${sdg.title}</h3>
        <p class="sdg-card__desc">${sdg.description}</p>
      </div>
    </div>
  `).join('');

    // Reveal header elements
    const reveals = section.querySelectorAll('.sdgs__header [data-reveal]');
    reveals.forEach((el, i) => {
        gsap.fromTo(el,
            { opacity: 0, y: 30 },
            {
                opacity: 1,
                y: 0,
                duration: 0.7,
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

    // Wait for images to set correct width
    requestAnimationFrame(() => {
        const totalScrollWidth = carousel.scrollWidth - window.innerWidth;
        const progressBar = section.querySelector('.sdgs__progress-bar');

        // Horizontal scroll with pin
        const scrollTween = gsap.to(carousel, {
            x: -totalScrollWidth,
            ease: 'none',
            scrollTrigger: {
                trigger: '.sdgs__carousel-wrap',
                start: 'top 20%',
                end: () => `+=${totalScrollWidth}`,
                pin: true,
                scrub: 1,
                anticipatePin: 1,
                invalidateOnRefresh: true,
                onUpdate: (self) => {
                    if (progressBar) {
                        progressBar.style.width = `${self.progress * 100}%`;
                    }
                }
            }
        });

        // Stagger card entrance
        const cards = carousel.querySelectorAll('.sdg-card');
        cards.forEach((card, i) => {
            gsap.fromTo(card,
                { opacity: 0, y: 50, scale: 0.95 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.6,
                    delay: i * 0.03,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: '.sdgs__carousel-wrap',
                        start: 'top 80%',
                        toggleActions: 'play none none none'
                    }
                }
            );
        });
    });
}
