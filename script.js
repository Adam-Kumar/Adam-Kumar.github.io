/**
 * Adam Kumar — Professional CV Client Logic
 * Clean, lightweight, clutter-free functionality.
 */

document.addEventListener('DOMContentLoaded', () => {
  initClipboardCopy();
  initContactForm();
});

/**
 * Bottom Message Box Form Handler
 */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('form-name').value.trim();
    const email = document.getElementById('form-email').value.trim();
    const message = document.getElementById('form-message').value.trim();

    if (!name || !email || !message) return;

    const subject = encodeURIComponent(`Message from ${name} via CV Website`);
    const body = encodeURIComponent(`From: ${name} (${email})\n\nMessage:\n${message}`);
    window.location.href = `mailto:xadamok@gmail.com?subject=${subject}&body=${body}`;

    showToast('Opening email client...');
    form.reset();
  });
}

/**
 * 1-Click Clipboard Copy with Feedback Toast
 */
function initClipboardCopy() {
  const copyButtons = document.querySelectorAll('[data-copy]');
  const toast = document.getElementById('toast-msg');

  copyButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const textToCopy = btn.getAttribute('data-copy');
      const label = btn.getAttribute('data-label') || 'Text';

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          showToast(`Copied ${label} to clipboard`);
        }).catch(() => {
          fallbackCopy(textToCopy, label);
        });
      } else {
        fallbackCopy(textToCopy, label);
      }
    });
  });

  function fallbackCopy(text, label) {
    const tempInput = document.createElement('textarea');
    tempInput.value = text;
    tempInput.setAttribute('readonly', '');
    tempInput.style.position = 'absolute';
    tempInput.style.left = '-9999px';
    document.body.appendChild(tempInput);
    tempInput.select();
    try {
      document.execCommand('copy');
      showToast(`Copied ${label} to clipboard`);
    } catch (err) {
      showToast(`Copy failed`);
    }
    document.body.removeChild(tempInput);
  }

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');

    clearTimeout(toast.timeoutId);
    toast.timeoutId = setTimeout(() => {
      toast.classList.remove('show');
    }, 2200);
  }
}
