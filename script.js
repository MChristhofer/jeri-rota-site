document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".main-nav .nav-link");

  function updateActiveLink() {
    let currentSectionId = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 120; // margem superior
      const sectionHeight = section.offsetHeight;

      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSectionId}`) {
        link.classList.add("active");
      }
    });
  }

  // Atualiza ao clicar também
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navLinks.forEach((lnk) => lnk.classList.remove("active"));
      this.classList.add("active");
    });
  });

  window.addEventListener("scroll", updateActiveLink);
  updateActiveLink(); // Força verificação ao carregar
});
