// 移动端下拉
if ($(window).width() < 768) {
  $('.nav h5').click(function (e) {
    if ($(this).next().is(':hidden')) {
      $(this).parent().children('.nav_sub').show();
      $(this).addClass('open');
    } else {
      $(this).parent().children('.nav_sub').hide();
      $(this).removeClass('open');
    }
  });
  $('.nav_list_img').click(function (e) {
    $('.nav').slideDown();
    $(this).hide();
    $('.nav_close').show();
  });
  $('.nav_close').click(function (e) {
    $('.nav').slideUp();
    $(this).hide();
    $('.nav_list_img').show();
  });
}

$('.headtips i').click(function () {
  $('.search').show();
});
$('.search_close').click(function () {
  $('.search').hide();
});



$('.navblock').click(function () {
  if ($('.navigator').is(':hidden')) {
    $(this).addClass('navclosed');
    $('.navigator').show();
  } else {
    $(this).removeClass('navclosed');

    $('.navigator').hide();
  }
});
