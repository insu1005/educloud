$(document).ready(function(){
  $('.big_visual').slick({
    dots: true,
    infinite: true,
    speed: 300,
    resizing: true,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    fade: true
  });
  $('.play').click(function(){
    $('.big_visual').slick('slickPlay');
  });
   
  $('.stop').click(function(){
    $('.big_visual').slick('slickPause');
  });


  // $('.business-visual').slick({
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  //   infinite: true,
  //   speed: 300,
  //   slidesToShow: 1,
  //   centerMode: true,
  //   variableWidth: true
  // });

  // $('.business-visual-mobile').slick({
  //   autoplay: true,
  //   autoplaySpeed: 3000,
  //   infinite: true,
  //   speed: 300,
  //   slidesToShow: 1,
  //   adaptiveHeight: true
  // });
});