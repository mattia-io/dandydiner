
// Navbar fades in after 700px

$(function(){
  $('.navbar').hide();
  $(window).scroll(function(){
    if($(this).scrollTop() >= 800){
      $('.navbar').fadeIn();
    } else {
      $('.navbar').fadeOut();
    }
  });

});


// Hamburger Animation

  var hamburger = $(".hamburger");
  hamburger.on("click", function(e) {
    hamburger.toggleClass("is-active");
    // Do something else, like open/close menu
  });


  // Opens submenu


    $('.hamburger').on('click', function(){
      $('.mobile-item').toggleClass('showing');
    });
