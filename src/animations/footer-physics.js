// SDG Physics Canvas — falling interactive boxes using Matter.js transitioning to GSAP Marquee
import { sdgs } from '/src/data/sdgs.js';

export function initFooterPhysics() {
    const canvasContainer = document.getElementById('canvas-target');
    const footerBottom = document.querySelector('.footer__bottom');
    if (!canvasContainer || !footerBottom) return;

    // Wait for GSAP and Matter.js to be available
    if (typeof gsap === 'undefined' || typeof Matter === 'undefined') {
        console.warn('GSAP or Matter.js not loaded');
        return;
    }

    let { Engine, Render, Runner, Bodies, Composite, Mouse, MouseConstraint, Body } = Matter;

    let engine;
    let currentRender = null;
    let currentRunner = null;
    let isInitialized = false;
    let sdgBodies = [];
    let marqueeActive = false;
    let marqueeTickerFn = null;
    let transitionTimeout = null;
    let initialDelayTimeout = null;

    function setupPhysics() {
        if (isInitialized) return;

        engine = Engine.create();

        const width = canvasContainer.clientWidth;
        const height = canvasContainer.clientHeight;
        const bottomHeight = footerBottom.clientHeight;
        const wallDepth = 50;

        // Settings
        const boxSize = Math.max(Math.min(width / 14, 90), 40); // Responsive size based on screen width
        const restitution = 0.75; // Bounciness
        engine.world.gravity.y = 1.0; // Slightly lower gravity for floatier drop

        currentRender = Render.create({
            element: canvasContainer,
            engine: engine,
            options: {
                width,
                height,
                background: 'transparent',
                wireframes: false,
                pixelRatio: window.devicePixelRatio || 1
            }
        });

        // Boundaries
        // Place the ground right above the footer__bottom section so boxes don't cover text
        const usableHeight = height - bottomHeight;

        const ground = Bodies.rectangle(width / 2, usableHeight + wallDepth / 2, width + wallDepth * 2, wallDepth, {
            isStatic: true,
            render: { visible: false }
        });
        const leftWall = Bodies.rectangle(0 - wallDepth / 2, height / 2, wallDepth, height * 2, {
            isStatic: true,
            render: { visible: false }
        });
        const rightWall = Bodies.rectangle(width + wallDepth / 2, height / 2, wallDepth, height * 2, {
            isStatic: true,
            render: { visible: false }
        });

        // No ceiling needed unless we want them to bounce off the top

        Composite.add(engine.world, [ground, leftWall, rightWall]);

        // Mouse interaction
        const mouse = Mouse.create(currentRender.canvas);
        const mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: { visible: false }
            }
        });
        Composite.add(engine.world, mouseConstraint);

        // Keep the mouse in sync with rendering
        currentRender.mouse = mouse;

        Render.run(currentRender);
        currentRunner = Runner.create();
        Runner.run(currentRunner, engine);

        isInitialized = true;

        return { boxSize, restitution, width, usableHeight, wallDepth };
    }

    function dropSDG(config, index) {
        const sdg = sdgs[index]; // Use exactly 0-16
        const xPos = config.width * 0.1 + (Math.random() * config.width * 0.8); // Drop from varying X

        const box = Bodies.rectangle(xPos, -config.boxSize * 2 - (Math.random() * 200), config.boxSize * 1.4, config.boxSize * 1.4, {
            restitution: config.restitution,
            friction: 0.1,
            frictionAir: 0.01,
            render: {
                sprite: {
                    texture: sdg.icon,
                    xScale: (config.boxSize * 1.4) / 1500, // Icon native resolution is 1500x1500
                    yScale: (config.boxSize * 1.4) / 1500
                }
            }
        });

        box.sdgIndex = index; // Store original index for sorting
        sdgBodies.push(box);
        Composite.add(engine.world, box);
    }

    function transitionToMarquee(config) {
        marqueeActive = true;

        // 1. Disable Physics
        sdgBodies.forEach(box => {
            // Make them float and ignore collisions and gravity
            Body.setStatic(box, true);
        });

        // 2. Sort them by SDG number (1 to 17)
        sdgBodies.sort((a, b) => a.sdgIndex - b.sdgIndex);

        // 3. Calculate Marquee Positions
        // We want them to form a continuous banner, so spacing is just their width + a small gap
        const boxWidth = config.boxSize * 1.4;
        const spacing = boxWidth + 4; // 4px gap
        const totalWidth = spacing * sdgBodies.length;
        const startX = 0;
        const targetY = config.usableHeight - (boxWidth / 2) - 4; // Sit perfectly above the copyright floor

        // 4. GSAP Animation to form the line
        sdgBodies.forEach((box, i) => {
            const targetX = startX + (i * spacing);

            // We use a proxy object to tween properties, then apply them to the Matter body on update
            const proxy = { x: box.position.x, y: box.position.y, angle: box.angle };

            gsap.to(proxy, {
                x: targetX,
                y: targetY,
                angle: 0,
                duration: 2.5,
                ease: 'power3.inOut',
                onUpdate: () => {
                    Body.setPosition(box, { x: proxy.x, y: proxy.y });
                    Body.setAngle(box, proxy.angle);
                }
            });
        });

        // 5. Start the Endless Ticker Marquee after formation
        setTimeout(() => {
            // Right to left scrolling
            const speed = 1.0;

            marqueeTickerFn = () => {
                sdgBodies.forEach((box) => {
                    let newX = box.position.x - speed;

                    // Wrap around: if a box moves fully off screen left, wrap it to the back of the line
                    if (newX < -spacing) {
                        newX += totalWidth;
                    }

                    Body.setPosition(box, { x: newX, y: targetY });
                });
            };

            gsap.ticker.add(marqueeTickerFn);
        }, 2500); // Start scrolling after 2.5s formation tween completes
    }

    function runSequence() {
        const config = setupPhysics();
        if (!config) return;

        marqueeActive = false;
        sdgBodies = [];
        if (marqueeTickerFn) {
            gsap.ticker.remove(marqueeTickerFn);
        }
        clearTimeout(transitionTimeout);
        clearTimeout(initialDelayTimeout);

        // Wait 3 seconds before dropping the boxes
        initialDelayTimeout = setTimeout(() => {
            // Drop exactly 17 boxes sequentially
            let count = 0;
            const dropInterval = setInterval(() => {
                if (count < 17) {
                    dropSDG(config, count);
                    count++;
                } else {
                    clearInterval(dropInterval);

                    // Trigger Marquee transition after 8 seconds of playtime
                    transitionTimeout = setTimeout(() => {
                        transitionToMarquee(config);
                    }, 4000);
                }
            }, 120);
        }, 10000);
    }

    // Initialize on scroll
    ScrollTrigger.create({
        trigger: '#footer',
        start: 'top 30%', // Wait until the top of the footer has scrolled up to 30% from the top of the screen
        once: true,
        onEnter: () => {
            runSequence();
        }
    });

    // Handle Resize (simple cleanup and rebuild)
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            if (isInitialized) {
                Runner.stop(currentRunner);
                Render.stop(currentRender);
                if (currentRender.canvas) currentRender.canvas.remove();
                Matter.World.clear(engine.world);
                Matter.Engine.clear(engine);
                isInitialized = false;

                if (marqueeTickerFn) gsap.ticker.remove(marqueeTickerFn);
                clearTimeout(transitionTimeout);
                clearTimeout(initialDelayTimeout);

                // Simply rebuild and restart the sequence
                // This resets the entire play -> marquee timeline
                runSequence();
            }
        }, 300);
    });
}
