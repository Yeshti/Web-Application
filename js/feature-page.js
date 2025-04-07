// Example: focus visual helper for form
document.addEventListener("DOMContentLoaded", () => {
    const inputs = document.querySelectorAll("input");
    inputs.forEach(input => {
      input.addEventListener("focus", () => {
        input.style.outline = "2px solid #004080";
      });
      input.addEventListener("blur", () => {
        input.style.outline = "none";
      });
    });
  });
  