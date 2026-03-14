            gsap.to("body", { ...colorThemes.getTheme(theme) });
        }
      });
    });
});
</script>


<!-- Split Text -->
<script>
document.addEventListener("DOMContentLoaded", () => {
	if (typeof window.gsap === "undefined") document.documentElement.classList.add("gsap-not-found");
	gsap.registerPlugin(ScrollTrigger, Flip, SplitText);
});
</script>

<!-- Split Text Headings -->
<script>
  document.addEventListener("DOMContentLoaded", () => {
    ScrollTrigger.matchMedia({
      "(prefers-reduced-motion: reduce)": () => {
        document.querySelectorAll("[data-word-reveal='true']").forEach(text => {
          text.style.visibility = "visible";
          text.querySelectorAll(".word, .char").forEach(el => {
            el.style.visibility = "visible";
          });
          const sticker = text.querySelector("[data-sticker-reveal]");
          if (sticker) sticker.style.visibility = "visible";
        });
      },

      "(prefers-reduced-motion: no-preference)": () => {
        document.querySelectorAll("[data-word-reveal='true']").forEach((text) => {
          const sticker = text.querySelectorAll("[data-sticker-reveal]");

          const split = SplitText.create(text, {
            type: "words, chars",
            wordsClass: "word",
            charsClass: "char",
          });

          // ensure container is visible before animating
          gsap.set(text, { visibility: "visible" });

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: text,
              start: "top bottom",
              end: "top 80%",
              toggleActions: "none play none reset",
            },
--
          tl.from(split.words, {
            autoAlpha: 0,
            yPercent: 100,
            scaleY: 0,
            rotate: 10,
            delay: 0.2,
            duration: 1,
            ease: "elastic.out(0.75, 0.6)",
            stagger: { each: 0.035 },
          });

          if (sticker) {
            tl.from(
              sticker,
              {
                scale: 0,
                duration: 0.4,
                ease: "back.out(3)",
                stagger: 0.2,
              },
              "<+35%"
            );
          }
        });
      }
    });
  });
</script>

<!-- Sticker Intertia -->
<script>
document.addEventListener("DOMContentLoaded", function() {
  // Check if GSAP and InertiaPlugin are available
  if (typeof gsap === 'undefined' || typeof InertiaPlugin === 'undefined') {
    console.warn('GSAP or InertiaPlugin not loaded');
    return;
  }

  const mm = gsap.matchMedia();
  gsap.registerPlugin(InertiaPlugin);
  
  let oldX = 0,
    oldY = 0,
    deltaX = 0,
    deltaY = 0;
    
  document.addEventListener('mousemove', e => {
    deltaX = e.clientX - oldX;
    deltaY = e.clientY - oldY;
    oldX = e.clientX;
    oldY = e.clientY;
  });
  
  function getCurrentRotation(el) {
    const st = window.getComputedStyle(el),
      tr = st.getPropertyValue('transform');
    if (tr === 'none') return 0;
    const [a, b] = tr
      .match(/matrix\(([^)]+)\)/)[1]
      .split(',')
      .map(parseFloat);
    return Math.atan2(b, a) * (180 / Math.PI);
  }
  
  mm.add("(prefers-reduced-motion: no-preference)", () => {
    document.querySelectorAll('[data-sticker-inertia]').forEach(el => {
      el.addEventListener('mouseenter', () => {
        gsap.killTweensOf(el);
--
        tl.fromTo(
          el, { rotation: startRot },
          {
            duration: 0.4,
            rotation: startRot + wiggleAngle,
            yoyo: true,
            repeat: 1,
            ease: 'power1.inOut'
          },
          '<'
        );
      });
    });
    return () => {
      mm.revert();
    };
  });
});
</script>

<!-- Image Pixel Frame -->
<script>
(function() {
  function initPixelAnimations() {
    // Check dependencies
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
      console.warn('GSAP or ScrollTrigger not loaded');
      return;
    }

    const pixelFrames = document.querySelectorAll('[data-pixel-frame]');
    if (pixelFrames.length > 0) {
      gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
        // Only run animations when user doesn't have reduced motion enabled
        pixelFrames.forEach((el) => {
          const pixels = el.querySelectorAll('[data-pixel-el]');
          if (pixels.length === 0) return;
          gsap.set(pixels, { opacity: 0 });
          let allPaths = [];
          pixels.forEach(p => {
            const paths = p.querySelectorAll('svg path');
            if (paths.length > 0) {
              gsap.set(paths, { opacity: 0 });
              allPaths.push(...paths);
            }
          });
          if (allPaths.length === 0) return;
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: el,
              start: 'top bottom',
              end: 'top 70%',
              toggleActions: 'none play none reset'
            }
          });
          tl.to(pixels, {
              opacity: 1,
              duration: 0.1,
              ease: 'none'
            })
            .to(allPaths, {
              opacity: 1,
              duration: 0.05,
              ease: 'none',
              stagger: {
                each: 0.02,
                from: 'random'
              }
            }, '-=0.05');
        });
      });
      // Optional: Provide a fallback for users with reduced motion
      gsap.matchMedia().add("(prefers-reduced-motion: reduce)", () => {
        // Simply show all elements without animation
        pixelFrames.forEach((el) => {
          const pixels = el.querySelectorAll('[data-pixel-el]');
          const allPaths = el.querySelectorAll('[data-pixel-el] svg path');
          gsap.set([pixels, allPaths], { opacity: 1 });
        });
      });
    }
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPixelAnimations);
  } else {
    initPixelAnimations();
  }
})();
</script>

<!-- Notification Popup -->
<script>
(function() {
  if (window.popupsInitialized) return;
  window.popupsInitialized = true;
  
  function initPopups() {
    const today = new Date();
    const todayDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const todayString = todayDate.toISOString().split('T')[0];
    
