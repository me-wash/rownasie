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

document.addEventListener('DOMContentLoaded', function() {
  // Initial setup: show the Board group by default
  showGroup('board');

  // Handle tab button click
  var tabBtns = document.querySelectorAll('.tab-btn');
  tabBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      var group = this.getAttribute('data-group');
      showGroup(group);
      tabBtns.forEach(function(otherBtn) {
        if (otherBtn !== btn) {
          otherBtn.classList.remove('active');
        }
      });
      btn.classList.toggle('active');
    });
  });

  function showGroup(group) {
    // Hide all columns
    var columns = document.querySelectorAll('.column');
    columns.forEach(function(column) {
      column.classList.remove('active');
    });

    // Show only columns with the selected group
    var selectedColumns = document.querySelectorAll(`.column[data-group="${group}"]`);
    selectedColumns.forEach(function(selectedColumn) {
      selectedColumn.classList.add('active');
    });
  }
});



