$(function(){
	$('header h2').click(function(){
		$('html,body').animate({
			scrollTop: $(document).height() - $(window).height()
		}, 1000, 'easeInOutExpo');
	});
	
	$('pre').addClass('prettyprint');
	prettyPrint();
	
	$('[data-analytics-category]').click(function(){
		var $this = $(this),
			category = $this.data('analytics-category'),
			subCategory = $this.data('analytics-subcategory');
		
		_gaq.push(['_trackEvent', 'eventralize', category, subCategory]);
	})
});