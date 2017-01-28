/* the initial $(function(){} prevents jQuery code running before the whole document is loaded */
$(function(){

	var clicks = true;

	var items = [
		"It all started in the summer of 2012 in Berlin.",
		"As a kinda joke I tried my first dancing workshop.",
		"It was a contemporary dance.",
		"It was weird, but amazingly weird. I loved it.",
		"It felt like I found a missing piece of myself.",
		"Emotions, compassion, happiness ...",
		"Wanna have a look where it got me?"
	],
        $text = $('.intro-container h1'),
        delay = 1;
    
    $(".btn-start").click(function(){

  		if (clicks) {
  		   /* first remove the button */
			$(".btn-start").animate({opacity:0}, (delay*200),function(){
			    $(this).animate({opacity:0});
			})
	
			/* iterate through the items array to display the whole story */
			function loop(delay) {
			    $.each(items, function (i, elm) {
			    	// sync the first transition with the button
			    	if (i == 0) {
			    		$text.delay(delay*50).fadeOut();
			    	}	
			    	else {
			    		$text.delay(delay*1E3).fadeOut();	//1E3 == 1000
			    	}
			        
			     	$text.delay(delay*400)	// delay transition between texts
			        $text.queue(function(){
			            $text.html(items[i]);
			            $text.dequeue();
			        });
			        $text.fadeIn();
			        $text.queue(function(){
			            if (i == items.length -1) {
			            	$(".btn-start").animate({opacity:1}, 1500).find("h2").text("Browse dancing portfolio")
			            }
			            $text.dequeue();
			        });
			    });
			}
	
			loop(delay);

  		} else {
  		   window.location = "./portfolio.html" + this.id;
  		}
  		// switch for the second click
  		clicks = !clicks;

    });

});