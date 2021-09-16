let sections = [];
const secObj = document.querySelectorAll('section');
const secLength = secObj.length;
const menuObj = document.querySelector('#gnb');

const menuActive = (idx) => {
  const prev = document.querySelector('.active');
  prev.classList.remove('active');
  menuObj.children[idx].classList.add('active');
}
const saveSections = () =>{
  for( let i=0 ; i<secLength ; i++){
    sections[i] = secObj[i].offsetTop - (window.innerHeight*0.5);
  }
  sections[secLength] = document.body.scrollHeight;
}
const scrollEvent = () =>{
  for( let i=0 ; i<sections.length ; i++){
    if( pageYOffset >= sections[i] && pageYOffset < sections[i+1] ){
        menuActive(i);
    }
  }
}
const getMenuIndex = (target) =>{
  for( let i=0 ; i<menuObj.children.length ; i++){
    if( menuObj.children[i] === target){
      return i;
    }
  }
}
const clickEvent = (e) =>{
  e.preventDefault(); /*기능없애는거*/
  if( e.target.tagName ==='A' ){
    const selectMenu = getMenuIndex(e.target);
    console.log(selectMenu);
    console.log(sections[selectMenu]);
    menuActive(selectMenu);
    window.scrollTo( 0, sections[selectMenu] + (window.innerHeight*0.5 ));
  }
}
const init = () =>{
  saveSections();
  window.addEventListener('scroll', scrollEvent);
  menuObj.addEventListener('click', clickEvent);
}
init();