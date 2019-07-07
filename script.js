$('.was-made').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
  	breakpoint: 1760,
  	settings: {
  	slidesToShow: 2,
  	slidesToScroll: 2,
  	}
  },
  {
  	breakpoint: 1200,
  	settings: {
  	dots: true,
  	slidesToShow: 2,
  	arrows: false,
  	slidesToScroll: 2,
  	}
  },
  {
  	breakpoint:850,
  	settings: {
  	dots: true,
  	slidesToShow: 1,
  	arrows: false,
  	slidesToScroll: 1,
  	}
  }]
});

$('body').on('click', '.menu', function(){
  	$(this).parents('header').find('#menu').slideToggle();
  	$(this).toggleClass('rotate');

      $("html").toggleClass("fixed");
  });

$(function(){

	const disableScroll = function()
	{
		$('html, body').on('mousewheel', function(){
			return false;
		});
	}

	const enableScroll = function()
	{
		$('html, body').off('mousewheel')
	}

	$(".nav__button")

		.click(function(){
			$('#request-call-container').fadeIn(400, disableScroll);
			$('#request-call-blank').animate({
			}, 400);
	});
		$('#request-call-container').click(function(event){
			if(event.target == this) {
				$(this).fadeOut(400, enableScroll);
				$('#request-call-blank').animate({
			}, 400);
			}
		})
	});

$(function(){

	const disableScroll = function()
	{
		$('html, body').on('mousewheel', function(){
			return false;
		});
	}

	const enableScroll = function()
	{
		$('html, body').off('mousewheel')
	}

	$(".nav__tell-button-2")

		.click(function(){
			$('#request-call-container').fadeIn(400, disableScroll);
			$('#request-call-blank').animate({
			}, 400);
	});
		$('#request-call-container').click(function(event){
			if(event.target == this) {
				$(this).fadeOut(400, enableScroll);
				$('#request-call-blank').animate({
			}, 400);
			}
		})
	});

$(function(){

		const disableScroll = function()
	{
		$('html, body').on('mousewheel', function(){
			return false;
		});
	}

	const enableScroll = function()
	{
		$('html, body').off('mousewheel')
	}
	
	$(".nav__tell-button")

		.click(function(){
			$('#request-call-container').fadeIn(400, disableScroll);
			$('#request-call-blank').animate({
			}, 400);
	});
		$('#request-call-container').click(function(event){
			if(event.target == this) {
				$(this).fadeOut(400, enableScroll);
				$('#request-call-blank').animate({
			}, 400);
			}
		})
	});
$(function(){
  $(".tell-number").mask("8(999) 999-99-99");
});

