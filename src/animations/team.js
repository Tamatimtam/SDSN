// Team section — staggered card entrance with hover effects
import { team } from '../data/team.js';

export function initTeam() {
    const grid = document.getElementById('team-grid');
    const section = document.querySelector('.team');
    if (!grid || !section) return;

    // Inject team cards
    grid.innerHTML = team.map(member => `
    <div class="team-card">
      <div class="team-card__avatar-wrap">
        <img class="team-card__avatar" src="${member.avatar}" alt="${member.name}" loading="lazy" />
      </div>
      <h3 class="team-card__name">${member.name}</h3>
      <span class="team-card__role">${member.role}</span>
      <span class="team-card__org">${member.org}</span>
    </div>
  `).join('');

    // Reveal header
    const reveals = section.querySelectorAll('.team__header [data-reveal]');
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

    // Staggered card entrance
    const cards = grid.querySelectorAll('.team-card');
    gsap.fromTo(cards,
        { opacity: 0, y: 50, scale: 0.9 },
        {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: 'back.out(3.5)',
            scrollTrigger: {
                trigger: grid,
                start: 'top 85%',
                toggleActions: 'play none none none'
            }
        }
    );

    // Hover tilt effect on cards
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;

            gsap.to(card, {
                rotateY: x * 10,
                rotateX: -y * 10,
                transformPerspective: 600,
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                rotateX: 0,
                rotateY: 0,
                duration: 0.5,
                ease: 'elastic.out(1, 0.5)'
            });
        });
    });
}
