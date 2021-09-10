const inputElem = document.querySelector('input');
const loginForm = document.querySelector('#loginForm');
const btnLogout = document.querySelector('logout');
const h1Elem = document.querySelector('h1');
const USERNAME_KEY = 'username';

const saveUserName = (strInput) =>{
  // 로컬스토리지에 저장
  localStorage.setItem('username', strInput );
  
}
const loadUserName = () =>{
  return localStorage.getItem(USERNAME_KEY);
}
const printUserName = (userName) =>{
  h1Elem.classList.remove('hidden');
  h1Elem.innerText = `${userName}님 어서오세요`;
  loginForm.classList.add('hidden');
}
const submitEvent = (event) =>{
  event.preventDefault();
  const userName = inputElem.value;
  //로그인 폼을 안보이게
  
  //텍스트를 보여주고
  printUserName(userName);
  
  //로컬스토리지에 저장
  saveUserName( userName );
}

const init = () =>{
  const username = loadUserName();
  if( username ){
    printUserName(username);
  }else{
    loginForm.addEventListener('submit', submitEvent );
  }

}
init();