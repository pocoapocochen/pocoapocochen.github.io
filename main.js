

$(document).ready(function(){

  //event handler: click and smooth scrolling
  $('.smooth').click(function() {
    var sectionTo = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(sectionTo).offset().top
    }, 1000);
  });
  

  // event handler : scroll down and change navbar's background color
  $(document).scroll(function(){
    var $nav = $('#mainNavbar');
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });

 
}); // end document ready

