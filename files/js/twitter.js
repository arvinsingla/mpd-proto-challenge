(function ($) {

	// Tweet form
	$(".tweet-text").on("keyup change", function(){
		var length = $(this).val().length;
		var remainder = 140 - length;
		$(this).parent().find($(".char-count")).text(remainder);

		if (length > 0) 
			$(this).parent().find(".tweet-send").attr("disabled", false);
		else
			$(this).parent().find(".tweet-send").attr("disabled", true);
		
	});

	$(".tweet-pic").click(function() {
		return false;
	});

	$(".tweet-loc").click(function() {
		return false;
	});


	// Profile
	$("#new-tweet .form-trigger").click(function(){
		$(this).hide();
		$("#new-tweet").find($("form")).show();
		$("#new-tweet").find($("form .new-tweet-box")).focus();
	});

	$("#new-tweet .new-tweet-box").blur(function(){
		$("#new-tweet").find($("form")).hide();
		$("#new-tweet").find(".form-trigger").show();
	});


	// Tweet feed
	$(".tweet-bit").live("mouseenter", function(){
		$(this).find($("a.hidden")).show();
	});

	$(".tweet-bit").live("mouseleave", function(){
		$(this).find($("a.hidden")).hide();
	});


})(jQuery)