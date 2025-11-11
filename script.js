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
// Funcionalidade do menu mobile (melhorada)
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const mobileNav = document.querySelector(".mobile-nav");

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener("click", function () {
      // alterna a visibilidade do menu
      mobileNav.classList.toggle("show");
    });

    // fecha o menu ao clicar em um link
    const mobileLinks = mobileNav.querySelectorAll("a");
    mobileLinks.forEach((link) => {
      link.addEventListener("click", function () {
        mobileNav.classList.remove("show");
      });
    });
  }
});
// 🔷 Destacar o link ativo no menu mobile
document.addEventListener("DOMContentLoaded", function () {
  const mobileLinks = document.querySelectorAll(".mobile-nav a");

  mobileLinks.forEach(link => {
    link.addEventListener("click", function () {
      mobileLinks.forEach(l => l.classList.remove("active"));
      this.classList.add("active");
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
