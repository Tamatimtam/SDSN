import { testimonials } from '../data/testimonials.js';

export function initTestimonials() {
    const track = document.getElementById('testimonials-track');
    const section = document.querySelector('.testimonials');
    if (!track || !section) return;

    // Inject cards
    track.innerHTML = testimonials.map((t, i) => {
        // Tie into the 17 SDG colors dynamic variable logic to match the rest of the site thematic
        const sdgColorVar = `var(--sdg-${t.sdg})`;

        return `
    <div class="testimonial-card" data-index="${i}" style="--event-color: ${sdgColorVar};">
        <p class="testimonial-card__quote">${t.quote}</p>
        <div class="testimonial-card__author">
            <div class="testimonial-card__frame">
                <img class="testimonial-card__image" src="${t.image}" alt="${t.name}" loading="lazy" />
            </div>
            <div class="testimonial-card__details">
                <div class="testimonial-card__name">${t.name}</div>
                <div class="testimonial-card__role">${t.role}</div>
            </div>
        </div>
    </div>
  `;
    }).join('');

    // Reveal Header
    const headerReveals = section.querySelectorAll('.testimonials__header [data-reveal]');
    headerReveals.forEach((el, i) => {
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

    // Add robust scroll logic for the mini arrows
    const prevBtn = section.querySelector('.testimonials__arrow--prev');
    const nextBtn = section.querySelector('.testimonials__arrow--next');

    // Calculate smart scroll distance based on device width vs card width
    const getScrollDistance = () => track.querySelector('.testimonial-card').offsetWidth + 32;

    if (prevBtn && nextBtn) {
        nextBtn.addEventListener('click', () => {
            track.scrollBy({ left: getScrollDistance(), behavior: 'smooth' });
        });
        prevBtn.addEventListener('click', () => {
            track.scrollBy({ left: -getScrollDistance(), behavior: 'smooth' });
        });
    }

    // Modern Mouse Drag-to-Scroll UX
    let isDown = false;
    let startX;
    let scrollLeft;

    track.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - track.offsetLeft;
        scrollLeft = track.scrollLeft;
        // temporarily disable snapping so drag feels exactly 1:1 with mouse movement
        track.style.scrollSnapType = 'none'; 
    });

    track.addEventListener('mouseleave', () => {
        isDown = false;
        track.style.scrollSnapType = 'x mandatory';
    });

    track.addEventListener('mouseup', () => {
        isDown = false;
        track.style.scrollSnapType = 'x mandatory';
    });

    track.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - track.offsetLeft;
        const walk = (x - startX) * 1.5; // Drag speed multiplier
        track.scrollLeft = scrollLeft - walk;
    });

    // Animate Cards Staggered reveal
    const cards = track.querySelectorAll('.testimonial-card');
    gsap.fromTo(cards,
        {
            opacity: 0,
            x: 60,
            scale: 0.95
        },
        {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: 'expo.out',
            scrollTrigger: {
                trigger: track,
                start: 'top 85%',
                toggleActions: 'play none none none'
            }
        }
    );
}