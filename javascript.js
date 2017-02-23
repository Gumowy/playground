$(document).on("scroll", function(){

  if($(document).scrollTop()>100){

    $("header").removeClass("large").addClass("small");
}
    else {

      $("header").removeClass("small").addClass("large");
    }

});



$(document).ready(function(){
$("ul#hamburger_menu").hide();

    $("button").click(function(){
        $("ul#hamburger_menu").toggle();

    });
});

$(document).ready(function(){

    $("li.hamburger_list").click(function(){
        $("ul#hamburger_menu").toggle();

    });
});


$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
