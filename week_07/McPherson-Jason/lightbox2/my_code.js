$(document).ready(function(){

$("img").fadeIn();



$(window).load(function(){
   $('#img').fadeIn('slow',function(){
         setTimeout(function(){
            $(this).fadeOut('slow')
         },4000);
   })
});