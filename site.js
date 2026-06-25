document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.nav-logo img').forEach((image) => {
    image.addEventListener('error', () => {
      image.style.display = 'none';
    });
  });

  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
    });

    navLinks.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  }

  document.addEventListener('click', (event) => {
    const link = event.target.closest('a[href*="amzn.to"], a[href*="amazon.com"]');
    if (!link || typeof gtag !== 'function') return;
    gtag('event', 'amazon_click', {
      event_category: 'affiliate',
      event_label: link.href
    });
  });
});
