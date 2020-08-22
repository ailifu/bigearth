// 移动端下拉
if ($(window).width() < 768) {
  $(".nav h5").click(function(e) {
    if($(this).parent().children(".nav_sub").is(":hidden")){
      $(this).parent().children(".nav_sub").slideDown();
        $(this).addClass("open");
    }else{
      $(this).parent().children(".nav_sub").slideUp();
        $(this).removeClass("open");
    }
      
  });	
  $(".nav_list_img").click(function(e) {
     $(".nav").slideDown();
   $(this).hide();
   $(".nav_close").show();
  });
  $(".nav_close").click(function(e) {
     $(".nav").slideUp();
   $(this).hide();
   $(".nav_list_img").show();
  });	
}
//首页焦点图
var mySwiperFocus;
if($('#swiper_container_top_Focus').length>0){
mySwiperFocus = new Swiper('#swiper_container_top_Focus',{
				loop:true,
				calculateHeight : true,
				speed:1000,
				autoplay:5000,
				autoplayDisableOnInteraction : false,
				pagination: '.pagination',
				grabCursor: true,
                paginationClickable: true	,
				resizeReInit : true			
								
})
$('.m_index_focus .swiper-button-prev').on('click', function(e){
    e.preventDefault()
    mySwiperFocus.swipePrev()
  })
  $('.m_index_focus .swiper-button-next').on('click', function(e){
    e.preventDefault()
    mySwiperFocus.swipeNext()
  })
}

var newsSwiper;
if($('#news_swiper').length>0){
newsSwiper = new Swiper('#news_swiper', {
      slidesPerView: 4,
	  loop:true,
	  calculateHeight : true,
	  resizeReInit : true
});
$('#swiper-button-prev').on('click', function(e){
    e.preventDefault()
    newsSwiper.swipePrev()
})
$('#swiper-button-next').on('click', function(e){
    e.preventDefault()
    newsSwiper.swipeNext()
})
}

var newsSwiper2;
if($('#news_swiper2').length>0){
newsSwiper2 = new Swiper('#news_swiper2', {
      slidesPerView: 4,
	  loop:true,
	  calculateHeight : true,
	  resizeReInit : true
});
$('#swiper-button-prev2').on('click', function(e){
    e.preventDefault()
    newsSwiper2.swipePrev()
})
$('#swiper-button-next2').on('click', function(e){
    e.preventDefault()
    newsSwiper2.swipeNext()
})
}

var newsSwiper3;
if($('#news_swiper3').length>0){
var newsSwiper3 = new Swiper('#news_swiper3', {
      slidesPerView: 4,
	  loop:true,
	  calculateHeight : true,
	  resizeReInit : true
});
$('#swiper-button-prev3').on('click', function(e){
    e.preventDefault()
    newsSwiper3.swipePrev()
})
$('#swiper-button-next3').on('click', function(e){
    e.preventDefault()
    newsSwiper3.swipeNext()
})
}