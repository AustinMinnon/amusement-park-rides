$(document).ready(function(){
  var height = prompt("how tall are you? /(inches)");
  if (height <= 36){
    $(".short").addClass("highlighted");
  }
    else if (height > 36 && height < 84) {
      $(".tall, .short").addClass("highlighted");
    }
    else{
      $(".tooTall").addClass("highlighted");
    }
});
