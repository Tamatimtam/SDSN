      gsap.to(b, { alpha: 0, duration: 2, delay: 0.5 });
    }

    function supportsTouch() {
      return 'ontouchstart' in window || navigator.maxTouchPoints > 1;
    }

    if (!supportsTouch()) {
      document.addEventListener('mousemove', function onPointerMove(e) {
        const r = canvas.getBoundingClientRect();
        const mx = e.clientX, my = e.clientY;
        if (mx < r.left || mx > r.right || my < r.top || my > r.bottom) return;
        const xIdx = Math.floor((mx - r.left) / squareSize);
        const yIdx = Math.floor((my - r.top)  / squareSize);
        const idx  = yIdx * cols + xIdx;
        if (idx !== lastHovered) {
          const b = blocks[idx];
          b.color = gridColors[colorPointer];
          colorPointer = (colorPointer + 1) % gridColors.length;
          gsap.to(b, { alpha: 1, duration: 0.1, overwrite: true });
          fadeOut(b);
          trailQueue.push(b);
          if (trailQueue.length > gridColors.length) {
            const old = trailQueue.shift();
            gsap.killTweensOf(old);
            old.alpha = 0;
          }
          lastHovered = idx;
        }
      });
    }

    window.addEventListener('resize', debounce(setupGrid, 200));
    setupGrid();
    draw();
  }

  function initGrids() {
    if (prefersReducedMotion.matches) return;
    document.querySelectorAll('[data-grid]').forEach(initGrid);
  }

  prefersReducedMotion.addEventListener('change', e => {
    if (e.matches) {
      document.querySelectorAll('[data-grid] canvas').forEach(c => c.remove());
      gsap.globalTimeline.clear();
    } else {
      initGrids();
    }
  });

  initGrids();
});
</script></div></div><div class="nav_component"><div class="scroll_direction_js u-embed-js w-embed w-script"><script>
function initDetectScrollingDirection() {
  let lastScrollTop = 0;
  const threshold = 10;
  const thresholdTop = 50;

  window.addEventListener('scroll', () => {
    const nowScrollTop = window.scrollY;

    if (Math.abs(lastScrollTop - nowScrollTop) >= threshold) {
      // Update Scroll Direction
      const direction = nowScrollTop > lastScrollTop ? 'down' : 'up';
      document.querySelectorAll('[data-scrolling-direction]').forEach(el => 
        el.setAttribute('data-scrolling-direction', direction)
      );

      // Update Scroll Started
--
          gsap.to(paths, {
            opacity: 1,
            duration: 0.05,
            ease: "none",
            stagger: { each: 0.02, from: "random" }
          });
        }
      }

      // reverse‐flicker:
      function flickerOff() {
        const paths = document.querySelectorAll('.scaling_video_contain .pixel_overlay svg path');
        if (paths.length) {
          gsap.to(paths, {
            opacity: 0,
            duration: 0.05,
            ease: "none",
            stagger: { each: 0.02, from: "random" }
          });
        }
      }

      let tl;

      function buildTimeline() {
        // Kill existing timeline and clear properties
        if (tl) {
          tl.kill();
          gsap.set(target, { clearProps: "all" });
        }

        tl = gsap.timeline({
          scrollTrigger: {
            trigger: wrappers[0],
            start: "bottom center-=100",
            endTrigger: wrappers[wrappers.length - 1],
            end: "top center",
            scrub: 0.25,
            onLeave: flickerOn,
            onEnterBack: flickerOff
          }
        });

        wrappers.forEach((el, i) => {
          const next = wrappers[i + 1];
          if (!next) return;

          const thisCenter = el.getBoundingClientRect().top + window.pageYOffset + el.offsetHeight /
                2;
          const nextCenter = next.getBoundingClientRect().top + window.pageYOffset + next
          .offsetHeight / 2;
          const offset = nextCenter - thisCenter;

          tl.add(Flip.fit(target, next, {
            duration: offset,
            ease: "none"
          }));
        });
      }

      // Initial build
      buildTimeline();

      // Debounced resize handler
--
          gsap.to(paths, {
            opacity: 1,
            duration: 0.05,
            ease: "none",
            stagger: { each: 0.02, from: "random" }
          });
        }
      }

      // reverse‐flicker:
      function flickerOff() {
        const paths = document.querySelectorAll('.scaling_video_contain .pixel_overlay svg path');
        if (paths.length) {
          gsap.to(paths, {
            opacity: 0,
            duration: 0.05,
            ease: "none",
            stagger: { each: 0.02, from: "random" }
          });
        }
      }

      let tl;

      function buildTimeline() {
        // Kill existing timeline and clear properties
        if (tl) {
          tl.kill();
          gsap.set(target, { clearProps: "all" });
        }

        tl = gsap.timeline({
          scrollTrigger: {
            trigger: wrappers[0],
            start: "bottom center-=100",
            endTrigger: wrappers[wrappers.length - 1],
            end: "top center",
            scrub: 0.25,
            onLeave: flickerOn,
            onEnterBack: flickerOff
          }
        });

        wrappers.forEach((el, i) => {
          const next = wrappers[i + 1];
          if (!next) return;

          const thisCenter = el.getBoundingClientRect().top + window.pageYOffset + el.offsetHeight /
                2;
          const nextCenter = next.getBoundingClientRect().top + window.pageYOffset + next
          .offsetHeight / 2;
          const offset = nextCenter - thisCenter;

          tl.add(Flip.fit(target, next, {
            duration: offset,
            ease: "none"
          }));
        });
      }

      // Initial build
      buildTimeline();

      // Debounced resize handler
