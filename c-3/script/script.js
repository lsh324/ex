(function(){
  $('.menu li').on('mouseover',function(){        
    $(this).find('.submenu').stop().slideDown();
  });
  $('.menu li').on('mouseout',function(){        
    $(this).find('.submenu').stop().slideUp();
  });
  let curPos = 0;
    setInterval(function(){
        if( curPos < 2 ){
            curPos++;
        }else{
            curPos = 0;
        }
        $('.slideimg').animate({
          right:curPos*100+'%'},1000);
          // $('.container').animate({
          // right:curPos*100+'%'},1000);
    },3000);

        //팝업
        $('#contents .notice .notice_list li').eq(0).on('click', function(){
          $('#popup').fadeIn();
      });
      $('#popup .popup_btn').on('click',function(){
          $('#popup').fadeOut();
      });
})();