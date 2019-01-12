$(document).ready(function(){
	$('.welcome').css('display', 'flex');
	$(window).on('scroll', function(){
		if($(window).scrollTop() == 0){
			$('.logo').css({'transform': 'rotate(-90deg)', 'top': '0px', 'left': '33px'});
			$('.sidebar').css('bottom', '-160px');
			$('.nav-numbers').css('right', '-70px');
			$('.box-1').fadeOut();
			$('.box-2').fadeOut();
			$('.box-3').fadeOut();
			$('.welcome').css('display', 'flex');
		} else {
			$('.logo').css({'transform': 'rotate(0deg)', 'top': '10px'});
			$('.sidebar').css('bottom', '0px');
			$('.nav-numbers').css('right', '25px');
			$('.welcome').hide();
		}
	 	if($(window).scrollTop() >= 100 && $(window).scrollTop() < 200) {
			$('.box-1').css('display', 'flex');
			$('.box-2').fadeOut();
			$('.box-3').fadeOut();
		} else if($(window).scrollTop() >= 200 && $(window).scrollTop() < 300) {
			$('.box-2').css('display', 'flex');
			$('.box-3').fadeOut();
			$('.box-1').fadeOut();
		} else if($(window).scrollTop() >= 300 && $(window).scrollTop() < 400) {
			$('.box-3').css('display', 'flex');
			$('.box-2').fadeOut();
			$('.box-1').fadeOut();
		}
		$('.nav-1').click(function(){
			$('.box-1').css('display', 'flex');
			$('.box-2').fadeOut();
			$('.box-3').fadeOut();
			$('.welcome').hide();
		});
		$('.nav-2').click(function(){
			$('.box-2').css('display', 'flex');
			$('.box-3').fadeOut();
			$('.box-1').fadeOut();
			$('.welcome').hide();
		});
		$('.nav-3').click(function(){
			$('.box-3').css('display', 'flex');
			$('.box-2').fadeOut();
			$('.box-1').fadeOut();
			$('.welcome').hide();
		});
	});
	$('.welcome-down').on('click', function(){
		$(window).scrollTop(100);
	});
})
