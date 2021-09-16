const barObj = document.querySelector('.process-bar');
const boxObj = document.querySelector('.box');
const stageObj = document.querySelector('.stage');
const menuObj = document.querySelector('#gnb');
let contentScroll = 0;
let posX=0;
let posY=0;
const zMoveFocus = [-500,-180,60,330,500];

const getViewIndex = (curPos) => {
    for( let i=0 ; i<zMoveFocus.length ; i++ ){
        if( curPos >= zMoveFocus[i] && curPos < zMoveFocus[i+1] ){
            return i;
        }
    }
}

const menuActive = (index) => {
    const active = document.querySelector('.active');
    active.classList.remove('active');
    menuObj.children[index].classList.add('active');
}

const resizeEvent = () => {
    contentScroll = document.documentElement.scrollHeight - window.innerHeight;
}
const scrollEvent = () => {    
    const scrollPer = pageYOffset / contentScroll;
    const zMove = scrollPer*970-500;

    barObj.style.width = `${scrollPer*100}%`;
    boxObj.style.transform = `translateZ(${zMove}vw)`;
    // console.log( "zMove="+zMove );
    const index = getViewIndex( zMove );
    menuActive(index);    
}
const mouseMoveEvent = (e) => {
    // console.log( e.clientX , e.clientY );
    posX = -1 + (e.clientX/window.innerWidth)*2;
    posY = 1 - (e.clientY/window.innerHeight)*2;
    // console.log( posX, posY );
    stageObj.style.transform = `rotateX(${posY*5}deg) rotateY(${posX*5}deg)`;
}
const menuClickEvent = (e) => {
    e.preventDefault();
    const target = e.target;
    if( target.tagName === 'A' ){
        const idx = target.getAttribute('href');
        boxObj.style.transform = `translateZ(${zMoveFocus[idx]}vw)`;
        menuActive(idx);
    }
}
const init = () => {
    resizeEvent();
    window.addEventListener('resize',resizeEvent);
    window.addEventListener('scroll',scrollEvent);
    window.addEventListener('mousemove',mouseMoveEvent);
    menuObj.addEventListener('click',menuClickEvent);
}
init();