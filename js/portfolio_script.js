

$(document).ready(function(){

  //event handler: click    
  $(".navbar-brand, .nav-link").on("click", function() {
    var sectionTo = $(this).attr("href");
    $("html, body").animate({
      scrollTop: $(sectionTo).offset().top
      }, 1200);
  });

 
}); // end document ready

