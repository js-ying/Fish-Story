/* 點擊帶 data-mail 的元素開啟寄信視窗：地址旁可複製、下方可開郵件程式；data-mail-theme="dark" 切深色 */
(function () {
  var THEMES = {
    light: { bg: '#fff', text: '#182033', muted: '#5b6478', border: '#dde2ef', accent: '#1a74c2', soft: 'rgba(26,116,194,.09)' },
    dark: { bg: '#141a26', text: '#ebf0ff', muted: 'rgba(235,240,255,.62)', border: 'rgba(235,240,255,.12)', accent: '#5eadf0', soft: 'rgba(94,173,240,.12)' },
  };
  var COPY_ICON = '<svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" style="width:16px;height:16px"><path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/></svg>';
  var CSS =
    '.md-dlg{width:min(320px,calc(100% - 32px));padding:24px;border:1px solid var(--md-border);border-radius:12px;background:var(--md-bg);color:var(--md-text);box-shadow:0 12px 32px rgba(0,0,0,.25);text-align:center;font-size:16px;line-height:1.5;}' +
    '.md-dlg::backdrop{background:rgba(0,0,0,.45);}' +
    '.md-dlg h3{margin:0 0 8px;font-size:18px;font-weight:700;color:inherit;}' +
    '.md-addr{margin:0 0 20px;font-size:17px;}' +
    '.md-val{position:relative;}' +
    '.md-copy{position:absolute;top:50%;left:100%;margin-left:4px;transform:translateY(-50%);display:inline-flex;padding:6px;border:0;border-radius:6px;background:none;color:var(--md-muted);cursor:pointer;}' +
    '.md-copy:hover{background:var(--md-soft);color:var(--md-accent);}' +
    '.md-to{display:block;padding:9px 12px;border-radius:8px;background:var(--md-accent);color:var(--md-bg)!important;font-size:15px;text-decoration:none!important;}' +
    '.md-to:hover{opacity:.9;}' +
    '.md-close{position:absolute;top:8px;right:8px;margin:0;}' +
    '.md-close button{padding:4px 8px;border:0;background:none;color:var(--md-muted);font-size:16px;line-height:1;cursor:pointer;}' +
    '.md-toast{position:fixed;left:50%;bottom:32px;width:max-content;max-width:calc(100% - 32px);padding:8px 16px;border-radius:8px;background:var(--md-text);color:var(--md-bg);font-size:14px;box-shadow:0 4px 12px rgba(0,0,0,.25);transform:translateX(-50%);opacity:0;pointer-events:none;transition:opacity .2s;}' +
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
    dialog.innerHTML =
      '<form method="dialog" class="md-close"><button aria-label="關閉">✕</button></form>' +
      '<h3 id="md-title">來信聯絡</h3>' +
      '<p class="md-addr"><span class="md-val"><span class="md-text"></span>' +
      '<button type="button" class="md-copy" title="複製電子郵件地址" aria-label="複製電子郵件地址">' + COPY_ICON + '</button></span></p>' +
      '<a class="md-to">開啟郵件程式</a>' +
      '<div class="md-toast" role="status" aria-live="polite"></div>';
    document.body.appendChild(dialog);
    toast = dialog.querySelector('.md-toast');
    dialog.querySelector('.md-copy').addEventListener('click', copy);
    // 點背景關閉
    dialog.addEventListener('click', function (e) { if (e.target === dialog) dialog.close(); });
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

  // 依觸發元素設定地址與配色後開啟
  function open(el) {
    if (!dialog) build();
    mail = el.getAttribute('data-mail');
    var t = THEMES[el.getAttribute('data-mail-theme')] || THEMES.light;
    dialog.style.cssText = '--md-bg:' + t.bg + ';--md-text:' + t.text + ';--md-muted:' + t.muted + ';--md-border:' + t.border + ';--md-accent:' + t.accent + ';--md-soft:' + t.soft;
    dialog.querySelector('.md-text').textContent = mail;
    dialog.querySelector('.md-to').href = 'mailto:' + mail;
    dialog.showModal();
  }

  document.addEventListener('click', function (e) {
    var el = e.target.closest ? e.target.closest('[data-mail]') : null;
    if (!el) return;
    e.preventDefault();
    // 滑鼠點擊後移除 focus 外框；鍵盤操作仍會先顯示外框
    if (e.detail > 0 && el.blur) el.blur();
    open(el);
  });
})();
