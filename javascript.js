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



// handle links with @href started with '#' only
$(document).on('click', 'a[href^="#"]', function(e) {
    // target element id
    var id = $(this).attr('href');

    // target element
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }

    // prevent standard hash navigation (avoid blinking in IE)
    e.preventDefault();

    // top position relative to the document
    var pos = $id.offset().top;

    // animated top scrolling
    $('body, html').animate({scrollTop: pos});
});
