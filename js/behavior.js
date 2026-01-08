const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");
const options = {
  rootMargin: "-25% 0px -75% 0px",
  threshold: 0
};
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute("id");
      navLinks.forEach((link) => link.classList.remove("active"));
      document.querySelector(`nav a[href="#${id}"]`).classList.add("active");
    }
  });
}, options);
sections.forEach((section) => {
  observer.observe(section);
});
