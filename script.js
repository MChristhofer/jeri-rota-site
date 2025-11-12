// 🔷 ATIVAR LINK ATUAL NO MENU AO ROLAR A PÁGINA
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".main-nav .nav-link");

  function updateActiveLink() {
    let currentSectionId = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 150;
      const sectionHeight = section.offsetHeight;

      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
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

  window.addEventListener("scroll", updateActiveLink);
  updateActiveLink();
});

// 🔷 MENU MOBILE (ABRIR/FECHAR)
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const mobileNav = document.querySelector(".mobile-nav");

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener("click", function () {
      mobileNav.classList.toggle("show");
    });

    // Fecha ao clicar em um link
    const mobileLinks = mobileNav.querySelectorAll("a");
    mobileLinks.forEach((link) => {
      link.addEventListener("click", function () {
        mobileNav.classList.remove("show");
      });
    });
  }
});

// 🔷 DESTACAR O LINK ATIVO NO MENU MOBILE
document.addEventListener("DOMContentLoaded", function () {
  const mobileLinks = document.querySelectorAll(".mobile-nav a");

  mobileLinks.forEach((link) => {
    link.addEventListener("click", function () {
      mobileLinks.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");
    });
  });
});

// 🔷 BOTÃO "VOLTAR AO TOPO"
const btnTop = document.getElementById("btnTop");

window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    btnTop.style.display = "block";
  } else {
    btnTop.style.display = "none";
  }
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// 🔷 ANIMAÇÃO FADE-UP NOS CARDS
document.addEventListener("DOMContentLoaded", function () {
  const fadeElements = document.querySelectorAll(".fade-up");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  fadeElements.forEach((el) => observer.observe(el));
});
