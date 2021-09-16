let sections = [];
const secObj = document.querySelectorAll('section');
const menuObj = document.querySelector('#gnb');
const secLength = secObj.length;

const menuActive = (idx) => {
    const prev = document.querySelector('.active');
    prev.classList.remove('active');
    menuObj.children[idx].classList.add('active');
}
const saveSections = () => {
    for (let i = 0; i < secLength; i++) {
        sections[i] = secObj[i].offsetTop - (innerHeight * 0.5);
    }
    sections[secLength] = document.documentElement.scrollHeight;
}
const scrollEvent = () => {
    for (let i = 0; i < sections.length; i++) {
        if (pageYOffset >= sections[i] && pageYOffset < sections[i + 1]) {
            menuActive(i);
        }
    }
}
const getMenuIndex = (target) => {
    for (let i = 0; i < menuObj.children.length; i++) {
        if (menuObj.children[i] === target) {
            return i;
        }
    }
}
const clickEvent = (e) => {
    e.preventDefault(); 
    if( e.target.tagName === 'A' ){
        const selectMenu = getMenuIndex(e.target);
        menuActive(selectMenu);
        // window.scrollTo(0,sections[selectMenu]+(innerHeight * 0.5));
        secObj[selectMenu].scrollIntoView( {block:"start", behavior:"smooth"} );
    } 
}
const init = () => {
    saveSections();
    window.addEventListener('scroll', scrollEvent);
    menuObj.addEventListener('click', clickEvent);
}
init();