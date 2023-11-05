$(document).ready(function(){
	$('#events').owlCarousel({
	    loop:true,
	    margin:0,
	    items:1,
	    nav:false
	});
	$('#testimonials').owlCarousel({
		loop:true,
	    margin:10,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
	            nav:false
	        },
	        600:{
	            items:2,
	            nav:false
	        },
	        1000:{
	            items:3,
	            nav:false
	        }
	    }
	});

	$("#portfolio").magnificPopup({
        delegate: "a",
        type: "image",
        tLoading: "Loading image #%curr%...",
        mainClass: "mfp-img-mobile",
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });
	$('#play-video').magnificPopup({
		type: 'iframe'
	});
});