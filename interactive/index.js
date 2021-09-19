
const barObj = document.querySelector('.process-bar');
const boxObj = document.querySelector('.box');
const stageObj = document.querySelector('.stage');
const menuObj = document.querySelector('.side-menu');
const zPosition = [-600, -400, -120, 130, 325, 400];

let posX = 0;
let posY = 0;

const menuActive = (idx) => {
  const prev = document.querySelector('.active');
  prev.classList.remove('active');
  menuObj.children[idx].classList.add('active');
}

const getMenuIndex = (zMove) => {
  for( let i=0 ; i<zPosition.length-1 ; i++ ){
    if( zMove >=zPosition[i] && zMove < zPosition[i+1] ){
      return i;
    }
  }
}

const scrollEvent = () =>{
  const contentScroll = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPer = pageYOffset / contentScroll;
  const zMove = scrollPer*1000-600;

  barObj.style.width = `${scrollPer*100}%`;
  boxObj.style.transform = `translateZ(${zMove}vw)`; 
  console.log(zMove); 
  let menuIndex = getMenuIndex(zMove);
  console.log("menuIndex = " + menuIndex);
  const activeMenu = document.querySelector('.active');
  activeMenu.classList.remove('active'); 
  menuObj.children[menuIndex].classList.add('active');
}

const mouseMoveEvent = (e) =>{
  posX = -1 + (e.clientX/window.innerWidth)*4;
  posY = 1 - (e.clientY/window.innerHeight)*4;
  stageObj.style.transform = `rotateX(${posY}deg) rotateY(${posX}deg)`;
}
const init = () =>{
  window.addEventListener('mousemove', mouseMoveEvent);
  window.addEventListener('scroll', scrollEvent);
}
init();
