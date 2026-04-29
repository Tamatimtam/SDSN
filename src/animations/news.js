// News bento grid — cards animate in from different directions
import { news } from '/src/data/news.js';

export function initNews() {
    const bento = document.getElementById('news-bento');
    const section = document.querySelector('.news');
    if (!bento || !section) return;

    // Inject news cards
    bento.innerHTML = news.map((item, i) => {
        const isLarge = i === 0;
        return `
      <article class="news-card ${isLarge ? 'news-card--large' : ''}" data-index="${i}">
        <div class="news-card__min-height">
          <img class="news-card__image" src="${item.image}" alt="${item.title}" loading="lazy" />
          <div class="news-card__overlay"></div>
          <div class="news-card__content">
            <span class="news-card__date">${item.date}</span>
            <h3 class="news-card__title">${item.title}</h3>
            <div class="news-card__tags">
              ${item.tags.map(tag => `<span class="news-card__tag">${tag}</span>`).join('')}
            </div>
          </div>
        </div>
      </article>
    `;
    }).join('');

    // Reveal header
    const reveals = section.querySelectorAll('.news__header [data-reveal]');
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

    // Animate cards in from different directions
    const cards = bento.querySelectorAll('.news-card');
    const directions = [
        { x: -60, y: 40, rotation: -3 },   // left
        { x: 60, y: 40, rotation: 3 },     // right
        { x: 0, y: 60, rotation: 0 },      // bottom
        { x: 60, y: -20, rotation: 2 },    // right-top
        { x: -40, y: 50, rotation: -2 },   // left-bottom
        { x: 40, y: 50, rotation: 2 },     // right-bottom
    ];

    cards.forEach((card, i) => {
        const dir = directions[i % directions.length];
        gsap.fromTo(card,
            {
                opacity: 0,
                x: dir.x,
                y: dir.y,
                rotation: dir.rotation,
                scale: 0.9
            },
            {
                opacity: 1,
                x: 0,
                y: 0,
                rotation: 0,
                scale: 1,
                duration: 0.8,
                ease: 'back.out(3)',
                scrollTrigger: {
                    trigger: card,
                    start: 'top 90%',
                    toggleActions: 'play none none none'
                }
            }
        );

        // Parallax tilt on hover
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;

            gsap.to(card, {
                rotateY: x * 8,
                rotateX: -y * 8,
                transformPerspective: 800,
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
