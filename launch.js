const installButton = document.querySelector('#install-app');
const resourceForm = document.querySelector('#resource-form');
let installPrompt = null;

function showMessage(message) {
  const toast = document.querySelector('#toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('is-visible');
  window.setTimeout(() => toast.classList.remove('is-visible'), 4000);
}

if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.hostname === 'localhost')) {
  window.addEventListener('load', () => navigator.serviceWorker.register('./service-worker.js').catch(() => {}));
}

window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  installPrompt = event;
  installButton?.classList.add('install-ready');
});

window.addEventListener('appinstalled', () => {
  installPrompt = null;
  if (installButton) installButton.hidden = true;
  showMessage('VetEscape was added to your home screen.');
});

installButton?.addEventListener('click', async () => {
  if (window.matchMedia('(display-mode: standalone)').matches || navigator.standalone) {
    showMessage('VetEscape is already installed on this device.');
    return;
  }
  if (installPrompt) {
    installPrompt.prompt();
    await installPrompt.userChoice;
    installPrompt = null;
    return;
  }
  const isAppleMobile = /iphone|ipad|ipod/i.test(navigator.userAgent);
  showMessage(isAppleMobile
    ? 'In Safari, tap Share, then “Add to Home Screen” to install VetEscape.'
    : 'Open your browser menu and choose “Install app” or “Add to Home screen”.');
});

resourceForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const name = document.querySelector('#submit-name').value.trim();
  const url = document.querySelector('#submit-url').value.trim();
  const place = document.querySelector('#submit-location').value.trim() || 'Not provided';
  const details = document.querySelector('#submit-details').value.trim() || 'Not provided';
  const title = `Resource suggestion: ${name}`;
  const body = ['## Suggested resource', '', `**Official website:** ${url}`, `**Location/service area:** ${place}`, '**Details:**', details, '', 'Submitted through the VetEscape resource form. Please verify details before listing.', ''].join('\n');
  const issueURL = `https://github.com/kevinmyers474-sudo/vetescape/issues/new?title=${encodeURIComponent(title)}&body=${encodeURIComponent(body)}`;
  window.open(issueURL, '_blank', 'noopener,noreferrer');
  showMessage('Review your suggestion in the new GitHub tab, then submit it there.');
});
