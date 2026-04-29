// SDG horizontal scroll carousel — ScrollTrigger pinned horizontal scroll + Curtain Transition
import { sdgs } from '/src/data/sdgs.js';

export function initSDGs() {
    const carousel = document.getElementById('sdgs-carousel');
    const section = document.querySelector('.sdgs');
    if (!carousel || !section) return;

    // Inject SDG cards dengan tambahan data-sdg dan data-color
    carousel.innerHTML = sdgs.map(sdg => {
        // Pad number with zero for URL (e.g. 1 becomes "01")
        const paddedNumber = String(sdg.number).padStart(2, '0');
        return `
        <div class="sdg-card" data-sdg="${paddedNumber}" data-color="${sdg.color}" style="--sdg-color: ${sdg.color}">
          <div class="sdg-card__accent" style="background: ${sdg.color}"></div>
          <div class="sdg-card__image-wrap" style="background-color: ${sdg.color}">
            <img class="sdg-card__image" src="${sdg.icon}" alt="SDG ${sdg.number}: ${sdg.title}" loading="lazy" />
          </div>
          <div class="sdg-card__body">
            <span class="sdg-card__number" style="color: ${sdg.color}">Goal ${sdg.number}</span>
            <h3 class="sdg-card__title">${sdg.title}</h3>
            <p class="sdg-card__desc">${sdg.description}</p>
          </div>
        </div>
      `;
    }).join('');

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
                ease: 'back.out(3)',
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
                trigger: '.sdgs',
                start: 'top 10px',
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
                    ease: 'back.out(3)',
                    scrollTrigger: {
                        trigger: '.sdgs',
                        start: 'top 80%',
                        toggleActions: 'play none none none'
                    }
                }
            );

            // === THE CURTAIN TRANSITION (CLICK INTERACTION) ===
            card.addEventListener('click', (e) => {
                e.preventDefault();

                const sdgNum = card.getAttribute('data-sdg');
                const sdgColor = card.getAttribute('data-color');
                const targetUrl = `./goals/${sdgNum}.html`;

                gsap.to(card, {
                    scale: 0.9,
                    duration: 0.3,
                    ease: 'power2.out'
                });

                const curtain = document.createElement('div');
                curtain.style.position = 'fixed';
                curtain.style.inset = '0';
                curtain.style.width = '100vw';
                curtain.style.height = '100vh';
                curtain.style.backgroundColor = sdgColor;
                curtain.style.zIndex = '99999';
                curtain.style.pointerEvents = 'none';
                document.body.appendChild(curtain);

                if (window.lenisInstance) {
                    window.lenisInstance.stop();
                }
                document.body.style.overflow = 'hidden';

                // --- RANDOM DIRECTION LOGIC ---
                const directions = [
                    { x: '0%', y: '100%' },
                    { x: '0%', y: '-100%' },
                    { x: '-100%', y: '0%' },
                    { x: '100%', y: '0%' }
                ];
                const randStart = directions[Math.floor(Math.random() * directions.length)];

                // Set posisi awal di luar layar
                gsap.set(curtain, { x: randStart.x, y: randStart.y });

                // Animasi masuk menutup layar
                gsap.to(curtain, {
                    x: '0%',
                    y: '0%',
                    duration: 0.8,
                    ease: 'expo.inOut',
                    delay: 0.05,
                    onComplete: () => {
                        window.location.href = targetUrl;
                    }
                });
            });

        });
    });
}