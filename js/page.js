/* ════════════════════════════════════
   PAGE.JS — サブページ用JS
════════════════════════════════════ */

// ── Header hide on scroll ──
let lastY = 0;
const hdr = document.getElementById('site-header');
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  if (hdr) {
    hdr.style.transform = (y > 100 && y > lastY) ? 'translateY(-100%)' : 'translateY(0)';
    hdr.style.transition = 'transform .4s cubic-bezier(.23,1,.32,1)';
  }
  lastY = y;
});

// ── Scroll-triggered fade-up ──
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.fade-up').forEach(el => io.observe(el));

// ── TOC smooth scroll ──
document.querySelectorAll('.toc-list a[data-target]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const target = document.getElementById(a.dataset.target);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// ── Affiliate click tracking (stub) ──
document.querySelectorAll('.saff-btn, .saff-btn-sub').forEach(btn => {
  btn.addEventListener('click', () => {
    const name = btn.closest('.sidebar-aff')?.querySelector('.saff-name')?.textContent || 'unknown';
    console.log('[HokkaidoTable] affiliate click:', name);
  });
});