--
    const scrollTween = gsap.to(cardsContainer, {
      x: -distance,
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: true,
        start: 'top top',
        end: '+=' + distance,
        anticipatePin: 1,
        pinSpacing: false,
        invalidateOnRefresh: true
      }
    });
    
    // Use matchMedia to handle motion preferences
    gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
      // Full animations for users without motion preferences
      cards.forEach(card => {
        const values = {
          x: (Math.random() * 20 + 30) * (Math.random() < 0.5 ? 1 : -1),
          y: (Math.random() * 6 + 10) * (Math.random() < 0.5 ? 1 : -1),
          rotation: (Math.random() * 10 + 10) * (Math.random() < 0.5 ? 1 : -1)
        };
        gsap.fromTo(card, {
          rotation: values.rotation,
          xPercent: values.x,
          yPercent: values.y
        }, {
          rotation: -values.rotation,
          xPercent: -values.x,
          yPercent: -values.y,
          ease: 'none',
          scrollTrigger: {
            trigger: card,
            containerAnimation: scrollTween,
            start: 'left 120%',
            end: 'right -20%',
            scrub: true
          }
        });
      });
    });
    
    gsap.matchMedia().add("(prefers-reduced-motion: reduce)", () => {
      cards.forEach(card => {
        gsap.set(card, {
          rotation: 0,
          xPercent: 0,
          yPercent: 0
        });
      });
    });
    
    // Intro fade out when first card starts moving
    if (cards.length > 0 && intro) {
      gsap.to(intro, {
        autoAlpha: 0,
        ease: 'none',
        scrollTrigger: {
          containerAnimation: scrollTween,
          trigger: cards[0],
          start: 'left 100%',
          end: 'left 50%',
          scrub: true
        }
      });
    }
    
    // Outro fade in when last card approaches
    if (cards.length > 0 && outro) {
      gsap.set(outro, { autoAlpha: 0, visibility: 'visible' });
      gsap.fromTo(outro, {
        autoAlpha: 0
      }, {
        autoAlpha: 1,
        ease: 'none',
        scrollTrigger: {
          containerAnimation: scrollTween,
          trigger: cards[cards.length - 1],
          start: 'right 80%',
          end: 'right 20%',
          scrub: true
        }
      });
    }
  });
});
</script></div><div class="ft_exhibit_list_wrap w-dyn-list"><div data-card-stack-list="" role="list" class="ft_exhibit_list w-dyn-items"><div data-card-stack-card="" role="listitem" class="ft_exhibit_item w-dyn-item"><div class="exhibit_card_wrap"><div class="exhibit_card_visual u-theme-dark"><div class="exhibit_card_title u-text-style-h3">Dex Diamondhands</div><div class="exhibit_card_visual_overlay"></div><div class="g_visual_wrap u-position-relative u-cover-absolute" STYLE="object-position: 50% 50%;"><img src="https://cdn.prod.website-files.com/6846d87a35249ce8a8e70716/6976bed334374f57ba2d6644_02 BB MoMoney Museum-BAT09910-2.avif" loading="lazy" alt="" class="g_visual_img u-cover-absolute"/></div></div><div class="exhibit_card_text_wrap"><p class="exhibit_card_text u-text-style-small u-color-faded">Our 80s AI dude reads your financial future; bring your wildest questions!</p></div></div></div><div data-card-stack-card="" role="listitem" class="ft_exhibit_item w-dyn-item"><div class="exhibit_card_wrap"><div class="exhibit_card_visual u-theme-dark"><div class="exhibit_card_title u-text-style-h3">Snap &amp; Flex</div><div class="exhibit_card_visual_overlay"></div><div class="g_visual_wrap u-position-relative u-cover-absolute" STYLE="object-position: 50% 50%;"><img src="https://cdn.prod.website-files.com/6846d87a35249ce8a8e70716/697a70e6e10fc15113187ffc_21. Snap %26 Flex 2.avif" loading="lazy" alt="" class="g_visual_img u-cover-absolute"/></div></div><div class="exhibit_card_text_wrap"><p class="exhibit_card_text u-text-style-small u-color-faded">Step into our low‑key luxe zone, where the stakes feel high, the fantasy runs richer, and every photo cashes out as pure boss‑level bragging rights.</p></div></div></div><div data-card-stack-card="" role="listitem" class="ft_exhibit_item w-dyn-item"><div class="exhibit_card_wrap"><div class="exhibit_card_visual u-theme-dark"><div class="exhibit_card_title u-text-style-h3">Laser Maze Heist</div><div class="exhibit_card_visual_overlay"></div><div class="g_visual_wrap u-position-relative u-cover-absolute" STYLE="object-position: 50% 50%;"><img src="https://cdn.prod.website-files.com/6846d87a35249ce8a8e70716/697a747e577ab58c0bf5445c_16. Lazer Maze.avif" loading="lazy" alt="" class="g_visual_img u-cover-absolute"/></div></div><div class="exhibit_card_text_wrap"><p class="exhibit_card_text u-text-style-small u-color-faded">Dodge lasers, channel your inner thief, and beat your friends to the loot.</p></div></div></div><div data-card-stack-card="" role="listitem" class="ft_exhibit_item w-dyn-item"><div class="exhibit_card_wrap"><div class="exhibit_card_visual u-theme-dark"><div class="exhibit_card_title u-text-style-h3">Catch the Counterfeits</div><div class="exhibit_card_visual_overlay"></div><div class="g_visual_wrap u-position-relative u-cover-absolute" STYLE="object-position: 50% 50%;"><img src="https://cdn.prod.website-files.com/6846d87a35249ce8a8e70716/697a753241ff66a57d68e5e8_9. Catch the Counterfeits.avif" loading="lazy" alt="" class="g_visual_img u-cover-absolute"/></div></div><div class="exhibit_card_text_wrap"><p class="exhibit_card_text u-text-style-small u-color-faded">Can you spot the fakes? Flip panels, test your eye, and outwit the forgers.</p></div></div></div><div data-card-stack-card="" role="listitem" class="ft_exhibit_item w-dyn-item"><div class="exhibit_card_wrap"><div class="exhibit_card_visual u-theme-dark"><div class="exhibit_card_title u-text-style-h3">Cash Shower Splash</div><div class="exhibit_card_visual_overlay"></div><div class="g_visual_wrap u-position-relative u-cover-absolute" STYLE="object-position: 50% 50%;"><img src="https://cdn.prod.website-files.com/6846d87a35249ce8a8e70716/6976bcdf8a5346d44569dcaa_02 BB MoMoney Museum-BAT08798.avif" loading="lazy" alt="" class="g_visual_img u-cover-absolute"/></div></div><div class="exhibit_card_text_wrap"><p class="exhibit_card_text u-text-style-small u-color-faded">Hop into a tub full of dollars and strike your richest pose.</p></div></div></div><div data-card-stack-card="" role="listitem" class="ft_exhibit_item w-dyn-item"><div class="exhibit_card_wrap"><div class="exhibit_card_visual u-theme-dark"><div class="exhibit_card_title u-text-style-h3">Marketplace Shuffle</div><div class="exhibit_card_visual_overlay"></div><div class="g_visual_wrap u-position-relative u-cover-absolute" STYLE="object-position: 50% 50%;"><img src="https://cdn.prod.website-files.com/6846d87a35249ce8a8e70716/697a7557660f6271d0dddcb1_5. Marketplace Shuffle.avif" loading="lazy" alt="" class="g_visual_img u-cover-absolute"/></div></div><div class="exhibit_card_text_wrap"><p class="exhibit_card_text u-text-style-small u-color-faded">Swap and barter your way to the goods you need; no money allowed! Can you crack the ancient market code?</p></div></div></div></div></div><div class="ft_exhibits_contain u-container"><div data-wf--global-section-space--section-space="main" class="g_section_space w-variant-60a7ad7d-02b0-6682-95a5-2218e6fd1490"></div><div class="ft_exhibits_content u-alignment-center"><div data-card-stack-intro="" data-prevent-flicker="true" data-word-reveal="true" class="ft_exhibits_intro u-text-style-h1 u-text-trim-off"><div data-cursor="text" class="ft_exhibits_title u-text-style-h1 u-text-wrap-default">Dive into the vault of money magic</div><div data-sticker-reveal="" data-sticker-inertia="" class="title_sticker is-ft-exhibits-1"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 120 120" fill="none" class="g_svg"><path d="M105.661 51.1056C104.27 48.4996 102.525 46.0225 100.442 43.7051C97.3941 40.3117 93.6966 37.3399 89.4513 34.872C85.2629 32.4362 80.6353 30.5471 75.6982 29.2567C75.4008 29.1788 75.1019 29.104 74.803 29.0307C75.5419 27.1828 75.9493 25.1662 75.9493 23.0557C75.9501 14.202 68.7947 7 59.9992 7C51.2038 7 44.0484 14.202 44.0484 23.0549C44.0484 25.1677 44.4565 27.1859 45.197 29.0353C42.9636 29.5827 40.781 30.2532 38.6637 31.0457L34.3615 26.7155C32.9103 25.2548 30.9697 24.479 28.9958 24.479C28.0187 24.479 27.0325 24.6691 26.094 25.0601C23.2591 26.2421 21.4111 29.0261 21.4111 32.1148V41.7641C19.9704 43.1721 18.658 44.6572 17.4791 46.2119H10.5862C6.39636 46.2119 3 49.6304 3 53.8476V79.1059C3 83.3232 6.39636 86.7417 10.5862 86.7417H17.4791C18.658 88.2963 19.9704 89.7815 21.4111 91.1895V104.364C21.4111 108.581 24.8074 112 28.9973 112H45.7272C49.5924 112 52.7824 109.09 53.2536 105.328C55.4801 105.565 57.7317 105.685 60 105.685C62.2683 105.685 64.5199 105.565 66.7464 105.328C67.2168 109.09 70.4076 112 74.2728 112H91.0027C95.1926 112 98.589 108.581 98.589 104.364V91.1865C101.477 88.3574 103.862 85.2054 105.657 81.8495C112.213 79.855 117 73.7182 117 66.4772C117 59.2362 112.215 53.1031 105.662 51.1064L105.661 51.1056Z" fill="currentColor" class="sticker_bg"></path><path d="M33.0938 42.0695V42.2382C33.1279 42.2168 33.1613 42.1932 33.1954 42.1718L33.0938 42.0695Z" fill="currentColor" class="sticker_fill"></path><path d="M101.049 58.0572C100.859 58.0572 100.674 58.0733 100.487 58.0855C95.5974 44.7229 79.3287 34.9033 60.0005 34.9033C51.4773 34.9033 43.552 36.8176 36.9299 40.0972L28.9985 32.114V45.1795C25.9071 47.7215 23.3672 50.6467 21.5071 53.8469H10.5859V79.1052H21.5056C23.3657 82.3053 25.9056 85.2306 28.997 87.7725V104.363H45.7269V96.1757C50.1831 97.3859 54.9882 98.0487 59.9997 98.0487C65.0112 98.0487 69.8163 97.3859 74.2725 96.1757V104.363H91.0024V87.7725C95.413 84.1463 98.7032 79.742 100.487 74.8673C100.674 74.8796 100.859 74.8956 101.049 74.8956C105.669 74.8956 109.413 71.1258 109.413 66.4764C109.413 61.827 105.668 58.0572 101.049 58.0572ZM33.0936 42.0695L33.1952 42.1718C33.1603 42.1932 33.1277 42.2168 33.0936 42.2382V42.0695ZM41.6304 100.241H33.0943V90.7153C35.6926 92.3471 38.5557 93.7475 41.6304 94.8738V100.241ZM86.9051 100.241H78.369V94.8745C81.4437 93.7483 84.3068 92.3479 86.9051 90.7161V100.241ZM97.7208 69.1336C97.6123 69.9468 97.4492 70.7486 97.2444 71.5404C97.0646 72.2353 96.8514 72.9225 96.6003 73.5983C95.3288 77.0221 93.169 80.1841 90.3037 82.9437C89.561 83.6591 88.7698 84.3464 87.936 85.0053C87.0181 85.7307 86.044 86.4164 85.0244 87.067C82.9868 88.3673 80.7579 89.5127 78.3683 90.4763C77.6969 90.7466 77.0156 91.0063 76.32 91.2475C75.6486 91.4804 74.9643 91.695 74.2717 91.8996C69.8633 93.2023 65.0468 93.9269 59.9989 93.9269C54.951 93.9269 50.1345 93.2031 45.7262 91.8996C45.0343 91.695 44.3493 91.4804 43.6779 91.2475C42.9822 91.0063 42.301 90.7474 41.6296 90.4763C39.2399 89.5135 37.0111 88.3673 34.9742 87.067C33.9546 86.4164 32.9805 85.7307 32.0626 85.0053C31.2289 84.3464 30.4376 83.6591 29.6949 82.9437C28.4432 81.738 27.3326 80.4537 26.3638 79.1059C25.8806 78.434 25.4292 77.7475 25.0226 77.0451C24.6334 76.3716 24.2867 75.6828 23.9719 74.9826H14.6825V57.9709H23.9719C24.2867 57.2715 24.6334 56.5828 25.0226 55.9093C25.4292 55.206 25.8813 54.5203 26.3646 53.8476C27.1475 52.7588 28.0275 51.7127 28.997 50.7154C29.6418 50.0519 30.3238 49.4097 31.0453 48.7912C33.0951 47.0335 35.4445 45.4674 38.0352 44.1281C38.6732 43.7982 39.3234 43.4806 39.9902 43.1797C45.802 40.5523 52.6585 39.0282 59.9997 39.0282C77.4981 39.0282 92.2579 47.6627 96.6003 59.3561C96.8514 60.0318 97.0646 60.7183 97.2444 61.4139C97.4492 62.205 97.6123 63.0067 97.7208 63.8199C97.8376 64.695 97.9013 65.5807 97.9013 66.4772C97.9013 67.3736 97.8368 68.2593 97.7208 69.1344V69.1336ZM101.61 70.7158C101.858 69.3284 101.998 67.915 101.998 66.4772C101.998 65.0394 101.858 63.626 101.61 62.2386C103.696 62.5188 105.317 64.3025 105.317 66.4772C105.317 68.6518 103.696 70.4355 101.61 70.7158Z" fill="currentColor" class="sticker_fill"></path><path d="M40.8125 47.1633L42.3237 48.6843L43.9221 50.2932C48.6339 48.2567 54.1848 47.0449 60.0011 47.0449C65.8175 47.0449 71.3684 48.2567 76.0794 50.2932L77.6779 48.6843L79.189 47.1633C73.6845 44.5022 67.0541 42.9216 60.0011 42.9216C52.9482 42.9216 46.3178 44.5022 40.8125 47.1633Z" fill="currentColor" class="sticker_fill"></path><path d="M32.1617 56.091C31.9 55.9841 31.6299 55.9093 31.3446 55.9093C30.1179 55.9093 29.0665 56.9691 28.5977 58.484C28.4315 59.0208 28.3359 59.6111 28.3359 60.2357C28.3359 62.6249 29.6833 64.5621 31.3446 64.5621C33.006 64.5621 34.3533 62.6249 34.3533 60.2357C34.3533 58.2565 33.4233 56.6056 32.1617 56.0918V56.091Z" fill="currentColor" class="sticker_fill"></path><path d="M60.0013 31.4749C64.6213 31.4749 68.3659 27.7051 68.3659 23.0557C68.3659 18.4063 64.6206 14.6365 60.0013 14.6365C55.382 14.6365 51.6367 18.4063 51.6367 23.0557C51.6367 27.7051 55.382 31.4749 60.0013 31.4749ZM60.0013 18.759C62.3546 18.759 64.2693 20.6863 64.2693 23.0549C64.2693 25.4235 62.3546 27.3508 60.0013 27.3508C57.6481 27.3508 55.7333 25.4235 55.7333 23.0549C55.7333 20.6863 57.6481 18.759 60.0013 18.759Z" fill="currentColor" class="sticker_fill"></path></svg></div><div data-sticker-reveal="" data-sticker-inertia="" class="title_sticker is-ft-exhibits-2"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 120 120" fill="none" class="g_svg"><path d="M112.398 34.4924V25.2091H107.797V20.5674H103.195V15.9258H98.5935V11.2841H93.9918V6.64249H84.7885V2H34.2123V6.64165H25.009V11.2833H20.4074V15.9249H15.8057V20.5666H11.2041V25.2083H6.60247V34.4916H2V85.5068H6.60164V94.7901H11.2033V99.4317H15.8049V104.073H20.4065V108.715H25.0082V113.357H34.2115V117.998H84.7869V113.357H93.9901V108.715H98.5918V104.073H103.193V99.4317H107.795V94.7901H112.397V85.5068H116.998V34.4924H112.397H112.398Z" fill="currentColor" class="sticker_bg"></path><path d="M89.4102 94.8128H84.8086V99.4545H89.4102V94.8128Z" fill="currentColor" class="sticker_fill"></path><path d="M75.6055 99.4553V104.097H80.2071H84.8087V99.4553H80.2071H75.6055Z" fill="currentColor" class="sticker_fill"></path><path d="M66.3996 104.097H61.798H57.1955H52.5939H47.9923H43.3906V108.739H47.9923H52.5939H57.1955H61.798H66.3996H71.0013H75.6029V104.097H71.0013H66.3996Z" fill="currentColor" class="sticker_fill"></path><path d="M38.7891 99.4553H34.1875V104.097H38.7891H43.3908V99.4553H38.7891Z" fill="currentColor" class="sticker_fill"></path><path d="M34.1876 94.8128H29.5859V99.4545H34.1876V94.8128Z" fill="currentColor" class="sticker_fill"></path><path d="M80.2071 80.8878H75.6055V85.5295H80.2071V80.8878Z" fill="currentColor" class="sticker_fill"></path><path d="M84.8087 76.2462H80.207V80.8879H84.8087V76.2462Z" fill="currentColor" class="sticker_fill"></path><path d="M38.7891 76.2462H34.1875V80.8879H38.7891V76.2462Z" fill="currentColor" class="sticker_fill"></path><path d="M89.4102 71.6046V66.9629V62.3213H84.8086V66.9629V71.6046V76.2462H89.4102V71.6046Z" fill="currentColor" class="sticker_fill"></path><path d="M34.1876 66.9629V62.3213H29.5859V66.9629V71.6046V76.2462H34.1876V71.6046V66.9629Z" fill="currentColor" class="sticker_fill"></path><path d="M71.0039 29.8289V34.4705V39.1122H75.6055H80.2072V34.4705H75.6055V29.8289H71.0039Z" fill="currentColor" class="sticker_fill"></path><path d="M71.004 43.7538V39.1122H66.4023V43.7538V48.3955H71.004H75.6056V43.7538H71.004Z" fill="currentColor" class="sticker_fill"></path><path d="M71.004 53.0371H66.4023V57.6787H71.004V62.3212H75.6056V57.6787H80.2072V53.0371V48.3954H75.6056V53.0371H71.004Z" fill="currentColor" class="sticker_fill"></path><path d="M38.7891 39.1122V43.7538V48.3955H43.3907H47.9923V43.7538H43.3907V39.1122H38.7891Z" fill="currentColor" class="sticker_fill"></path><path d="M43.3906 29.8289V34.4705V39.1122H44.2103H47.9923H52.5939V34.4705H47.9923V29.8289H43.3906Z" fill="currentColor" class="sticker_fill"></path><path d="M38.7891 57.6787H43.3907V62.3212H47.9923V57.6787H52.594V53.0371V48.3954H47.9923V53.0371H44.2104H43.3907H38.7891V57.6787Z" fill="currentColor" class="sticker_fill"></path><path d="M47.9923 90.1711H52.5939H57.1955H61.798H66.3996H71.0013H75.6029V85.5295H71.0013H66.3996H61.798H57.1955H52.5939H47.9923H43.3906V90.1711H47.9923Z" fill="currentColor" class="sticker_fill"></path><path d="M43.3907 80.8878H38.7891V85.5295H43.3907V80.8878Z" fill="currentColor" class="sticker_fill"></path><path d="M34.1876 20.5447H29.5859V25.1864H34.1876V20.5447Z" fill="currentColor" class="sticker_fill"></path><path d="M29.586 25.1864H24.9844V29.828H29.586V25.1864Z" fill="currentColor" class="sticker_fill"></path><path d="M34.1875 15.9031V20.5447H38.7891H43.3908V15.9031H38.7891H34.1875Z" fill="currentColor" class="sticker_fill"></path><path d="M71.0013 11.2614H66.3996H61.798H57.1955H52.5939H47.9923H43.3906V15.9031H47.9923H52.5939H57.1955H61.798H66.3996H71.0013H75.6029V11.2614H71.0013Z" fill="currentColor" class="sticker_fill"></path><path d="M80.2071 15.9031H75.6055V20.5447H80.2071H84.8087V15.9031H80.2071Z" fill="currentColor" class="sticker_fill"></path><path d="M89.4102 20.5447H84.8086V25.1864H89.4102V20.5447Z" fill="currentColor" class="sticker_fill"></path><path d="M98.6134 29.8289H94.0117V34.4705H98.6134V29.8289Z" fill="currentColor" class="sticker_fill"></path><path d="M94.0118 25.1864H89.4102V29.828H94.0118V25.1864Z" fill="currentColor" class="sticker_fill"></path><path d="M29.586 90.1711H24.9844V94.8128H29.586V90.1711Z" fill="currentColor" class="sticker_fill"></path><path d="M94.0118 90.1711H89.4102V94.8128H94.0118V90.1711Z" fill="currentColor" class="sticker_fill"></path><path d="M103.215 34.4705H98.6133V39.1122V43.7538H103.215V39.1122V34.4705Z" fill="currentColor" class="sticker_fill"></path><path d="M103.215 43.7538V48.3955V53.0371V57.6788V62.3213V66.9629V71.6046V76.2462H107.816V71.6046V66.9629V62.3213V57.6788V53.0371V48.3955V43.7538H103.215Z" fill="currentColor" class="sticker_fill"></path><path d="M98.6133 80.8879V85.5295H103.215V80.8879V76.2462H98.6133V80.8879Z" fill="currentColor" class="sticker_fill"></path><path d="M98.6134 85.5295H94.0117V90.1711H98.6134V85.5295Z" fill="currentColor" class="sticker_fill"></path><path d="M24.9844 85.5295H20.3828V90.1711H24.9844V85.5295Z" fill="currentColor" class="sticker_fill"></path><path d="M15.7812 85.5295H20.3829V80.8879V76.2462H15.7812V80.8879V85.5295Z" fill="currentColor" class="sticker_fill"></path><path d="M11.1797 48.3955V53.0371V57.6788V62.3213V66.9629V71.6046V76.2462H15.7813V71.6046V66.9629V62.3213V57.6788V53.0371V48.3955V43.7538H11.1797V48.3955Z" fill="currentColor" class="sticker_fill"></path><path d="M15.7812 39.1122V43.7538H20.3829V39.1122V34.4705H15.7812V39.1122Z" fill="currentColor" class="sticker_fill"></path><path d="M24.9844 29.8289H20.3828V34.4705H24.9844V29.8289Z" fill="currentColor" class="sticker_fill"></path><path d="M61.7978 62.3212V57.6787H57.1953V62.3212V66.9629V71.6045H61.7978H66.3994V66.9629H61.7978V62.3212Z" fill="currentColor" class="sticker_fill"></path></svg></div></div><div data-card-stack-outro="" class="ft_exhibits_outro"><div data-cursor="text" class="ft_exhibits_title u-text-style-h1 u-text-wrap-default">plus more<br/>(lots more)</div><div class="u-display-contents"><div class="u-btn-group"><div class="btn_main_wrap"><div class="u-embed-css w-embed"><style>
.btn_main_wrap {
  --elastic-ease-out: linear(
    0,
    0.5737 7.6%,
    0.8382 11.87%,
    0.9463 14.19%,
    1.0292 16.54%,
    1.0886 18.97%,
    1.1258 21.53%,
    1.137 22.97%,
    1.1424 24.48%,
    1.1423 26.1%,
    1.1366 27.86%,
    1.1165 31.01%,
    1.0507 38.62%,
    1.0219 42.57%,
    0.9995 46.99%,
    0.9872 51.63%,
    0.9842 58.77%,
    1.0011 81.26%,
    1
  );
  --smooth-ease: cubic-bezier(.32, .72, 0, 1);
  --color-ease: cubic-bezier(.216, .62, .356, 1);
  
  transition: transform .45s var(--elastic-ease-out);
  -webkit-tap-highlight-color: transparent;
}

