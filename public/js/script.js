// Bootstrap form validation
(() => {
  'use strict';
  const forms = document.querySelectorAll('.needs-validation');
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) { event.preventDefault(); event.stopPropagation(); }
      form.classList.add('was-validated');
    }, false);
  });
})();

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const nav = document.getElementById('main-navbar');
  if (nav) nav.classList.toggle('scrolled', window.scrollY > 20);
});

// Mobile menu toggle
function toggleMobileMenu() {
  const menu = document.getElementById('wl-mobile-menu');
  const btn = document.getElementById('wl-hamburger');
  if (menu) menu.classList.toggle('open');
  if (btn) btn.classList.toggle('open');
}

// User dropdown toggle
function toggleUserMenu() {
  const dd = document.getElementById('user-dropdown');
  if (dd) dd.classList.toggle('open');
}
document.addEventListener('click', (e) => {
  const menu = document.getElementById('wl-user-menu');
  if (menu && !menu.contains(e.target)) {
    const dd = document.getElementById('user-dropdown');
    if (dd) dd.classList.remove('open');
  }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      const mobileMenu = document.getElementById('wl-mobile-menu');
      if (mobileMenu) mobileMenu.classList.remove('open');
    }
  });
});

// Category filter highlight
function filterCategory(el, cat) {
  document.querySelectorAll('.category-item').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
}

// Mark active nav link
(function() {
  const links = document.querySelectorAll('.wl-nav-link');
  links.forEach(link => {
    if (link.href === window.location.href) link.classList.add('active');
  });
})();

// Intersection Observer for fade-in animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.style.opacity='1'; e.target.style.transform='translateY(0)'; } });
}, { threshold: 0.1 });
document.querySelectorAll('.feature-card, .testimonial-card, .step-card, .destination-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});