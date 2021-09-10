$(function(){
    //menu down/up
    $('#head > .gnb > ul > li').on('mouseover',function(){        
        $(this).find('.submenu').stop().slideDown();
    });
    $('#head > .gnb > ul > li').on('mouseout',function(){        
        $(this).find('.submenu').stop().slideUp();
    });

    //slide fade in/out
    let curPos = 0;
    setInterval(function(){
        //이미지 fade in, out
        if( curPos < 2 ){
            curPos++;
        }else{
            curPos = 0;
        }
        // console.log( "image index = " , curPos );
        $('.slideImg').eq(curPos).siblings().fadeOut();
        $('.slideImg').eq(curPos).fadeIn();
    },3000);

    //contents tab
    $('#content > .notice > h2').on('click', function(){
        //on class remove
        $('#content > .notice > h2').removeClass('on');
        $('#content > .notice > ul').removeClass('on');
        //class add
        $(this).addClass('on');
        $(this).next('ul').addClass('on');
    });

    //modal
    $('#content .tab_notice li').eq(0).on('click', function(){
        $('#modal').fadeIn();
    });
    $('#modal .modal_btn').on('click',function(){
        $('#modal').fadeOut();
    });

});