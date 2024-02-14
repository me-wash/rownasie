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

  (() => {
    // Blur the content when the menu is open
    const cbox = document.getElementById("menu-trigger");

    cbox.addEventListener("change", function () {
      const area = document.querySelector(".wrapper");
      this.checked
        ? area.classList.add("blurry")
        : area.classList.remove("blurry");

        const area2 = document.querySelector(".parallax");
        this.checked
          ? area2.classList.add("blurry")
          : area2.classList.remove("blurry");
    });
  })();

  $(document).ready(function () {
    // Initial setup: show the Board group by default
    showGroup('board');

    // Handle tab button click
    $('.tab-btn').on('click', function () {
      const group = $(this).data('group');
      showGroup(group);
    });

    function showGroup(group) {
      // Hide all columns
      $('.column').removeClass('active');

      // Show only columns with the selected group
      $(`.column[data-group="${group}"]`).addClass('active');
    }
  });
  

