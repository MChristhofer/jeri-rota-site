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
// Funcionalidade do menu mobile
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const mobileNav = document.querySelector(".mobile-nav");
  const mobileLinks = mobileNav.querySelectorAll("a");

  // Abre ou fecha o menu ao clicar no botão de menu
  menuToggle.addEventListener("click", function () {
    mobileNav.classList.toggle("d-none");
  });

  // Fecha o menu ao clicar em um link
  mobileLinks.forEach((link) => {
    link.addEventListener("click", function () {
      mobileNav.classList.add("d-none");
    });
  });
});
// Mostrar o botão de "voltar ao topo" ao rolar
window.addEventListener("scroll", function () {
  const btnTop = document.getElementById("btnTop");
  if (window.scrollY > 200) {
    btnTop.style.display = "block";
  } else {
    btnTop.style.display = "none";
  }
});

// Função que rola para o topo suavemente
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
