var story = [
	"It all started in the year of 2012.",
	"Yeah, it was amazing!",
	"Really, it was...",
];

/* the initial $(function(){} prevents jQuery code running before the whole document is loaded */
$(function(){

	var items = [
		"It all started in the year of 2012.",
		"Yeah, it was amazing!",
		"Really, it was...",
	],
        $text = $('.intro-container h1'),
        delay = 3;
    
    $(".btn-start").click(function(){

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
		                // cut the loop!  
		            }
		            $text.dequeue();
		        });
		    });
		}

		loop(delay);

    });
});

/*
$(".btn-start").click(function(){
		$(".btn-start").animate({opacity:0},function(){
		    $(this).animate({opacity:0});
		})
		for (i = 0; i < story.length; i++) {
		    $(".intro-container").find("h1").animate({opacity:0},function(){
			    $(this).delay(400).text(story[i]).animate({opacity:1}, 1500);
			})
		}	
	});
*/