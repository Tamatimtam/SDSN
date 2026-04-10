// Hero animation — logo entrance with overshoot, scroll-driven morph into navbar
export function initHero() {
    const hero = document.getElementById('hero');
    if (!hero) return;

    const heroLogo = hero.querySelector('#hero-logo');
    const tagline = hero.querySelector('.hero__tagline');
    const titleWords = hero.querySelectorAll('.hero__title-word');
    const subtitle = hero.querySelector('.hero__subtitle');
    const ctaWrap = hero.querySelector('.hero__cta-wrap');
    const scrollIndicator = hero.querySelector('.hero__scroll-indicator');
    const videoWrap = hero.querySelector('.hero__video-wrap');
    const headerLogo = document.querySelector('.header__logo-img');
    const header = document.getElementById('header');

    // === Split Title Words into Colored Letters ===
    const titleChars = [];

    titleWords.forEach(word => {
        const isDevWord = word.classList.contains('hero__title-word--dev');

        if (isDevWord) {
            // For the "Dev[img]pment" word, walk child nodes directly
            // (mix of text nodes and an img element)
            const childNodes = Array.from(word.childNodes);
            word.innerHTML = ''; // Clear
            word.style.opacity = 1;

            childNodes.forEach(node => {
                if (node.nodeType === Node.TEXT_NODE) {
                    // Split text node into individual character spans
                    const chars = node.textContent.split('');
                    chars.forEach(ch => {
                        const charSpan = document.createElement('span');
                        charSpan.textContent = ch;
                        charSpan.className = 'hero__title-char';
                        charSpan.style.display = 'inline-block';
                        // Black color — no SDG coloring on this word
                        word.appendChild(charSpan);
                        titleChars.push(charSpan);
                    });
                } else if (node.nodeType === Node.ELEMENT_NODE && node.tagName === 'IMG') {
                    // Re-attach the image and include it in the animation array
                    node.style.display = 'inline-block';
                    word.appendChild(node);
                    titleChars.push(node);
                }
            });
        } else {
            // Normal words — split by character
            const text = word.textContent.trim();
            word.textContent = '';
            word.style.opacity = 1;

            for (let i = 0; i < text.length; i++) {
                const charSpan = document.createElement('span');
                charSpan.textContent = text[i];
                charSpan.className = 'hero__title-char';
                charSpan.style.display = 'inline-block';
                word.appendChild(charSpan);
                titleChars.push(charSpan);
            }
        }
    });

    // === Initial states ===
    gsap.set(heroLogo, { scale: 0, opacity: 0, rotation: -5 });
    gsap.set(tagline, { opacity: 0, y: 20 });
    gsap.set(titleChars, { opacity: 0, y: 30, scale: 0.8 }); // initial state for characters
    gsap.set([subtitle, ctaWrap, scrollIndicator], { opacity: 0, y: 20 });

    // === Entrance Timeline — Overshoot Bouncy ===
    const tl = gsap.timeline({ delay: 0.4 });

    // Logo bounces in with overshoot
    tl.to(heroLogo, {
        scale: 1,
        opacity: 1,
        rotation: 0,
        duration: 1.4,
        ease: 'back.out(4)',
    })
        // Tagline fades in
        .to(tagline, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'back.out(3)',
        }, '-=0.7')
        // Title characters stagger in with overshoot highly sped up
        .to(titleChars, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.03, // much faster stagger for individual letters
            ease: 'back.out(3.5)',
        }, '-=0.5')
        // Subtitle
        .to(subtitle, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'back.out(2.5)',
        }, '-=0.4')
        // CTA button bounces in
        .to(ctaWrap, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'back.out(4)',
        }, '-=0.4')
        // Scroll indicator
        .to(scrollIndicator, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'back.out(2)',
        }, '-=0.3');

    // === Parallax on scroll — video scales, content fades ===
    gsap.to(videoWrap, {
        scale: 1.15,
        scrollTrigger: {
            trigger: hero,
            start: 'top top',
            end: 'bottom top',
            scrub: 1
        }
    });

    // Fade out all hero content EXCEPT the logo (logo morphs separately)
    gsap.to([tagline, subtitle, ctaWrap], {
        opacity: 0,
        y: -40,
        immediateRender: false,
        scrollTrigger: {
            trigger: hero,
            start: '15% top',
            end: '45% top',
            scrub: 1
        }
    });

    // Title characters fade out on scroll
    gsap.to(titleChars, {
        opacity: 0,
        y: -30,
        scale: 0.9,
        stagger: 0.01, // extremely fast stagger for exit
        immediateRender: false,
        scrollTrigger: {
            trigger: hero,
            start: '15% top',
            end: '40% top',
            scrub: 1
        }
    });

    // Scroll indicator fades quickly
    gsap.to(scrollIndicator, {
        opacity: 0,
        y: -20,
        immediateRender: false,
        scrollTrigger: {
            trigger: hero,
            start: '10% top',
            end: '25% top',
            scrub: 1
        }
    });

    // === ScrollTrigger: Hero logo morphs into the navbar logo ===
    if (heroLogo && headerLogo && header) {
        // Initially hide the header logo
        gsap.set(headerLogo, { opacity: 0 });

        // Calculate the target position (header logo) dynamically
        function getHeaderLogoTarget() {
            const headerRect = headerLogo.getBoundingClientRect();
            const heroRect = heroLogo.getBoundingClientRect();
            const scaleX = headerRect.width / heroRect.width || 0.2;
            const scaleY = headerRect.height / heroRect.height || 0.2;
            const scale = Math.min(scaleX, scaleY);
            return {
                scale: scale,
                x: headerRect.left + headerRect.width / 2 - (heroRect.left + heroRect.width / 2),
                y: headerRect.top + headerRect.height / 2 - (heroRect.top + heroRect.height / 2),
            };
        }

        // Hero logo shrinks and flies to the navbar position
        ScrollTrigger.create({
            trigger: hero,
            start: '30% top',
            end: '85% top',
            scrub: 1.5,
            onUpdate: (self) => {
                const progress = self.progress;
                const target = getHeaderLogoTarget();

                // Ease the position with a custom curve
                const easedProgress = gsap.parseEase('power2.inOut')(progress);

                gsap.set(heroLogo, {
                    x: target.x * easedProgress,
                    y: target.y * easedProgress,
                    scale: 1 - (1 - target.scale) * easedProgress,
                    opacity: 1 - easedProgress * 0.8, // fade as it moves
                });
            }
        });

        // When hero logo reaches navbar, show the real header logo with a bounce
        ScrollTrigger.create({
            trigger: hero,
            start: '70% top',
            onEnter: () => {
                gsap.to(headerLogo, {
                    opacity: 1,
                    duration: 0.5,
                    ease: 'back.out(3)',
                });
            },
            onLeaveBack: () => {
                gsap.to(headerLogo, {
                    opacity: 0,
                    duration: 0.3,
                    ease: 'power2.in',
                });
            }
        });
    }
}
