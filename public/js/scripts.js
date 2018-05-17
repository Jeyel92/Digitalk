
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

 
});

(function() {
	function byId(id) {
		return document.getElementById(id);
	}

	function formatTens(n) {
		// format integers to have at least two digits
		return (n < 10) ? '0'+n : ''+n;
	}

	

	
	
	var DEMO_MS = 1526523900000;
		

	

	function update() {

		var start = new Date(2018, 06, 26, 09, 00, 00, 000),
			ts = countdown(start, null, -2018, 11, 0);

        var counter = byId('counter'),	
            msg =  formatTens(ts.days) + " dias " + formatTens(ts.hours) + ":" + formatTens(ts.minutes) + ":" + formatTens(ts.seconds);
		

		if (start.getTime() <= DEMO_MS) {			
            msg = "00:00:00";
		}

		counter.innerHTML = msg;
	

		

		requestAnimationFrame(update);
	}
	update();
})();


