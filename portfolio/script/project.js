const imageWidth = 60;
const slideSpeed = 200;
const slideList = document.querySelector('.cardwrap');
const slideObj = document.querySelectorAll('.card');
const btnPrev = document.querySelector('.slide-btn-prev');
const btnNext = document.querySelector('.slide-btn-next');

const slideLEN = slideObj.length;
let curIndex = 0;

function clickBtnNext(){
  // if(curIndex >= slideLEN-1) {
  //   curIndex = slideLEN-1;
  // }
  //   curIndex++;
  //   btnPrev.removeAttribute('disabled');
  //   slideList.style.transition = '300ms';
  //   slideList.style.transform = 'translateX(-' + (imageWidth *curIndex+1) + 'vw)';

  // if(curIndex === slideLEN-1){
  //   btnNext.setAttribute('disabled', 'true');
  // }

  if( curIndex < slideLEN ){
    slideList.style.transition = slideSpeed + 'ms';
    slideList.style.transform = 'translateX(-' + imageWidth*(curIndex+1) + 'vw)';
    curIndex++;
  }
  if( curIndex === slideLEN){
    //slide_list 위치 이동 : 이미지 첫번째가 보여지도록
    setTimeout(function(){
      slideList.style.transition = '0ms';
      slideList.style.transform = 'translateX(-' + 0 + 'vw)';
    },slideSpeed);
    curIndex = 0;
  }

}

function clickBtnPrev(){
//   curIndex--;
//   if(curIndex < 0) {
//     curIndex = 0;
//   }
//     btnNext.removeAttribute('disabled');
//     slideList.style.transform = '300ms';
//     slideList.style.transform = 'translateX(-' + (imageWidth * curIndex+1) +'vw)';

// if(curIndex === 0){
//   btnPrev.setAttribute('disabled','true');
// }
  if( curIndex >= 0 ){
    //translate를  이용해서 이동
    slideList.style.transition = slideSpeed + 'ms';
    if (curIndex > 0)
      slideList.style.transform = 'translateX(-' + imageWidth*(curIndex-1) + 'vw)';
    else
      slideList.style.transform = 'translateX(' + imageWidth + 'vw)';

    curIndex--;

  }
  if( curIndex === -1 ){
    //slide_list 위치 이동 : 이미지 마지막이 보여지도록
    setTimeout(function(){
      slideList.style.transition = '0ms';
      slideList.style.transform = 'translateX(-' + imageWidth*(slideLEN-1) + 'vw)';
    },slideSpeed);
    curIndex = slideLEN-1;
  }

}

// 버튼의 이벤트 처리
function btnEvent(){
  btnPrev.addEventListener('click', clickBtnPrev );
  btnNext.addEventListener('click', clickBtnNext );
}

function init(){
  btnEvent(); //버튼 이벤트 함수 호출
  //slide_list width 설정
  slideList.style.width = (imageWidth * slideLEN) + 'vw';
  slideList.style.transform = 'translate(0px)';
}

init();
