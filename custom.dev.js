"use strict";

$(document).ready(function () {
  // slick slider or login/signup
  $('.login_slider .carousel-inner').slick({
    dots: true,
    infinite: false,
    arrows: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000
  });
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
  }); //emr listing accordian

  $('.emr_list .accr_head .expand-button').on('click', function () {
    $('.accr_head').removeClass('active');
    $('.accr_data').removeClass('active').slideUp();
    $(this).parent('.accr_head').addClass('active').siblings('.accr_data').addClass('active').slideDown();
  });
});