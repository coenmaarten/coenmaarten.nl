window.onscroll = function() {stickynav()};
  var navbar = document.getElementById("site-nav");
  var main = document.getElementById('main');
  var sticky = navbar.offsetTop;

function stickynav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    main.classList.add("main-fix");
  } else {
    navbar.classList.remove("sticky");
    main.classList.remove("main-fix");
  }
}
