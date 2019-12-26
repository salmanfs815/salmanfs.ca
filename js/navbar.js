let mainNav = document.getElementById('nav-menu');
let navBarToggle = document.getElementById('nav-menu-toggle');

navBarToggle.addEventListener('click', function () {
  mainNav.classList.toggle('active');
});
