// SDG Physics Canvas — falling interactive boxes using Matter.js
import { sdgs } from '../data/sdgs.js';

export function initFooterPhysics() {
    const canvasContainer = document.getElementById('canvas-target');
    if (!canvasContainer) return;

    // Wait for GSAP and Matter.js to be available
    if (typeof gsap === 'undefined' || typeof Matter === 'undefined') {
        console.warn('GSAP or Matter.js not loaded');
        return;
    }

    let { Engine, Render, Runner, Bodies, Composite, Mouse, MouseConstraint } = Matter;

    let engine = Engine.create();
    let currentRender = null;
    let currentRunner = null;
    let isInitialized = false;

    function setupPhysics() {
        if (isInitialized) return;

        const width = canvasContainer.clientWidth;
        const height = canvasContainer.clientHeight;
        const wallDepth = 50;

        // MoMoney settings
        const boxSize = Math.min(width / 12, 80); // Responsive size
        const restitution = 0.75; // Bounciness
        engine.world.gravity.y = 1.5;

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
        const ground = Bodies.rectangle(width / 2, height + wallDepth / 2, width + wallDepth * 2, wallDepth, { isStatic: true });
        const leftWall = Bodies.rectangle(0 - wallDepth / 2, height / 2, wallDepth, height * 2, { isStatic: true });
        const rightWall = Bodies.rectangle(width + wallDepth / 2, height / 2, wallDepth, height * 2, { isStatic: true });
        const ceiling = Bodies.rectangle(width / 2, -height, width * 2, wallDepth, { isStatic: true });

        Composite.add(engine.world, [ground, leftWall, rightWall, ceiling]);

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

        return { boxSize, restitution, width };
    }

    function dropSDG(config, index) {
        const sdg = sdgs[index % sdgs.length];
        const xPos = config.width * 0.2 + (Math.random() * config.width * 0.6); // Drop from random top-ish area

        // We use rectangles for the SDG boxes
        const box = Bodies.rectangle(xPos, -config.boxSize, config.boxSize * 1.5, config.boxSize * 1.5, {
            restitution: config.restitution,
            render: {
                sprite: {
                    texture: sdg.icon,
                    xScale: (config.boxSize * 1.5) / 466, // Icon native resolution is 466x466
                    yScale: (config.boxSize * 1.5) / 466
                }
            }
        });

        Composite.add(engine.world, box);
    }

    // Initialize on scroll
    ScrollTrigger.create({
        trigger: '#footer',
        start: 'top 60%',
        once: true,
        onEnter: () => {
            const config = setupPhysics();
            if (!config) return;

            // Drop 15 boxes sequentially
            let count = 0;
            const dropInterval = setInterval(() => {
                dropSDG(config, count);
                count++;
                if (count >= 15) clearInterval(dropInterval);
            }, 120);
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

                // Rebuild and immediately drop
                engine = Engine.create();
                const config = setupPhysics();
                for (let i = 0; i < 15; i++) {
                    setTimeout(() => dropSDG(config, i), i * 50);
                }
            }
        }, 250);
    });
}
