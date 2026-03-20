/* ═══════════════════════════════════════
   KUSHIRO TABLE — Night Scene Effects
   "釧路の夜景" Dynamic Visual Engine
   v1.0
═══════════════════════════════════════ */
(function() {
'use strict';

/* ── 1. STARFIELD CANVAS ───────────────────────────────── */
function initStarfield() {
  const canvas = document.createElement('canvas');
  canvas.id = 'night-starfield';
  canvas.style.cssText = [
    'position:fixed', 'top:0', 'left:0', 'width:100%', 'height:100%',
    'pointer-events:none', 'z-index:0', 'opacity:.65'
  ].join(';');
  document.body.prepend(canvas);

  const ctx = canvas.getContext('2d');
  let W, H, stars = [];

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function mkStars(n) {
    stars = [];
    for (let i = 0; i < n; i++) {
      stars.push({
        x: Math.random() * W,
        y: Math.random() * H * 0.7,  // upper 70% of screen
        r: Math.random() * 1.2 + 0.2,
        a: Math.random(),
        da: (Math.random() * 0.008 + 0.003) * (Math.random() < 0.5 ? 1 : -1),
        speed: Math.random() * 0.06 + 0.01,
        hue: Math.random() < 0.15 ? 30 : (Math.random() < 0.35 ? 45 : 55)
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    stars.forEach(s => {
      s.a += s.da;
      if (s.a > 1) { s.a = 1; s.da = -Math.abs(s.da); }
      if (s.a < 0) { s.a = 0; s.da =  Math.abs(s.da); }
      s.y -= s.speed;
      if (s.y < -4) { s.y = H * 0.7; s.x = Math.random() * W; }

      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${s.hue},80%,90%,${s.a})`;
      ctx.fill();

      // glow halo for bright stars
      if (s.r > 0.9 && s.a > 0.6) {
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r * 3, 0, Math.PI * 2);
        const g = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.r * 3);
        g.addColorStop(0, `hsla(${s.hue},80%,90%,${s.a * 0.4})`);
        g.addColorStop(1, 'transparent');
        ctx.fillStyle = g;
        ctx.fill();
      }
    });
    requestAnimationFrame(draw);
  }

  resize();
  mkStars(130);
  draw();
  window.addEventListener('resize', () => { resize(); mkStars(130); });
}

/* ── 2. CITY LIGHT BOKEH ───────────────────────────────── */
function initBokeh() {
  const colors = [
    'rgba(232,83,24,0.22)',   // sunset orange — 夕焼けの主役
    'rgba(240,168,32,0.20)',  // amber gold — ラーメン・揚げ物の輝き
    'rgba(232,83,24,0.18)',   // orange warm — 炉端の炎
    'rgba(245,200,60,0.16)',  // golden yellow — 料理の黄金色
    'rgba(184,32,32,0.14)',   // crimson — 焼き肉の炭火
    'rgba(200,124,20,0.12)',  // deep amber — 煮物・だし
    'rgba(240,168,32,0.10)',  // soft gold
    'rgba(232,83,24,0.08)',   // faint sunset glow
  ];
  const wrap = document.createElement('div');
  wrap.id = 'night-bokeh';
  wrap.style.cssText = [
    'position:fixed', 'inset:0', 'pointer-events:none',
    'z-index:0', 'overflow:hidden'
  ].join(';');
  document.body.prepend(wrap);

  for (let i = 0; i < 22; i++) {
    const el = document.createElement('div');
    const sz  = 80 + Math.random() * 200;
    const x   = Math.random() * 100;
    const y   = 30 + Math.random() * 70;
    const col = colors[Math.floor(Math.random() * colors.length)];
    const dur = 8  + Math.random() * 16;
    const del = -(Math.random() * 20);
    el.style.cssText = [
      `position:absolute`,
      `width:${sz}px`, `height:${sz}px`,
      `left:${x}%`, `top:${y}%`,
      `transform:translate(-50%,-50%)`,
      `border-radius:50%`,
      `background:${col}`,
      `filter:blur(${sz * 0.55}px)`,
      `animation:bokehFloat ${dur}s ease-in-out ${del}s infinite`
    ].join(';');
    wrap.appendChild(el);
  }

  const style = document.createElement('style');
  style.textContent = `
    @keyframes bokehFloat {
      0%,100% { transform:translate(-50%,-50%) scale(1) translateY(0); opacity:.8; }
      33%      { transform:translate(-50%,-50%) scale(1.12) translateY(-28px); opacity:1; }
      66%      { transform:translate(-50%,-50%) scale(.92) translateY(18px); opacity:.6; }
    }
    @keyframes auroraShimmer {
      0%   { background-position: 0%   50%; opacity:.55; }
      50%  { background-position: 100% 50%; opacity:.8;  }
      100% { background-position: 0%   50%; opacity:.55; }
    }
    @keyframes neonPulse {
      0%,100% { text-shadow: 0 0 12px rgba(232,83,24,.7), 0 0 28px rgba(232,83,24,.4); }
      50%     { text-shadow: 0 0 22px rgba(245,200,60,.9), 0 0 50px rgba(240,168,32,.5), 0 0 80px rgba(184,32,32,.2); }
    }
    @keyframes cursorTrailFade {
      0%   { opacity:.8; transform:scale(1); }
      100% { opacity:0;  transform:scale(.2); }
    }
    .night-reveal {
      opacity: 0;
      transform: translateY(28px);
      transition: opacity .7s cubic-bezier(0.23,1,0.32,1),
                  transform .7s cubic-bezier(0.23,1,0.32,1);
    }
    .night-reveal.visible {
      opacity: 1;
      transform: translateY(0);
    }
    .ph-waiting-overlay {
      position:absolute; inset:0;
      display:flex; flex-direction:column;
      align-items:center; justify-content:center;
      gap:.7rem; z-index:3; pointer-events:none;
      background: rgba(4,12,26,.55);
      backdrop-filter: blur(2px);
    }
    .ph-waiting-overlay .ph-icon-el {
      font-size:1.8rem; opacity:.7;
      animation: ph-pulse 3s ease-in-out infinite;
    }
    .ph-waiting-overlay .ph-text-el {
      font-family:'Oswald',sans-serif;
      font-size:.62rem; letter-spacing:.3em;
      text-transform:uppercase;
      color:rgba(255,240,200,.78);
      text-shadow:0 0 20px rgba(240,168,32,.5);
    }
    .ph-waiting-overlay .ph-dots {
      display:flex; gap:.35rem;
    }
    .ph-waiting-overlay .ph-dots span {
      width:4px; height:4px; border-radius:50%;
      background:rgba(240,168,32,.85);
      animation:ph-dots .8s ease-in-out infinite;
    }
    .ph-waiting-overlay .ph-dots span:nth-child(2){ animation-delay:.16s; }
    .ph-waiting-overlay .ph-dots span:nth-child(3){ animation-delay:.32s; }
    @keyframes ph-pulse {
      0%,100%{ opacity:.6; transform:scale(1); }
      50%    { opacity:.85; transform:scale(1.08); }
    }
    @keyframes ph-dots {
      0%,80%,100%{ transform:scale(.6); opacity:.5; }
      40%        { transform:scale(1);  opacity:1;  }
    }
  `;
  document.head.appendChild(style);
}

/* ── 3. AURORA SHIMMER BAND (hero) ─────────────────────── */
function initAurora() {
  const hero = document.querySelector('.hero, .article-hero');
  if (!hero) return;
  const band = document.createElement('div');
  band.id = 'aurora-band';
  band.style.cssText = [
    'position:absolute', 'top:0', 'left:0', 'right:0',
    'height:260px', 'pointer-events:none', 'z-index:1',
    'background:linear-gradient(135deg,rgba(184,32,32,.10),rgba(232,83,24,.12),rgba(240,168,32,.10),rgba(232,83,24,.08),rgba(184,32,32,.08))',
    'background-size:400% 400%',
    'animation:auroraShimmer 8s ease infinite',
    'mask-image:linear-gradient(to bottom,rgba(0,0,0,.6),transparent)',
    '-webkit-mask-image:linear-gradient(to bottom,rgba(0,0,0,.6),transparent)',
    'opacity:.7'
  ].join(';');
  hero.prepend(band);
}

/* ── 4. PARALLAX HERO ──────────────────────────────────── */
function initParallax() {
  const heroInner = document.querySelector('.hero-inner');
  if (!heroInner) return;
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const y = window.scrollY;
        heroInner.style.transform = `translateY(${y * 0.22}px)`;
        heroInner.style.opacity = Math.max(0, 1 - y / 600);
        ticking = false;
      });
      ticking = true;
    }
  });
}

/* ── 5. NEON LOGO PULSE ────────────────────────────────── */
function initNeonGlow() {
  document.querySelectorAll('.logo-jp, .footer-logo').forEach(el => {
    el.style.animation = 'neonPulse 3s ease-in-out infinite';
  });
}

/* ── 6. SCROLL REVEAL ──────────────────────────────────── */
function initScrollReveal() {
  const targets = document.querySelectorAll(
    '.card, .sec-title, .sec-label, .sec-desc, .aff-card, ' +
    '.store-meta, .photo-block, .article-main h2, .article-main p, ' +
    '.hero-stats, .hero-stat, .toc-inner'
  );
  targets.forEach((el, i) => {
    el.classList.add('night-reveal');
    el.style.transitionDelay = `${(i % 8) * 0.06}s`;
  });
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  targets.forEach(el => observer.observe(el));
}

/* ── 7. COUNTER ANIMATION ──────────────────────────────── */
function initCounters() {
  const counters = document.querySelectorAll('.stat-num[data-count]');
  if (!counters.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = parseFloat(el.dataset.count);
      const isFloat = el.dataset.count.includes('.');
      const suffix = el.dataset.suffix || '';
      const dur = 1800;
      const step = 16;
      const inc = target / (dur / step);
      let cur = 0;
      const timer = setInterval(() => {
        cur += inc;
        if (cur >= target) { cur = target; clearInterval(timer); }
        el.textContent = (isFloat ? cur.toFixed(1) : Math.floor(cur)) + suffix;
      }, step);
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach(el => observer.observe(el));
}

/* ── 8. CURSOR TRAIL (desktop only) ───────────────────── */
function initCursorTrail() {
  if (window.matchMedia('(pointer:coarse)').matches) return;
  const trail = [];
  const N = 8;
  for (let i = 0; i < N; i++) {
    const d = document.createElement('div');
    const sz = 6 - i * 0.5;
    d.style.cssText = [
      'position:fixed', 'pointer-events:none', 'z-index:9999',
      `width:${sz}px`, `height:${sz}px`, 'border-radius:50%',
      'background:rgba(232,83,24,0.7)',
      'transform:translate(-50%,-50%)',
      'transition:opacity .4s',
      'opacity:0'
    ].join(';');
    document.body.appendChild(d);
    trail.push({ el: d, x: 0, y: 0 });
  }
  let mx = 0, my = 0;
  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
  function animTrail() {
    let x = mx, y = my;
    trail.forEach((t, i) => {
      t.x += (x - t.x) * 0.35;
      t.y += (y - t.y) * 0.35;
      t.el.style.left = t.x + 'px';
      t.el.style.top  = t.y + 'px';
      t.el.style.opacity = '1';
      const alpha = 0.7 * (1 - i / N);
      t.el.style.background = `rgba(232,83,24,${alpha})`;
      x = t.x; y = t.y;
    });
    requestAnimationFrame(animTrail);
  }
  animTrail();
  document.addEventListener('mouseleave', () => trail.forEach(t => t.el.style.opacity = '0'));
}

/* ── 9. IMAGE PLACEHOLDER HANDLER ─────────────────────── */
function initImagePlaceholders() {
  // Handle broken/missing images
  function addWaiting(img) {
    const wrapper = img.closest('.photo-placeholder, .photo-block-main, .photo-sub-item, .card-visual');
    if (!wrapper) return;
    if (wrapper.querySelector('.ph-waiting-overlay')) return;
    img.style.display = 'none';
    const ov = document.createElement('div');
    ov.className = 'ph-waiting-overlay';
    ov.innerHTML = `
      <div class="ph-icon-el">📷</div>
      <div class="ph-text-el">写真準備中…</div>
      <div class="ph-dots"><span></span><span></span><span></span></div>
    `;
    wrapper.appendChild(ov);
  }

  document.querySelectorAll('img').forEach(img => {
    if (img.complete && img.naturalWidth === 0) {
      addWaiting(img);
    } else {
      img.addEventListener('error', () => addWaiting(img), { once: true });
    }
  });
}

/* ── 10. HEADER SCROLL EFFECT ──────────────────────────── */
function initHeaderScroll() {
  const header = document.getElementById('site-header');
  if (!header) return;
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        if (window.scrollY > 60) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
        ticking = false;
      });
      ticking = true;
    }
  });
}

/* ── 11. CARD HOVER SPARKLE ────────────────────────────── */
function initCardSparkle() {
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mousemove', function(e) {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width  * 100).toFixed(1);
      const y = ((e.clientY - rect.top)  / rect.height * 100).toFixed(1);
      card.style.setProperty('--mx', x + '%');
      card.style.setProperty('--my', y + '%');
    });
  });
}

/* ── 12. NIGHT THEME TOGGLE (preserve) ────────────────── */
function preserveBodyBg() {
  // ensure body has midnight bg even before CSS loads
  if (!document.body.style.background) {
    document.body.style.backgroundColor = '#0F0804';
  }
}

/* ── BOOT ──────────────────────────────────────────────── */
function boot() {
  preserveBodyBg();
  initStarfield();
  initBokeh();
  initAurora();
  initParallax();
  initNeonGlow();
  initScrollReveal();
  initCounters();
  initCursorTrail();
  initImagePlaceholders();
  initHeaderScroll();
  initCardSparkle();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}

})();
