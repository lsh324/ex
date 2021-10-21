const imageWidth = 60;
const slideSpeed = 200;
const slideList = document.querySelector('.cardwrap');
const slideObj = document.querySelectorAll('.card');
const btnPrev = document.querySelector('.slide-btn-prev');
const btnNext = document.querySelector('.slide-btn-next');

const slideLEN = slideObj.length;
let curIndex = 0;

function clickBtnNext(){
  curIndex++;
  if(curIndex > slideLEN-1) {
    curIndex = slideLEN-1;
  }  
    btnPrev.style.color = 'rgba(255, 255, 255, 0.8)';
    slideObj[curIndex].classList.add('on');
    slideObj[curIndex-1].classList.remove('on');
    slideList.style.transition = '300ms';
    slideList.style.transform = 'translateX(-' + (imageWidth *curIndex+1) + 'vw)';
  if(curIndex === slideLEN-1){
    btnNext.style.color = 'rgba(255, 255, 255, 0.3)';
  }
}

function clickBtnPrev(){
  curIndex--;
  if(curIndex < 0) {
    curIndex = 0;
  }
    btnNext.style.color = 'rgba(255, 255, 255, 0.8)';
    slideObj[curIndex].classList.add('on');
    slideObj[curIndex+1].classList.remove('on');
    slideList.style.transform = '300ms';
    slideList.style.transform = 'translateX(-' + (imageWidth * curIndex+1) +'vw)';

if(curIndex === 0){
  btnPrev.style.color = 'rgba(255, 255, 255, 0.3)';
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
  btnPrev.style.color = 'rgba(255, 255, 255, 0.3)';
  slideObj[curIndex].classList.add('on');
}

init();