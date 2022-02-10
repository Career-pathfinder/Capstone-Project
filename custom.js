$(document).ready(function () {

	$('.card_body ul.tabs li').click(function () {
		var tab_id = $(this).attr('data-tab');

		$('.card_body ul.tabs li').removeClass('current');
		$('.card_body .tab-content').removeClass('current');

		$(this).addClass('current');
		$("#" + tab_id).addClass('current');
	});


	$('#vertical_tab_nav > ul li').click(function () {
		var tab_id = $(this).attr('data-tab');

		$('#vertical_tab_nav > ul li').removeClass('selected');
		$('.schedule_list_content article').removeClass('selected');

		$(this).addClass('selected');
		$("#" + tab_id).addClass('selected');
	});

	//emr listing accordian
	$('.emr_list li:nth-child(1) .accr_head').addClass('active');
	$('.emr_list li:nth-child(1) .accr_data').slideDown();	
	$('.emr_list .accr_head').on('click', function() {
		if($(this).hasClass('active')) {
		  $(this).siblings('.accr_data').slideUp();
		  $(this).removeClass('active');
		}
		else {
		  $('.accr_data').slideUp();
		  $('.emr_list .accr_head').removeClass('active');
		  $(this).siblings('.accr_data').slideToggle();
		  $(this).toggleClass('active');
		}
	});   
	//faq accordian
	$('.faq_list faq_tab:nth-child(1) .faq_head').addClass('active');
	$('.faq_list faq_tab:nth-child(1) .faq_body').slideDown();	
	$('.faq_list .faq_head').on('click', function() {
		if($(this).hasClass('active')) {
		  $(this).siblings('.faq_body').slideUp();
		  $(this).removeClass('active');
		}
		else {
		  $('.faq_body').slideUp();
		  $('.faq_list .faq_head').removeClass('active');
		  $(this).siblings('.faq_body').slideToggle();
		  $(this).toggleClass('active');
		}
	});   



	// login/signup slider
	$('.login_slider .carousel-inner').slick({
		dots: true,
		infinite: false,
		arrows:false,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
	  });
})