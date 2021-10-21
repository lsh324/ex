const bodyObj = document.querySelector('#wrap');
const panel = document.querySelectorAll('.panel');
const navObj = document.querySelector('.nav');
const topObj = document.querySelector('.top');


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
});
bodyObj.addEventListener('wheel', function(e){
  e.preventDefault();
  // console.log(e.deltaY);
  if(e.deltaY < 0){
    //위로
    if( pageCount <=0 ){
      return;
    }
    pageCount--;
    if( pageCount === 0){
      topObj.style.opacity = 0;
      }
  }
  if(e.deltaY > 0){
    // 아래로
    if( pageCount >= panelLength-1 ){
      return;
    }
    topObj.style.opacity = 1;
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
  topObj.style.opacity = 0;
  // console.log("current =", pageCount);
}
window.addEventListener('beforeunload', init);
init();