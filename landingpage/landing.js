// Landing Page JS – SkillSwap
console.log("Landing page loaded");

document.addEventListener("DOMContentLoaded", () => {
  const getStartedBtns = document.querySelectorAll(".primary");
  const browseBtns = document.querySelectorAll(".secondary");
  const navLinks = document.querySelectorAll(".navbar a");

  getStartedBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      window.location.href = "../signuppage/signup.html";
    });
  });

  browseBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      window.location.href = "../loginpage/login.html";
    });
  });

  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      const text = link.innerText.toLowerCase();

      if (text.includes("login")) {
        e.preventDefault();
        window.location.href = "../loginpage/login.html";
      }

      if (text.includes("sign")) {
        e.preventDefault();
        window.location.href = "../signuppage/signup.html";
      }
    });
  });
});

// Optional scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (!navbar) return;

  navbar.style.background =
    window.scrollY > 50 ? "rgba(0,0,0,0.4)" : "transparent";
});
