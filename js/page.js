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

// ── 写真プレースホルダー「写真準備中」エフェクト ──
(function(){
  // 多言語ラベル
  const waitingLabel = {
    ja: '写真準備中',
    en: 'Photo Coming Soon',
    'zh-TW': '照片準備中',
  };

  function injectWaiting(){
    const lang = (typeof currentLang !== 'undefined') ? currentLang : 'ja';
    const label = waitingLabel[lang] || waitingLabel['ja'];

    document.querySelectorAll('.photo-placeholder').forEach(el => {
      // 実際の画像があればスキップ
      if(el.querySelector('img')) return;
      // 既に挿入済みならラベルだけ更新
      const existing = el.querySelector('.ph-waiting');
      if(existing){
        const t = existing.querySelector('.ph-waiting-text');
        if(t) t.textContent = label;
        return;
      }
      const div = document.createElement('div');
      div.className = 'ph-waiting';
      div.innerHTML =
        '<span class="ph-waiting-icon">📷</span>' +
        '<span class="ph-waiting-text">' + label + '</span>' +
        '<div class="ph-waiting-dot">' +
          '<span></span><span></span><span></span>' +
        '</div>';
      el.appendChild(div);
    });
  }

  document.addEventListener('DOMContentLoaded', injectWaiting);

  // 言語切替時にラベルも更新
  const _origApply = window.applyLang;
  if(typeof _origApply === 'function'){
    window.applyLang = function(lang){
      _origApply(lang);
      injectWaiting();
    };
  } else {
    // i18n.js より後に読まれる場合の保険
    document.addEventListener('DOMContentLoaded', function(){
      const orig = window.applyLang;
      if(typeof orig === 'function'){
        window.applyLang = function(lang){ orig(lang); injectWaiting(); };
      }
    });
  }
})();
