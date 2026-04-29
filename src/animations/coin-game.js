// ============================================================
// Easter Egg: "Klik Recehan" — SDG 1 No Poverty
// File: src/animations/coin-game.js
//
// HOW IT WORKS:
// 1. A half-coin peeks from the left/right edge of .goal-targets section
// 2. User clicks it → game starts: coins spawn randomly, 10s timer
// 3. End → modal with score + verified BPS/Kepgub data message
//
// HOW TO INTEGRATE:
// In goal-main.js, add:
//   import { initCoinGame } from './animations/coin-game.js';
// Then inside the DOMContentLoaded / init block (only for goal 01):
//   if (document.body.dataset.goal === '01') initCoinGame();
// ============================================================

export function initCoinGame() {
    // ─── Constants ───────────────────────────────────────────
    const COIN_VALUE = 500;   // Rp per click
    const GAME_DURATION = 10;   // seconds
    const SDG_RED = '#E5233D';

    // ─── Verified data messages (BPS Sep 2024 + Kepgub DKI 1142/2025)
    const MESSAGES = [
        {
            max: 5000,
            text: 'Segini batas pengeluaran harian orang miskin di Indonesia',
            sub: 'Garis kemiskinan BPS September 2024: Rp 595.242/bulan ÷ 30 hari = <strong>Rp 19.841/hari</strong>.',
            sources: [
                { label: 'BPS – Persentase Penduduk Miskin Sep 2024', url: 'https://www.bps.go.id/en/pressrelease/2025/01/15/2401/persentase-penduduk-miskin-september-2024-turun-menjadi-8-57-persen-.html' }
            ]
        },
        {
            max: 15000,
            text: 'Segini budget makan sehari di bawah garis kemiskinan BPS',
            sub: 'Di bawah garis kemiskinan nasional Rp 19.841/hari, banyak keluarga harus memilih antara makan dan kebutuhan lain.',
            sources: [
                { label: 'BPS – Garis Kemiskinan Sep 2024', url: 'https://www.bps.go.id/en/pressrelease/2025/01/15/2401/persentase-penduduk-miskin-september-2024-turun-menjadi-8-57-persen-.html' }
            ]
        },
        {
            max: 30000,
            text: 'Hampir setara upah per jam UMP Jakarta',
            sub: 'UMP Jakarta 2026: <strong>Rp 5.729.876/bulan</strong> ÷ 173 jam kerja ≈ <strong>Rp 33.121/jam</strong>. Kamu hampir nyamain itu dalam 10 detik.',
            sources: [
                { label: 'Kepgub DKI No. 1142 Tahun 2025 – UMP Jakarta 2026', url: 'https://jdih.jakarta.go.id/dokumen/detail/14763' }
            ]
        },
        {
            max: Infinity,
            text: 'Kamu lucky banget!',
            sub: '<strong>24,06 juta</strong> orang Indonesia hidup di bawah Rp 19.841/hari. Mereka tidak punya kemewahan 10 detik seperti ini.',
            sources: [
                { label: 'BPS – Jumlah Penduduk Miskin Sep 2024 (24,06 juta)', url: 'https://www.bps.go.id/en/pressrelease/2025/01/15/2401/persentase-penduduk-miskin-september-2024-turun-menjadi-8-57-persen-.html' }
            ]
        }
    ];

    // ─── State ───────────────────────────────────────────────
    let gameActive = false;
    let score = 0;
    let timeLeft = GAME_DURATION;
    let timerInterval = null;
    let spawnInterval = null;

    // ─── Inject CSS ───────────────────────────────────────────
    const style = document.createElement('style');
    style.textContent = `
        /* ── Peek Trigger ── */
        .coin-peek {
            position: absolute;
            left: -22px;
            top: 50%;
            transform: translateY(-50%);
            width: 44px;
            height: 44px;
            cursor: pointer;
            z-index: 20;
            filter: drop-shadow(2px 0 8px rgba(229,35,61,0.45));
            animation: coin-peek-bob 2.2s ease-in-out infinite;
            transition: filter 0.2s;
        }
        .coin-peek:hover {
            filter: drop-shadow(3px 0 14px rgba(229,35,61,0.75)) brightness(1.15);
        }
        @keyframes coin-peek-bob {
            0%,100% { transform: translateY(-50%) translateX(0); }
            50%      { transform: translateY(-50%) translateX(6px); }
        }

        /* ── Game Overlay ── */
        #coin-game-overlay {
            position: fixed;
            inset: 0;
            z-index: 99998;
            pointer-events: none;
            overflow: hidden;
        }

        /* ── HUD ── */
        #coin-hud {
            position: fixed;
            top: 1.25rem;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            align-items: center;
            gap: 1.5rem;
            background: rgba(10,10,10,0.88);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(229,35,61,0.3);
            border-radius: 999px;
            padding: 0.6rem 1.6rem;
            z-index: 99999;
            pointer-events: none;
            font-family: 'Space Grotesk', sans-serif;
            opacity: 0;
            transition: opacity 0.3s;
        }
        #coin-hud.visible { opacity: 1; }

        #coin-score-display {
            font-size: 1rem;
            font-weight: 700;
            color: #fff;
            letter-spacing: 0.02em;
        }
        #coin-score-display span { color: ${SDG_RED}; }

        #coin-timer-wrap {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        #coin-timer-bar-bg {
            width: 100px;
            height: 5px;
            background: rgba(255,255,255,0.15);
            border-radius: 99px;
            overflow: hidden;
        }
        #coin-timer-bar {
            height: 100%;
            background: ${SDG_RED};
            border-radius: 99px;
            transition: width 0.25s linear, background 0.4s;
            width: 100%;
        }
        #coin-timer-bar.warn { background: #ff6b35; }
        #coin-timer-bar.danger { background: #ff3333; }
        #coin-timer-num {
            font-size: 0.85rem;
            font-weight: 700;
            color: #fff;
            min-width: 1.5ch;
            font-variant-numeric: tabular-nums;
        }

        /* ── Clickable Coins ── */
        .game-coin {
            position: fixed;
            pointer-events: all;
            cursor: pointer;
            width: 54px;
            height: 54px;
            z-index: 99999;
            animation: coin-drop-in 0.35s cubic-bezier(0.34,1.56,0.64,1) forwards;
            user-select: none;
            -webkit-user-select: none;
        }
        @keyframes coin-drop-in {
            from { opacity: 0; transform: translateY(-30px) scale(0.6); }
            to   { opacity: 1; transform: translateY(0)    scale(1); }
        }
        .game-coin:hover svg { filter: brightness(1.2); }
        .game-coin.clicked {
            animation: coin-pop 0.3s ease forwards;
            pointer-events: none;
        }
        @keyframes coin-pop {
            0%   { transform: scale(1);   opacity: 1; }
            50%  { transform: scale(1.4); opacity: 0.7; }
            100% { transform: scale(0.2); opacity: 0; }
        }

        /* ── Floating +500 text ── */
        .coin-float-text {
            position: fixed;
            font-family: 'Space Grotesk', sans-serif;
            font-size: 0.85rem;
            font-weight: 800;
            color: ${SDG_RED};
            pointer-events: none;
            z-index: 999999;
            animation: float-up 0.7s ease forwards;
        }
        @keyframes float-up {
            from { opacity: 1; transform: translateY(0); }
            to   { opacity: 0; transform: translateY(-40px); }
        }

        /* ── Result Modal ── */
        #coin-result-modal {
            position: fixed;
            inset: 0;
            z-index: 999999;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1rem;
            background: rgba(0,0,0,0.6);
            backdrop-filter: blur(6px);
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.35s;
        }
        #coin-result-modal.visible {
            opacity: 1;
            pointer-events: all;
        }
        .coin-modal-box {
            background: #0d0d0d;
            border: 1px solid rgba(229,35,61,0.25);
            border-radius: 20px;
            padding: 2.5rem 2rem;
            max-width: 420px;
            width: 100%;
            text-align: center;
            transform: translateY(30px) scale(0.95);
            transition: transform 0.4s cubic-bezier(0.34,1.56,0.64,1);
            font-family: 'Inter', sans-serif;
        }
        #coin-result-modal.visible .coin-modal-box {
            transform: translateY(0) scale(1);
        }
        .coin-modal-emoji { font-size: 2.5rem; margin-bottom: 0.5rem; }
        .coin-modal-score {
            font-family: 'Space Grotesk', sans-serif;
            font-size: 2.8rem;
            font-weight: 900;
            color: ${SDG_RED};
            margin-bottom: 0.25rem;
            letter-spacing: -0.02em;
        }
        .coin-modal-label {
            font-size: 0.75rem;
            font-weight: 700;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            color: rgba(255,255,255,0.35);
            margin-bottom: 1.25rem;
        }
        .coin-modal-headline {
            font-family: 'Space Grotesk', sans-serif;
            font-size: 1.15rem;
            font-weight: 800;
            color: #fff;
            line-height: 1.3;
            margin-bottom: 0.6rem;
        }
        .coin-modal-sub {
            font-size: 0.875rem;
            color: rgba(255,255,255,0.6);
            line-height: 1.6;
            margin-bottom: 1.25rem;
        }
        .coin-modal-sub strong { color: rgba(255,255,255,0.9); }
        .coin-modal-sources {
            border-top: 1px solid rgba(255,255,255,0.08);
            padding-top: 0.75rem;
            margin-bottom: 1.25rem;
        }
        .coin-modal-sources p {
            font-size: 0.65rem;
            font-weight: 700;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            color: rgba(255,255,255,0.25);
            margin-bottom: 0.35rem;
        }
        .coin-modal-sources a {
            display: block;
            font-size: 0.7rem;
            color: ${SDG_RED};
            opacity: 0.8;
            text-decoration: none;
            margin-bottom: 0.2rem;
            transition: opacity 0.2s;
            word-break: break-word;
        }
        .coin-modal-sources a:hover { opacity: 1; text-decoration: underline; }
        .coin-modal-actions {
            display: flex;
            gap: 0.75rem;
            justify-content: center;
        }
        .coin-btn-retry {
            background: ${SDG_RED};
            color: #fff;
            border: none;
            border-radius: 10px;
            padding: 0.7em 1.6em;
            font-family: 'Space Grotesk', sans-serif;
            font-size: 0.875rem;
            font-weight: 700;
            cursor: pointer;
            transition: opacity 0.2s, transform 0.2s;
        }
        .coin-btn-retry:hover { opacity: 0.85; transform: scale(1.03); }
        .coin-btn-close {
            background: transparent;
            color: rgba(255,255,255,0.4);
            border: 1px solid rgba(255,255,255,0.12);
            border-radius: 10px;
            padding: 0.7em 1.4em;
            font-family: 'Space Grotesk', sans-serif;
            font-size: 0.875rem;
            font-weight: 600;
            cursor: pointer;
            transition: border-color 0.2s, color 0.2s;
        }
        .coin-btn-close:hover { border-color: rgba(255,255,255,0.3); color: rgba(255,255,255,0.7); }
    `;
    document.head.appendChild(style);

    // ─── Peek Trigger ─────────────────────────────────────────
    const targetsSection = document.querySelector('.goal-targets');
    if (!targetsSection) return;

    // Make sure the section can host the absolutely-positioned peek
    targetsSection.style.position = 'relative';

    const peekEl = document.createElement('div');
    peekEl.className = 'coin-peek';
    peekEl.title = 'Psst… klik aku!';
    peekEl.innerHTML = coinSVG(SDG_RED);
    targetsSection.appendChild(peekEl);

    // ─── Overlay & HUD (added once) ───────────────────────────
    const overlay = document.createElement('div');
    overlay.id = 'coin-game-overlay';
    document.body.appendChild(overlay);

    const hud = document.createElement('div');
    hud.id = 'coin-hud';
    hud.innerHTML = `
        <div id="coin-score-display">Rp <span id="coin-score-val">0</span></div>
        <div id="coin-timer-wrap">
            <div id="coin-timer-bar-bg"><div id="coin-timer-bar"></div></div>
            <span id="coin-timer-num">10</span>
        </div>
    `;
    document.body.appendChild(hud);

    // ─── Result Modal ──────────────────────────────────────────
    const modal = document.createElement('div');
    modal.id = 'coin-result-modal';
    modal.innerHTML = `<div class="coin-modal-box"></div>`;
    document.body.appendChild(modal);

    // ─── Game Logic ───────────────────────────────────────────
    peekEl.addEventListener('click', startGame);

    function startGame() {
        if (gameActive) return;
        gameActive = true;
        score = 0;
        timeLeft = GAME_DURATION;

        // Hide peek
        peekEl.style.opacity = '0';
        peekEl.style.pointerEvents = 'none';

        // Show HUD
        updateHUD();
        hud.classList.add('visible');

        // Spawn coins every 600ms
        spawnInterval = setInterval(spawnCoin, 600);
        // Also spawn a few immediately
        spawnCoin(); spawnCoin(); spawnCoin();

        // Countdown
        timerInterval = setInterval(() => {
            timeLeft--;
            updateHUD();
            if (timeLeft <= 0) endGame();
        }, 1000);
    }

    function spawnCoin() {
        if (!gameActive) return;

        const coin = document.createElement('div');
        coin.className = 'game-coin';

        // Random position inside viewport
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        const margin = 70;
        const x = margin + Math.random() * (vw - margin * 2);
        const y = margin + Math.random() * (vh - margin * 2);

        coin.style.left = x + 'px';
        coin.style.top = y + 'px';
        coin.innerHTML = coinSVG(SDG_RED);

        coin.addEventListener('click', (e) => {
            if (!gameActive) return;
            e.stopPropagation();
            score += COIN_VALUE;
            updateHUD();
            coin.classList.add('clicked');

            // Floating +500 text
            const txt = document.createElement('div');
            txt.className = 'coin-float-text';
            txt.textContent = '+Rp 500';
            txt.style.left = (x + 10) + 'px';
            txt.style.top = (y - 10) + 'px';
            document.body.appendChild(txt);
            setTimeout(() => txt.remove(), 700);

            setTimeout(() => coin.remove(), 300);
        });

        overlay.appendChild(coin);

        // Auto-remove after 2.5s if not clicked
        setTimeout(() => { if (coin.parentNode) coin.remove(); }, 2500);
    }

    function updateHUD() {
        document.getElementById('coin-score-val').textContent = score.toLocaleString('id-ID');
        document.getElementById('coin-timer-num').textContent = timeLeft;
        const bar = document.getElementById('coin-timer-bar');
        bar.style.width = (timeLeft / GAME_DURATION * 100) + '%';
        bar.className = 'coin-timer-bar'; // reset
        if (timeLeft <= 5) bar.classList.add('warn');
        if (timeLeft <= 3) bar.classList.add('danger');
    }

    function endGame() {
        gameActive = false;
        clearInterval(timerInterval);
        clearInterval(spawnInterval);

        // Remove remaining coins
        overlay.querySelectorAll('.game-coin').forEach(c => c.remove());

        // Hide HUD
        hud.classList.remove('visible');

        // Build result
        const msg = MESSAGES.find(m => score < m.max) || MESSAGES[MESSAGES.length - 1];
        const emoji = score < 5000 ? '😔' : score < 15000 ? '😮' : score < 30000 ? '💪' : '🏆';

        const box = modal.querySelector('.coin-modal-box');
        box.innerHTML = `
            <div class="coin-modal-emoji">${emoji}</div>
            <div class="coin-modal-score">Rp ${score.toLocaleString('id-ID')}</div>
            <div class="coin-modal-label">Terkumpul dalam 10 detik</div>
            <div class="coin-modal-headline">${msg.text}</div>
            <div class="coin-modal-sub">${msg.sub}</div>
            <div class="coin-modal-sources">
                <p>Sumber data</p>
                ${msg.sources.map(s => `<a href="${s.url}" target="_blank" rel="noopener">${s.label} ↗</a>`).join('')}
            </div>
            <div class="coin-modal-actions">
                <button class="coin-btn-retry">Coba lagi</button>
                <button class="coin-btn-close">Tutup</button>
            </div>
        `;

        modal.classList.add('visible');

        box.querySelector('.coin-btn-retry').addEventListener('click', () => {
            modal.classList.remove('visible');
            setTimeout(startGame, 350);
        });
        box.querySelector('.coin-btn-close').addEventListener('click', () => {
            modal.classList.remove('visible');
            // Restore peek
            setTimeout(() => {
                peekEl.style.opacity = '1';
                peekEl.style.pointerEvents = 'auto';
            }, 400);
        });
    }

    // ─── SVG Coin Helper ──────────────────────────────────────
    function coinSVG(color) {
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54 54" fill="none">
            <circle cx="27" cy="27" r="26" fill="${color}" stroke="#fff" stroke-width="1.5" opacity="0.95"/>
            <circle cx="27" cy="27" r="21" fill="none" stroke="rgba(255,255,255,0.25)" stroke-width="1"/>
            <text x="27" y="23" text-anchor="middle" font-family="Space Grotesk, sans-serif"
                font-size="8" font-weight="900" fill="#fff" opacity="0.95">Rp</text>
            <text x="27" y="34" text-anchor="middle" font-family="Space Grotesk, sans-serif"
                font-size="9" font-weight="900" fill="#fff" opacity="0.95">500</text>
        </svg>`;
    }
}