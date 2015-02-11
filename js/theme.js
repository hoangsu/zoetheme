$(document).ready(function() {
	$(".home-banner .flexslider").flexslider({
    	directionNav: false,
    	controlNav:false
    });
    $('.nav-reveal .prev').on('click', function(){
	    $('.home-banner .flexslider').flexslider('prev')
	    return false;
	})

	$('.nav-reveal .next').on('click', function(){
	    $('.home-banner .flexslider').flexslider('next')
	    return false;
	})
})