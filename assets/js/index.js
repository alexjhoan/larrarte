$(document).ready(function() {
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


