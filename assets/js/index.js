$(document).ready(function() {
  $('#header').load('assets/components/header.html');
  $('#managementII').load('assets/components/managementII.html');
  $('#contact').load('assets/components/contact.html');
  $('#footer').load('assets/components/footer.html');

  $('body').css('opacity', '1');
});

let offset

if (screen.width > 768){
  offset = 200
} else {
  offset = 0
}

new WOW({offset:offset, scrollContainer: null}).init()

$('.owl-carousel').owlCarousel({
    loop:true,
    items:1,
    margin:0,
    nav:true,
})
$('.owl-table').owlCarousel({
    loop:true,
    items:1,
    margin:0,
    nav:true,
})


if (screen.width < 992){
  $("#carouselcard").addClass("owl-carousel owl-theme")
  $('#carouselcard').owlCarousel({
    loop:false,
    margin:15,
    nav:true,
    dots: false,
    responsive:{
      0:{
        items:1
      },
      575:{
        items:2
      },
    }
  })
}

