document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".main-nav .nav-link");

  function updateActiveLink() {
    let closestSection = null;
    let closestDistance = Number.POSITIVE_INFINITY;

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const distance = Math.abs(rect.top);
      if (distance < closestDistance && rect.top <= window.innerHeight / 2) {
        closestSection = section;
        closestDistance = distance;
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (
        closestSection &&
        link.getAttribute("href").includes(closestSection.getAttribute("id"))
      ) {
        link.classList.add("active");
      }
    });
  }

  // Marca o link como ativo quando clicado
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navLinks.forEach((lnk) => lnk.classList.remove("active"));
      this.classList.add("active");
    });
  });

  window.addEventListener("scroll", updateActiveLink);
});
