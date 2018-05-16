
$(function() {
    var header = $(".navbar");
  
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            header.addClass("scrolled");
        } else {
            header.removeClass("scrolled");
        }
    });

    $(document).ready(function(){
       
    });
})

// function update(){
//   document.getElementById("counter").innerHTML =  countdown( new Date(2020, 0, 1) ).toString();
//   // animationFrame(update());
//   update();
// }

// update();

