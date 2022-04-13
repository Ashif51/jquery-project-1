// navabar background color
$(window).scroll(function(){
 
    $('.navbar').toggleClass("nav-bg",$(window).scrollTop() > 40);
   
});

// Typed animation
var typed = new Typed('#typed', {
    
    strings: [
      'Welcome Here',
      'We Have Years of exprience',
      'Quick Services',
    ],

    typeSpeed: 80,
    backSpeed: 60,
    loop: true,
    showCursor: true,
});

// Make list area
$("#add-item-btn").click(function(){
  var item = $('#list-item').val();
  $('.wish-list-ul').append(`<li> ${item} </li>`);
});
