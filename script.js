/* checks media size to set propper 'top' value */
/* @return value: [top height when story is told, top height for the 'go to portfolio' btn] */
function checkMedia() {
    if (window.matchMedia('(min-width: 767px)').matches) {
        return [30, 26];
    } else {
        return [30, 20];	// for mobile devices
    }
}


/* the initial $(function(){} prevents jQuery code running before the whole document is loaded */
$(function(){

	var clicks = true;

	var items = [
		"It all started in the summer of 2012 in Berlin.",
		/*"As a kinda joke I tried my first dancing workshop.",
		"It was a contemporary dance.",
		"It was weird, but amazingly weird. I loved it.",
		"It felt like I found a missing piece of myself.",*/
		"Emotions, compassion, happiness ...",
		"Wanna have a look where it has got me since then?"
	],
        $text = $('.intro-container h1'),
        delay = 0.1;

    var top = checkMedia();	// 'top' position in CSS


    // remove bug
	$(".btn-start").removeAttr("disabled");

	// hide "skip" link
	$(".skip").hide();

    // slowly animate the very intro
    $(".intro-container").hide();
    $(".intro-container").fadeIn(1.5*1E3);
    
    $(".btn-start").click(function(){

  		if (clicks) {

  		   /* first hide and disable the button */
			$(".btn-start").animate({opacity:0}, (delay*200),function(){
			    $(this).animate({opacity:0}).prop("disabled", true);
			})
	
			/* show "skip" link */
			$(".skip").delay(delay*1E3).fadeIn();

			/* iterate through the items array to display the whole story */
			function loop(delay) {
			    $.each(items, function (i, elm) {
			    	// sync the first transition with the button
			    	// use callback function to center the story text
			    	if (i == 0) {
			    		$text.delay(delay*50).fadeOut(function() {
			    			$(".intro-container").css("top", top[0] + "vh");
			    		});
			    	}	
			    	else {
			    		$text.delay(delay*1E3).fadeOut();	//1E3 == 1000
			    	}
			    
			     	$text.delay(delay*400)	// delay transition between texts
			        $text.queue(function(){
			            $text.html(items[i]);
			            $text.dequeue();
			        });

			        if (i !== items.length -1) {
			        	$text.fadeIn();
			        }
			        
			        $text.queue(function(){
			            if (i == items.length -1) {
			            	/* show button again and hide "skip" link */
			            	$(".intro-container").css("top", top[1] + "vh");
			            	$text.fadeIn(1500);
			            	$(".btn-start").removeAttr("disabled");  
			            	$(".btn-start").animate({opacity:1}, 1500).find("h2")
			            	.text("Browse dancing portfolio")
			            	$(".skip").fadeOut();
			            }
			            $text.dequeue();
			        });
			    });
			}
	
			loop(delay);

  		} else {
  		   window.location = "./portfolio.html" + this.id;
  		   clicks = true;	// to avoid going back to story when we go page back
  		}
  		// switch for the second click
  		clicks = !clicks;

    });



});