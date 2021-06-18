 //------------스와이퍼 슬라이드-------------

 var swiper = new Swiper(".mySwiper", {
     slidesPerView: 4,
     spaceBetween: 30,
     scrollbar: {
         el: ".swiper-scrollbar",
         //          hide: true,
     },
 });

 //------------스와이퍼 슬라이드 반응형-------------

var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1, //640~1024 해상도 외 레이아웃 뷰 개수
      spaceBetween: 10, //위 slidesPerview 여백
      breakpoints: { //반응형 조건 속성
        640: { //640 이상일 경우
          slidesPerView: 2, //레이아웃 2열
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
      }
});
 //------------롤 이미지-------------

 var rollLeft = 0;
 var first = 1;
 var last;
 var imgCnt = 0;
 var $img = $(".RollDiv img");
 var $first;
 var $last;

 $img.each(function () {
     $(this).css("left", rollLeft);
     rollLeft += $(this).width() + 30;
     $(this).attr("id", "roll" + (++imgCnt));
 });

 if (imgCnt > 6) {

     last = imgCnt;
     setInterval(function () {

         $img.each(function () {
             $(this).css("left", $(this).position().left - 1);
         });
         $first = $("#roll" + first);
         $last = $("#roll" + last);
         if ($first.position().left < -500) {
             $first.css("left", $last.position().left + $last.width() + 5);
             first++;
             last++;
             if (last > imgCnt) {
                 last = 1;
             }
             if (first > imgCnt) {
                 first = 1;
             }
         }
     }, 15);
 };


 //------------맨위로 스르륵 버튼-------------

 $(window).scroll(function () {
     if ($(this).scrollTop() > 200) {}
 });

 $('.top-btn').click(function () {
     $('html, body').animate({
         scrollTop: 0
     }, 500);
     return false;
 });




 //------------맨아래로 스르륵 버튼-------------

 var scrollHeight = $(document).height();
 $('.bottom-btn').click(function () {
     $('body , html').animate({
         scrollTop: scrollHeight
     }, 800);
     return false;
 });








 //$(".bottom-btn").click(function(){
 //	$('html, body').scrollTop( $(document).height() );
 //});