.btn_main_wrap:active {
  transform: scaleX(0.955) scaleY(0.954);
}

.btn_main_bg {
--
    gsap.to(c, {
      duration: adjustedDuration,
      y: h + 50,
      rotation: 360 + (Math.random() * 360), // 1-2 full rotations
      ease: 'none',
      onComplete: () => {
        if (c.parentNode) c.remove();
      }
    });
  }
  
  // —— Handle catch: play sound + confetti ——
  function handleCatch(cx, cy, coinValue) {
    // ▶ Play "ka-ching" with reduced volume via Web Audio
    if (audioReady && coinBuffer && audioCtx) {
      try {
        if (audioCtx.state === 'suspended') {
          audioCtx.resume();
        }
        const src = audioCtx.createBufferSource();
        const gainNode = audioCtx.createGain();
        src.buffer = coinBuffer;
        gainNode.gain.value = 0.3; // Reduce volume to 30% of original
        src.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        src.start(0);
      } catch (err) {
        console.warn('Audio playback failed:', err);
      }
    }
    
    // 🎉 Confetti squares with coin-specific colors
    const colorConfig = confettiColors[coinValue];
    for (let i = 0; i < 15; i++) {
      const sq = document.createElement('div');
      sq.className = 'confetti';
      area.appendChild(sq);
      
      // Create tints by varying lightness
      const lightVariation = Math.random() * 30 - 15; // ±15% variation
      const light = Math.max(10, Math.min(95, colorConfig.baseLight + lightVariation));
      const color = `hsl(${colorConfig.hue}, ${colorConfig.sat}%, ${light}%)`;
      
      gsap.set(sq, {
        x: cx,
        y: cy,
        background: color,
      });
      
      gsap.to(sq, {
        physics2D: {
          velocity: 200 + Math.random() * 200,
          angle: Math.random() * 360,
          gravity: 500
        },
        opacity: 0,
        duration: 1.5,
        onComplete: () => {
          if (sq.parentNode) sq.remove();
        }
      });
    }
  }
  
  // —— Collision detection piggy ↔ coins ——
  function checkCollision() {
    if (!gameActive) return;
    
    area.querySelectorAll('.coin').forEach(c => {
      try {
        const r1 = c.getBoundingClientRect();
        const r2 = piggyWrap.getBoundingClientRect();
        
        if (
          r1.right > r2.left &&
          r1.left < r2.right &&
          r1.bottom > r2.top &&
          r1.top < r2.bottom
        ) {
          const v = parseInt(c.dataset.value, 10);
          const cx = r2.left + r2.width / 2;
          const cy = r2.top - 5; // top-center of piggy
          
          c.remove();
          score += v;
          scoreEl.textContent = score;
          
          // Change piggy image on collision
          changePiggyImage();
          handleCatch(cx, cy, v); // Pass coin value for confetti colors
        }
      } catch (err) {
        console.warn('Collision detection error:', err);
      }
    });
  }
  
  // ✨ NEW: Start countdown sequence (extracted to be reusable)
  function startCountdownSequence() {
    // Clean up any existing game state
--
      gsap.to(elementsToFadeOut, {
        duration: 0.5,
        opacity: 0,
        onComplete: showCountdown
      });
    } else {
      // No elements to fade out, go straight to countdown
      showCountdown();
    }
    
    function showCountdown() {
      // Show countdown overlay
      overlay.classList.remove('hidden');
      overlay.style.visibility = 'visible';
      gsap.to(overlay, { duration: 0.5, opacity: 1 });
      
      // Animate 3→2→1
      gsap.fromTo(countdown, { textContent: 3 }, {
        duration: 3,
        textContent: 0,
        snap: { textContent: 1 },
        ease: 'none',
        onUpdate() {
          const current = Math.ceil(this.targets()[0].textContent);
          countdown.textContent = current > 0 ? current : 'GO!';
        },
        onComplete() {
          overlay.style.visibility = 'hidden';
          
          // Reveal HUD, game area, and piggy
          [hud, area, piggyWrap].forEach(el => {
            el.classList.remove('hidden');
            el.style.visibility = 'visible';
            gsap.to(el, { duration: 0.75, opacity: 1 });
          });
          
          // Add small delay before starting
          setTimeout(startGame, 200);
        }
      });
    }
  }
  
  // —— Intro → Countdown → Reveal → Start ——
  function startSeq() {
    gsap.to(intro, {
      duration: 0.75,
      scale: 0.5,
      opacity: 0,
      onComplete() {
        startCountdownSequence();
      }
    });
  }
  
  // ✨ UPDATED: Game loops with progressive difficulty
  function startGame() {
    // Clear any existing intervals
    clearAllIntervals();
    
    // Reset game state (score and time already reset in startCountdownSequence)
    gameActive = true;
    
    // ✨ Reset difficulty variables
    currentSpawnRate = 800; // Start slower
    currentFallSpeed = 1.0; // Normal speed
    
    // Reset piggy direction only (keep current position)
    piggyWrap.classList.remove('is-flipped'); // Start facing left (default)
    
    // Initialize draggable
    initDraggable();
    
    // Start game loops
    spawnInt = setInterval(spawnCoin, currentSpawnRate);
    collInt = setInterval(checkCollision, 16);
    
    // ✨ NEW: Difficulty progression every second
    difficultyInt = setInterval(updateDifficulty, 1000);
    
    timerInt = setInterval(() => {
      timeLeft--;
      timeEl.textContent = timeLeft;
      if (timeLeft <= 0) endGame();
    }, 1000);
  }
  
  function endGame() {
--
</style></div><div class="article_card_visual"><div class="article_card_tag"><div class="article_card_tag_text u-text-style-h5">Stories</div></div><div class="g_visual_wrap u-position-relative u-cover-absolute" STYLE="object-position: 50% 50%;"><img src="https://cdn.prod.website-files.com/6846d87a35249ce8a8e70716/697a75825384476c243d96ae_1. What even is money.avif" loading="lazy" alt="" class="g_visual_img u-cover-absolute"/></div></div><div class="article_card_content u-alignment-center"><div class="article_card_text_wrap"><div class="article_card_tag is-featured"><div class="article_card_tag_text u-text-style-h5">Stories</div></div><div class="article_card_title u-text-style-h4">Inside the World in Your Wallet: Welcome to MoMoney, the Museum of Money</div><p class="article_card_text u-text-style-small u-color-faded">Money has a lot of nicknames: moola, skrilla, Benjamins, bucks. It “makes the world go round” and “doesn’t grow on trees.” You’ve heard all the lines.</p></div><div class="article_card_date u-text-style-h5 u-color-faded">1.28.26</div></div><div class="g_clickable_wrap"><a class="g_clickable_link w-inline-block" data-wf-component-context="%5B%7B%22componentId%22%3A%22f2569861-01b4-ae7a-9cbf-54124910b1ee%22%2C%22instanceId%22%3A%22f2569861-01b4-ae7a-9cbf-54124910b202%22%7D%2C%7B%22componentId%22%3A%22cdf0f8fe-1776-9af9-3461-9cce7b27e0d8%22%2C%22instanceId%22%3A%22f2569861-01b4-ae7a-9cbf-54124910b1fc%22%7D%2C%7B%22componentId%22%3A%220254e612-9509-0757-3332-f6be61ca6889%22%2C%22instanceId%22%3A%22b3b982f2-8269-b94b-ba27-2d64e785a8a5%22%7D%5D" data-wf-element-id="0254e612-9509-0757-3332-f6be61ca688a" data-wf-event-ids="" href="blog/article/inside-the-world-in-your-wallet-welcome-to-momoney-the-museum-of-money.html" data-wf-cms-context="%5B%7B%22collectionId%22%3A%2268501af60996b72aa7007681%22%2C%22itemId%22%3A%22697af60d3c22af0d7785e6c4%22%7D%5D" target="" data-wf-native-id-path="f2569861-01b4-ae7a-9cbf-54124910b202:f2569861-01b4-ae7a-9cbf-54124910b1fc_instance-0:b3b982f2-8269-b94b-ba27-2d64e785a8a5_instance-0:0254e612-9509-0757-3332-f6be61ca688a_instance-0" data-wf-ao-click-engagement-tracking="true" data-gtm=""><span class="g_clickable_text u-sr-only">Inside the World in Your Wallet: Welcome to MoMoney, the Museum of Money</span></a><button type="button" tracking="play" class="g_clickable_btn"><span class="g_clickable_text u-sr-only">Inside the World in Your Wallet: Welcome to MoMoney, the Museum of Money</span></button></div></div></div></div></div></div></div><div data-wf--global-section-space--section-space="small" class="g_section_space w-variant-d422cbd0-f212-c815-68df-63414354c21d"></div></section><section data-animate-theme-to="green" class="marquee_cta_wrap"><div class="u-embed-js w-embed w-script"><script>
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".marquee_cta_wrap").forEach((element) => {
    if (element.dataset.scriptInitialized) return;
    element.dataset.scriptInitialized = "true";
    
    // Check if GSAP is available
--
      const animation = gsap.to(marqueeItems, {
        xPercent: -100,
        repeat: -1,
        duration: marqueeSpeed,
        ease: 'linear'
      }).totalProgress(0.5);
      
      // Initialize marquee in the correct direction
      gsap.set(marqueeItems, {
        xPercent: marqueeDirectionAttr === 1 ? 100 : -100
      });
      
      animation.timeScale(marqueeDirectionAttr);
      animation.play();
      
      // Set initial marquee status
      marquee.setAttribute('data-marquee-status', 'normal');
      
      // ScrollTrigger logic (only if ScrollTrigger is available)
      if (typeof ScrollTrigger !== 'undefined') {
        ScrollTrigger.create({
          trigger: marquee,
          start: 'top bottom',
          end: 'bottom top',
          onUpdate: (self) => {
            const isInverted = self.direction === 1;
            const currentDirection = isInverted ? -marqueeDirectionAttr :
              marqueeDirectionAttr;
            animation.timeScale(currentDirection);
            marquee.setAttribute('data-marquee-status', isInverted ? 'normal' : 'inverted');
          }
        });
        
        // Extra speed effect on scroll
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: marquee,
            start: '0% 100%',
            end: '100% 0%',
            scrub: 0
          }
        });
        
        const scrollStart = marqueeDirectionAttr === -1 ? scrollSpeedAttr : -scrollSpeedAttr;
        const scrollEnd = -scrollStart;
        
        tl.fromTo(
          marqueeScroll, { x: `${scrollStart}vw` }, { x: `${scrollEnd}vw`, ease: 'none' }
        );
      }
    });
--
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
