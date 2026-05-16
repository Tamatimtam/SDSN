// Events timeline — alternating card reveals
import { events } from '/src/data/team.js';

export function initEvents() {
    const timeline = document.getElementById('events-timeline');
    const section = document.querySelector('.events');
    if (!timeline || !section) return;

    // Inject event cards
    timeline.innerHTML = events.map((event, i) => {
      // Loop through SDG 1 to 17 colors for theme mixture
      const sdgColorVar = `var(--sdg-${(i % 17) + 1})`;
      
      return `
    <a href="${event.link || '#'}" class="event-card" data-index="${i}" style="--event-color: ${sdgColorVar};" target="_blank" rel="noopener">
      <div class="event-card__top">
        <div class="event-card__date" style="color: var(--event-color);">${event.date}</div>
        <h3 class="event-card__title">${event.title}</h3>
        <span class="event-card__location">${event.location}</span>
      </div>
      <div class="event-card__expand">
        <div class="event-card__expand-inner">
          <div class="event-card__image-wrap">
            <img class="event-card__image" src="${event.image}" alt="${event.title}" loading="lazy" />
          </div>
          <p class="event-card__desc">${event.description}</p>
        </div>
      </div>
    </a>
  `;
    }).join('');

    // Reveal header
    const reveals = section.querySelectorAll('.events__header [data-reveal]');
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

    // Animate timeline line
    gsap.fromTo(timeline,
        { '--line-scale': 0 },
        {
            '--line-scale': 1,
            scrollTrigger: {
                trigger: timeline,
                start: 'top 80%',
                end: 'bottom 50%',
                scrub: 1
            }
        }
    );

    // Animate cards with alternating slide direction
    const cards = timeline.querySelectorAll('.event-card');
    cards.forEach((card, i) => {
        const fromLeft = i % 2 === 0;
        gsap.fromTo(card,
            {
                opacity: 0,
                x: fromLeft ? -60 : 60,
                y: 30
            },
            {
                opacity: 1,
                x: 0,
                y: 0,
                duration: 0.8,
                ease: 'back.out(3)',
                scrollTrigger: {
                    trigger: card,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                }
            }
        );
    });
}
