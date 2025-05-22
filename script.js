document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('mobile-menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');

  toggle.addEventListener('click', () => {
    mobileNav.classList.toggle('show');
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".main-nav .nav-link");

  // Atualiza link ativo com base no scroll
  function updateActiveLink() {
    let currentSectionId = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 120; // ajusta sensibilidade
      const sectionHeight = section.offsetHeight;
      if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(currentSectionId)) {
        link.classList.add("active");
      }
    });
  }

  // Destacar link ao clicar manualmente
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navLinks.forEach((lnk) => lnk.classList.remove("active"));
      this.classList.add("active");
    });
  });

  window.addEventListener("scroll", updateActiveLink);
});
