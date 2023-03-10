jQuery(document).ready(function(){
	$(window).load(function(){
		$("#preloader").fadeOut(1000);
	});

	$('.marquee').marquee({
		duration:         10000,
		gap:              12,
		loop:             -1,
		delayBeforeStart: 0,
		direction:        'left',
		pauseOnHover:     false,
		duplicated:       true
	});
  
  
});





