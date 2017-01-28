/* the initial $(function(){} prevents jQuery code running before the whole document is loaded */
$(function(){
	$(".btn-start").click(function(){
		$(".intro-container").find("h1").animate({opacity:0},function(){
		    $(this).text("new text")
		        .animate({opacity:1});  
		})
		$(".btn-start").animate({opacity:0},function(){
		    $(this).animate({opacity:0});
		})
	});
}); 