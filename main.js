// navabar background color
$(window).scroll(function(){
 
    $('.navbar').toggleClass("nav-bg",$(window).scrollTop() > 40);
   
});
