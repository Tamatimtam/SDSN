// Header animation — glassmorphic hide/show, magnetic links, dropdown mega-menus with GSAP
export function initHeader() {
    const header = document.getElementById('header');
    if (!header) return;

    let lastScrollY = 0;
    let ticking = false;

    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        // Add/remove scrolled class for glassmorphism
        if (currentScrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Hide on scroll down, show on scroll up
        if (currentScrollY > lastScrollY && currentScrollY > 200) {
            header.classList.add('hidden');
            // Close any open dropdowns when header hides
            closeAllDropdowns();
        } else {
            header.classList.remove('hidden');
        }

        lastScrollY = currentScrollY;
        ticking = false;
    };

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(handleScroll);
            ticking = true;
        }
    });

    // === Magnetic nav links ===
    const magneticLinks = header.querySelectorAll('[data-magnetic]');
    magneticLinks.forEach(link => {
        link.addEventListener('mousemove', (e) => {
            const rect = link.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            gsap.to(link, {
                x: x * 0.3,
                y: y * 0.3,
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        link.addEventListener('mouseleave', () => {
            gsap.to(link, {
                x: 0,
                y: 0,
                duration: 0.5,
                ease: 'elastic.out(1, 0.5)'
            });
        });
    });

    // === Dropdown Mega Menus ===
    const navItems = header.querySelectorAll('.nav-item');
    let activeDropdown = null;
    let closeTimeout = null;

    function openDropdown(navItem) {
        if (closeTimeout) {
            clearTimeout(closeTimeout);
            closeTimeout = null;
        }

        // Close other dropdowns first
        if (activeDropdown && activeDropdown !== navItem) {
            closeDropdown(activeDropdown, true);
        }

        if (activeDropdown === navItem) return;

        activeDropdown = navItem;
        navItem.classList.add('dropdown-active');

        const dropdown = navItem.querySelector('.nav-dropdown');
        const inner = navItem.querySelector('.nav-dropdown__inner');
        const links = navItem.querySelectorAll('.nav-dropdown__link');
        const headings = navItem.querySelectorAll('.nav-dropdown__heading');

        // Animate the dropdown panel
        gsap.killTweensOf([dropdown, inner, links, headings]);

        gsap.set(dropdown, { opacity: 1 });
        gsap.fromTo(inner,
            { scaleY: 0, scaleX: 0.95, opacity: 0 },
            {
                scaleY: 1,
                scaleX: 1,
                opacity: 1,
                duration: 0.45,
                ease: 'back.out(3)', // Overshoot bounce on open
            }
        );

        // Stagger headings in with bounce
        gsap.fromTo(headings,
            { opacity: 0, y: -10 },
            {
                opacity: 1,
                y: 0,
                duration: 0.35,
                stagger: 0.05,
                delay: 0.15,
                ease: 'back.out(3)',
            }
        );

        // Stagger links in with bounce
        gsap.fromTo(links,
            { opacity: 0, x: -12, y: 5 },
            {
                opacity: 1,
                x: 0,
                y: 0,
                duration: 0.35,
                stagger: 0.04,
                delay: 0.2,
                ease: 'back.out(3)', // Bouncy entrance per link
            }
        );
    }

    function closeDropdown(navItem, immediate = false) {
        if (!navItem) return;

        const dropdown = navItem.querySelector('.nav-dropdown');
        const inner = navItem.querySelector('.nav-dropdown__inner');

        const duration = immediate ? 0.2 : 0.3;

        gsap.to(inner, {
            scaleY: 0,
            opacity: 0,
            duration: duration,
            ease: 'power2.in',
            onComplete: () => {
                navItem.classList.remove('dropdown-active');
                gsap.set(dropdown, { opacity: 0 });
            }
        });

        if (activeDropdown === navItem) {
            activeDropdown = null;
        }
    }

    function closeAllDropdowns() {
        navItems.forEach(item => {
            if (item.classList.contains('dropdown-active')) {
                closeDropdown(item, true);
            }
        });
    }

    navItems.forEach(navItem => {
        navItem.addEventListener('mouseenter', () => {
            openDropdown(navItem);
        });

        navItem.addEventListener('mouseleave', () => {
            closeTimeout = setTimeout(() => {
                closeDropdown(navItem);
            }, 150); // Small delay to allow mouse to move to dropdown
        });
    });

    // Close dropdowns on scroll
    window.addEventListener('scroll', () => {
        if (activeDropdown) {
            closeAllDropdowns();
        }
    }, { passive: true });

    // === Animate header in on load — with overshoot ===
    // Using fromTo instead of from for Firefox reliability
    gsap.fromTo(header,
        { y: -100, opacity: 0 },
        {
            y: 0,
            opacity: 1,
            duration: 1.2,
            delay: 0.3,
            ease: 'back.out(3)',
        }
    );
}
