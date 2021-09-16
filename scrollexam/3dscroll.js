const barObj = document.querySelector('.process-bar');
const boxObj = document.querySelector('.box');
const stageObj = document.querySelector('.stage');
let posX = 0;
let posY = 0;

const scrollEvent = () =>{
  const contentScroll = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPer = pageYOffset / contentScroll;
  const zMove = scrollPer*980-500;
  barObj.style.width = `${scrollPer*100}%`;
  boxObj.style.transform = `translateZ(${zMove}vw)`;
}
const mouseMoveEvent = (e) =>{
  posX = -1 + (e.clientX/window.innerWidth)*4;
  posY = 1 - (e.clientY/window.innerHeight)*4;
  console.log( posX, posY);
  stageObj.style.transform = `rotateX(${posY}deg) rotateY(${posX}deg)`;
}
const init = () =>{
  window.addEventListener('scroll',scrollEvent);
  window.addEventListener('mousemove', mouseMoveEvent);
}
init();