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
$(document).ready(function(){
    var $win = $(window);

    $('div.background').each(function(){
        var scroll_speed = 10;
        var $this = $(this);
        $(window).scroll(function() {
            var bgScroll = -(($win.scrollTop() - $this.offset().top)/ scroll_speed);
            var bgPosition = 'center '+ bgScroll + 'px';
            $this.css({ backgroundPosition: bgPosition });
        });
    });
});
