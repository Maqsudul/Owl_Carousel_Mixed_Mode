$(document).ready(function(){
  $(".owl").owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      autoplayTimeout: 6000,
      dots: true,
      autoplayHoverPause: true,
      smartSpeed: 1000
  });
    $(".owl-carousel").owlCarousel({
      items: 3,
      loop: true,
      autoplay: true,
      autoplayTimeout: 4000,
      dots: true,
      autoplayHoverPause: true,
      smartSpeed: 500
  });
});