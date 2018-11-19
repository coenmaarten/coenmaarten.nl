window.onscroll = function() {stickynav()};
  var navbar = document.getElementById("site-nav");
  var canvasheight = document.getElementById("background_canvas");
  var main = document.getElementById('main');
  var sticky = canvasheight.offsetHeight;

function stickynav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    main.classList.add("main-fix");
  } else {
    navbar.classList.remove("sticky");
    main.classList.remove("main-fix");
  }
}
