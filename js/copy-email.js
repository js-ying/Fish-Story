/* 點擊帶 data-copy-email 的元素：複製信箱到剪貼簿並跳出提示 */
(function () {
  var toast;
  var timer;

  // 顯示底部提示，2.5 秒後淡出
  function showToast(text) {
    if (!toast) {
      toast = document.createElement('div');
      toast.setAttribute('role', 'status');
      toast.style.cssText =
        'position:fixed;left:50%;bottom:32px;transform:translateX(-50%);z-index:99999;' +
        'width:max-content;max-width:calc(100% - 32px);padding:10px 18px;border-radius:8px;' +
        'background:rgba(33,37,41,.92);color:#fff;font-size:15px;line-height:1.4;' +
        'box-shadow:0 4px 12px rgba(0,0,0,.25);opacity:0;transition:opacity .2s;pointer-events:none;';
      document.body.appendChild(toast);
    }
    toast.textContent = text;
    toast.style.opacity = '1';
    clearTimeout(timer);
    timer = setTimeout(function () { toast.style.opacity = '0'; }, 2500);
  }

  // 舊瀏覽器或非安全環境無 Clipboard API 時改用 execCommand
  function fallbackCopy(text) {
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.setAttribute('readonly', '');
    ta.style.cssText = 'position:fixed;top:-1000px;opacity:0;';
    document.body.appendChild(ta);
    ta.select();
    var ok = false;
    try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
    document.body.removeChild(ta);
    return ok;
  }

  // 複製並依結果提示；失敗時仍顯示地址讓使用者手動複製
  function copyEmail(email) {
    var done = function () { showToast('已複製 e-mail 地址：' + email); };
    var fail = function () {
      if (fallbackCopy(email)) done();
      else showToast('請手動複製 e-mail 地址：' + email);
    };
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(email).then(done, fail);
    } else {
      fail();
    }
  }

  document.addEventListener('click', function (e) {
    var el = e.target.closest ? e.target.closest('[data-copy-email]') : null;
    if (!el) return;
    e.preventDefault();
    copyEmail(el.getAttribute('data-copy-email'));
  });
})();
