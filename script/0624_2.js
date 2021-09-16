const IMAGE_WIDTH = 300;
const SLIDE_SPEED = 150;
const slide_list = document.querySelector('.slide_list');
const slide_contents = document.querySelectorAll('.slide_contents');
let dot_index = null;

const SLIDE_LEN = slide_contents.length;
let curIndex = 0;

function clickBtnNext(){
  if( curIndex <= SLIDE_LEN-1 ){
    //translate 를 이용해서 이동
    slide_list.style.transition = SLIDE_SPEED + 'ms';
    slide_list.style.transform = 'translateX(-' + IMAGE_WIDTH*(curIndex+2) + 'px)';
  }
  if( curIndex === SLIDE_LEN-1){
    //slide_list 위치 이동 : 이미지 첫번째가 보여지도록
    setTimeout(function(){
      slide_list.style.transition = '0ms';
      slide_list.style.transform = 'translateX(-' + IMAGE_WIDTH + 'px)';
    },SLIDE_SPEED);
    curIndex = -1;
  }
  dot_index[curIndex === -1 ? SLIDE_LEN-1 : curIndex].classList.remove('dot_active');
  curIndex++;
  dot_index[curIndex].classList.add('dot_active');

}
function clickBtnPrev(){
  if( curIndex >= 0 ){
    //translate를  이용해서 이동
    slide_list.style.transition = '300ms';
    slide_list.style.transform = 'translateX(-' + IMAGE_WIDTH*curIndex + 'px)';
  }
  if( curIndex === 0 ){
    //slide_list 위치 이동 : 이미지 마지막이 보여지도록
    setTimeout(function(){
      slide_list.style.transition = '0ms';
      slide_list.style.transform = 'translateX(-' + (IMAGE_WIDTH*SLIDE_LEN) + 'px)';
    },SLIDE_SPEED);
    curIndex = SLIDE_LEN;
  }
  dot_index[curIndex ===  SLIDE_LEN ? 0 : curIndex].classList.remove('dot_active');
  curIndex--;
  dot_index[curIndex].classList.add('dot_active');
}

function btnEvent(){
  const btnNext = document.querySelector('.slide_btn_next');
  const btnPrev = document.querySelector('.slide_btn_prev');
  btnNext.addEventListener('click', clickBtnNext );
  btnPrev.addEventListener('click', clickBtnPrev );
}
function cloneImageNode(){
  const firstNode = slide_list.firstElementChild;
  const lastNode = slide_list.lastElementChild;
  const cloneFirst = firstNode.cloneNode(true);
  const cloneLast = lastNode.cloneNode(true);
  slide_list.appendChild( cloneFirst );
  slide_list.insertBefore( cloneLast, firstNode );
}
function clickDotIndex(){
  //dot_active class 삭제
  const curDot = document.querySelector('.dot_active');
  curDot.classList.remove('dot_active');
  this.classList.add('dot_active');
  //현재 클릭한 dot -> dot_active
  let idxCurDot = Number(this.getAttribute('dot_index'));
  curIndex = idxCurDot;
  slide_list.style.transition = SLIDE_SPEED + 'ms';
  slide_list.style.transform = 'translateX(-' + (IMAGE_WIDTH*(curIndex+1)) + 'px)';
}
function createDot(){
  let dotTag = '';
  for( let i = 0; i<SLIDE_LEN ; i++){
    dotTag +=  '<a href="#" class="dot ';
	  dotTag += (i === curIndex) ? 'dot_active' : '';
  	dotTag += '" dot_index="';
  	dotTag += i;
  	dotTag += '"></a>';
  }
  const dots = document.querySelector('.slide_current_circle');
  dots.innerHTML = dotTag;
  dot_index = document.querySelectorAll('.dot');
  
  for( let obj of dot_index ){
    obj.addEventListener( 'click', clickDotIndex );
  }
}

function init(){
  btnEvent();
  cloneImageNode();
  createDot();
  //slide list 전체 width 설정
  slide_list.style.width = (IMAGE_WIDTH * ( SLIDE_LEN + 2 )) + 'px';
  slide_list.style.transform = 'translateX(-' + IMAGE_WIDTH + 'px)';
  
}

init();