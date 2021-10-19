// const imageWidth = 60;
// const slideList = document.querySelector('.cardwrap');
// const slideObj = document.querySelectorAll('.card');

// const slideLEN = slideObj.length;
// let curIndex = 0;

const bodyObj = document.querySelector('#wrap');
const panel = document.querySelectorAll('.panel');
const navObj = document.querySelector('.nav');

const panelLength = panel.length;
let pageCount = 0;
let scrollPosition = 0;

const getMenuIndex = (target) =>{
  for( let i=0 ; i < navObj.children.length ; i++){
    if( navObj.children[i] === target){
      return i;
    }
  }
}

navObj.addEventListener('click', function (e) {
  if (e.target.tagName === 'A') {
    pageCount = getMenuIndex(e.target) + 1;
  }
})
bodyObj.addEventListener('wheel', function(e){
  e.preventDefault();
  // console.log(e.deltaY);
  if(e.deltaY < 0){
    //위로
    if( pageCount <=0 ) return;
    pageCount--; 
  }
  if(e.deltaY > 0){
    // 아래로
    if( pageCount >= panelLength-1 ) return;
    pageCount++;
  }
  // console.log(pageCount);
  scrollPosition = pageCount * window.innerHeight;
  window.scrollTo({left:0, top:scrollPosition, behavior:"smooth"});
}, {passive:false});
function init(){
  console.log('init funcion');
  pageCount = 0;
  scrollPosition = 0;
  window.scrollTo(0,0);
  // console.log("current =", pageCount);
}
window.addEventListener('beforeunload', init);
init();
