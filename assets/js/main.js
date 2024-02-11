document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const lamp = document.getElementById("mode");

  const toggleTheme = () => {
      const currentTheme = body.getAttribute("data-theme");
      if (currentTheme === "dark") {
          body.setAttribute("data-theme", "light");
          localStorage.setItem("theme", "light");
      } else {
          body.setAttribute("data-theme", "dark");
          localStorage.setItem("theme", "dark");
      }
  };

  lamp.addEventListener("click", toggleTheme);
  initTheme(localStorage.getItem("theme"));
  setTimeout(() => body.classList.remove("notransition"), 75);
});

const initTheme = (state) => {
  const body = document.body;
  if (state === "dark") {
      body.setAttribute("data-theme", "dark");
  } else {
      body.removeAttribute("data-theme");
  }
};

window.addEventListener('scroll', function() {
    var header = document.querySelector('.navbar-wrapper');
    var parallaxHeight = document.querySelector('.parallax').clientHeight;
    var navbarHeight = document.querySelector('.navbar').clientHeight;

  
    if (window.scrollY > (parallaxHeight - (0.9 * navbarHeight))) {
      header.classList.add('scrolled'); // Add a class to change the styling
    } else {
      header.classList.remove('scrolled'); // Remove the class if scrolled back to the top
    }
  });
  

