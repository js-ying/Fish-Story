/* 點擊帶 data-mail 的元素開啟寄信視窗：地址旁可複製、下方可開郵件程式；data-mail-theme="dark" 切深色 */
(function () {
  // 依 data-mail-theme 切換淺色（白霧玻璃）或深色（jsy.tw 星空玻璃），預設淺色
  var THEMES = {
    light: '--md-bg:rgba(255,255,255,.6);--md-text:#182033;--md-muted:#5b6478;--md-border:rgba(255,255,255,.75);--md-soft:rgba(24,32,51,.08);--md-btn:rgba(255,255,255,.55);--md-btn-hover:rgba(255,255,255,.85);--md-btn-border:rgba(24,32,51,.12);--md-shadow:0 16px 40px rgba(3,8,20,.25),inset 0 1px 0 rgba(255,255,255,.6);--md-btn-shadow:0 2px 8px rgba(3,8,20,.08);--md-toast-bg:#182033;--md-toast-text:#fff',
    dark: '--md-bg:rgba(255,255,255,.04);--md-text:#ebf0ff;--md-muted:rgba(235,240,255,.6);--md-border:rgba(255,255,255,.14);--md-soft:rgba(255,255,255,.1);--md-btn:rgba(255,255,255,.07);--md-btn-hover:rgba(255,255,255,.12);--md-btn-border:rgba(255,255,255,.16);--md-shadow:0 16px 40px rgba(3,8,20,.55),0 0 28px rgba(120,140,255,.12),inset 0 1px 0 rgba(255,255,255,.08);--md-btn-shadow:0 6px 18px rgba(3,8,20,.6),0 0 18px rgba(120,140,255,.06),inset 0 1px 0 rgba(255,255,255,.04);--md-toast-bg:#ebf0ff;--md-toast-text:#141a26',
  };
  var COPY_ICON = '<svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" style="width:16px;height:16px"><path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/></svg>';
  // dialog 只當透明外框；玻璃效果放在內層 .md-card（避免 Safari 偽元素模糊殘影），提示留在卡片外才能以畫面定位
  var CSS =
    '.md-dlg{width:min(320px,calc(100% - 32px));max-width:none;padding:0;border:0;background:none;overflow:visible;color:var(--md-text);text-align:center;font-size:16px;line-height:1.5;}' +
    '.md-dlg:focus{outline:none;}' +
    '.md-card{position:relative;padding:24px;border:1px solid var(--md-border);border-radius:20px;background:var(--md-bg);box-shadow:var(--md-shadow);-webkit-backdrop-filter:blur(18px) saturate(140%);backdrop-filter:blur(18px) saturate(140%);}' +
    '.md-dlg::backdrop{-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px);}' +
    '.md-dlg.md-light::backdrop{background:rgba(3,8,20,.3);}' +
    '.md-dlg.md-dark::backdrop{background:rgba(3,8,20,.55);}' +
    '.md-dlg h3{margin:0 0 6px;font-size:18px;font-weight:700;line-height:28px;color:inherit;}' +
    '.md-addr{margin:0 0 20px;font-size:16px;line-height:24px;}' +
    '.md-val{position:relative;}' +
    '.md-copy{position:absolute;top:50%;left:100%;margin-left:4px;transform:translateY(-50%);display:inline-flex;padding:6px;border:0;border-radius:8px;background:none;color:var(--md-muted);cursor:pointer;transition:background-color .16s,color .16s;}' +
    '.md-copy:hover{background:var(--md-soft);color:var(--md-text);}' +
    '.md-to{display:block;padding:9px 12px;line-height:22px;border:1px solid var(--md-btn-border);border-radius:20px;background:var(--md-btn);color:var(--md-text)!important;box-shadow:var(--md-btn-shadow);font-size:15px;text-decoration:none!important;transition:background-color .16s,transform .16s;}' +
    '.md-to:hover{background:var(--md-btn-hover);transform:translateY(-1px);}' +
    '.md-close{position:absolute;top:12px;right:12px;margin:0;}' +
    '.md-close button{display:flex;align-items:center;justify-content:center;width:28px;height:28px;padding:0;border:0;border-radius:8px;background:none;color:var(--md-muted);font-size:16px;line-height:1;cursor:pointer;}' +
    '.md-close button:hover{background:var(--md-soft);color:var(--md-text);}' +
    '.md-toast{position:fixed;left:50%;bottom:32px;width:max-content;max-width:calc(100% - 32px);padding:8px 16px;border-radius:8px;background:var(--md-toast-bg);color:var(--md-toast-text);font-size:14px;box-shadow:0 4px 12px rgba(0,0,0,.25);transform:translateX(-50%);opacity:0;pointer-events:none;transition:opacity .2s;}' +
    '.md-toast.show{opacity:1;}';

  var dialog, toast, timer, mail;

  // 第一次使用時建立樣式與視窗
  function build() {
    var style = document.createElement('style');
    style.textContent = CSS;
    document.head.appendChild(style);
    dialog = document.createElement('dialog');
    dialog.className = 'md-dlg';
    dialog.setAttribute('aria-labelledby', 'md-title');
    dialog.tabIndex = -1;
    dialog.innerHTML =
      '<div class="md-card"><form method="dialog" class="md-close"><button aria-label="關閉">✕</button></form>' +
      '<h3 id="md-title">來信聯絡</h3>' +
      '<p class="md-addr"><span class="md-val"><span class="md-text"></span>' +
      '<button type="button" class="md-copy" title="複製電子郵件地址" aria-label="複製電子郵件地址">' + COPY_ICON + '</button></span></p>' +
      '<a class="md-to">開啟郵件程式</a></div>' +
      '<div class="md-toast" role="status" aria-live="polite"></div>';
    document.body.appendChild(dialog);
    toast = dialog.querySelector('.md-toast');
    dialog.querySelector('.md-copy').addEventListener('click', copy);
    // 只在點到視窗外的背景時關閉（點視窗留白處 target 也是 dialog，需比對座標）
    dialog.addEventListener('click', function (e) {
      if (e.target !== dialog) return;
      var r = dialog.getBoundingClientRect();
      if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) dialog.close();
    });
  }

  // 複製地址並跳出提示（提示放在 dialog 內才會顯示在 modal 上層）
  function copy() {
    var show = function (text) {
      toast.textContent = text;
      toast.classList.add('show');
      clearTimeout(timer);
      timer = setTimeout(function () { toast.classList.remove('show'); }, 2000);
    };
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(mail).then(function () { show('已複製'); }, function () { show('複製失敗，請手動選取'); });
    } else {
      show('複製失敗，請手動選取');
    }
  }

  // 依觸發元素設定地址與配色後開啟；滑鼠或觸控開啟時 focus 放在視窗本身，避免 Safari 在關閉鈕顯示外框
  function open(el, byPointer) {
    if (!dialog) build();
    mail = el.getAttribute('data-mail');
    var theme = THEMES[el.getAttribute('data-mail-theme')] ? el.getAttribute('data-mail-theme') : 'light';
    dialog.className = 'md-dlg md-' + theme;
    dialog.style.cssText = THEMES[theme];
    dialog.querySelector('.md-text').textContent = mail;
    dialog.querySelector('.md-to').href = 'mailto:' + mail;
    dialog.showModal();
    if (byPointer) dialog.focus();
  }

  document.addEventListener('click', function (e) {
    var el = e.target.closest ? e.target.closest('[data-mail]') : null;
    if (!el) return;
    e.preventDefault();
    // 滑鼠點擊後移除 focus 外框；鍵盤操作仍會先顯示外框
    if (e.detail > 0 && el.blur) el.blur();
    open(el, e.detail > 0);
  });
})();
