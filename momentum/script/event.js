const pElem = document.querySelector('p');

const pClickEvent = () =>{
  //클릭하면 글자변경
  pElem.innerHTML = "Click Event!";
}
const rightBtnEvent = (event) =>{
  //우클릭하면 나오는거 안나오게
  event.preventDefault();
  //폰트사이즈변경
  pElem.style.fontSize = '48px';
}
const resizeEvent = () =>{
  //윈도우 사이즈 변경하면 bg색깔변경
  document.body.style.backgroundColor = "pink";
}
const keyDownEvent = (e) =>{
  //컨트롤+숫자1 누르면 bg변경
  if((event.ctrlKey == true) && (event.key == '1')){
    document.body.style.backgroundColor = "green";
  }
}
pElem.addEventListener('click', pClickEvent );
pElem.addEventListener('contextmenu', rightBtnEvent );
window.addEventListener('contextmenu',rightBtnEvent );
window.addEventListener('resize', resizeEvent );
document.addEventListener('keydown', keyDownEvent );