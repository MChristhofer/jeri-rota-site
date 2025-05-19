document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('mobile-menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');

  toggle.addEventListener('click', () => {
    mobileNav.classList.toggle('show');
  });
});
