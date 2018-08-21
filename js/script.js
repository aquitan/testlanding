

$(document).ready(function(){
	var startBtn = $('.start');
	var modalWindow = $('#modal');
	var closeModal = $('.cross');
	var leaveOrder = $('.solution-row__btn');

/*Modal fadeIn - fadeOut*/
	startBtn.on('click', function() {
		modalWindow.fadeIn(500);
		$('body').addClass('isLock');
	});

	leaveOrder.on('click', function() {
		modalWindow.fadeIn(500);
	});

	closeModal.on('click', function() {
		modalWindow.fadeOut(500);
		$('body').removeClass('isLock');
	});


/*Click light scroll down*/
	$('.header-bottom__arrow a').click(function(){ 
		console.log('clicked');
	var scrollEl = $(this).attr('href'); 
	    if ($(scrollEl).length != 0) { 
	    $('html, body').animate({ scrollTop: $(scrollEl).offset().top }, 1000); 
	    }
	    return false; 
	});

/*FadeIn Blocks*/

	$(window).scroll(function(){
	if($(window).scrollTop()>1000){
	$('.help-item').fadeIn(2000)
	}

	});

	$(window).scroll(function(){
	if($(window).scrollTop()>3000){
	$('.cases-block__item').fadeIn(2000)
	}

	});




/*Form validation*/
	$('.submit-btn').on('click', function() {
		if ($('input').val().length==0) {
			$('.forms-row__input:not(:last-child)').addClass('input-err');
		} else {
			$('.forms-row__input:not(:last-child)').addClass('input-grant');
		}

		if ($('textarea').val().length==0) {
			$('textarea').addClass('input-err');
		} else {
			$('textarea').addClass('input-grant');
		}
		
	})

/*Masked input*/
	

	
});
/*Sticky Menu*/
	$(document).ready(function() {
		

		$(window).scroll(function() {
			if($(this).scrollTop() > 50 ) {
				$('.header-sticky').fadeIn(10);
				$('.header-top').addClass('header-fade ');
			} else if ($(this).scrollTop() < 50 ) {
				$('.header-sticky').fadeOut(10);
				$('.header-top').removeClass('header-fade ');
			};
		});	
	});