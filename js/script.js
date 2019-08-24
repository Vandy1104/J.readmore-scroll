console.log('My Javascript is working');
$('.morepara').hide();
$('.Rbtn').show();
$('.Lbtn').hide();
$(document).ready(function(){
  $('.Rbtn').click(function(){
    $('.morepara').show();
    $('.Lbtn').show();
    $(this).hide();
  });

  $('.Lbtn').click(function(){
    $('.morepara').hide();
    $('.Rbtn').show();
    $(this).hide();
  });
$('.Rbtn').click(function(){
  $('.morepara').toggle();
});
$('.Rbtn').click(function(){
$('.morepara').slideToggle(500);
});
$('#variables').click(function(){
  $('html,body').animate({
    scrollTop: $('.morepara').offset().top+100},1000);
  });
});
