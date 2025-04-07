document.addEventListener("DOMContentLoaded", () => {
    // MOBILE NAV TOGGLE
    const toggleBtn = document.getElementById("menu-toggle");
    const navLinks = document.querySelector(".nav-links");
  
    if (toggleBtn && navLinks) {
      toggleBtn.addEventListener("click", () => {
        navLinks.classList.toggle("open");
      });
    }
  
    // SCROLL TO TOP BUTTON
    const scrollTopBtn = document.getElementById("scroll-top");
  
    if (scrollTopBtn) {
      scrollTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
  
      window.addEventListener("scroll", () => {
        scrollTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
      });
    }
  });
  