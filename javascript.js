$(document).on("scroll", function(){

  if($(document).scrollTop()>100){

    $("header").removeClass("large").addClass("small");
}
    else {

      $("header").removeClass("small").addClass("large");
    }

});



$(document).ready(function(){
    $("button").click(function(){
        $("ul#hamburger_menu").toggle();
    });
});
