// 폰트스타일 셀렉트룰  눌러서 textarea 전체 글꼴 변경
// 폰트사이즈 셀렉트를 눌러서 글자전체 사이즈 변경
// - 변수저장(폰트스타일클래스가져옴)
// - 변수저장(textarea가져옴)
// - 폰트스타일.이벤트리스너 체인지 로 가져온 값을 텍스트 에리어의 폰트패밀리로 설정한다.

// 텍스트 데코레이션 내의 버튼을 눌러서 텍스트 데코 변경
// -텍스트데코레이션 클래스 가져와 변수로 저장
//-클릭이벤트처리
//글자색 배경색 바꾸기
//-color안의 input를 변수로 져장
//-체인지 이벤트 처리
//-
// 정렬버튼 눌러서 정렬
//-text-align클래스를 변수로 저장
//-clickEvent함수에 추가

// 줌레이트 을  let로 저장해 

// 줌아웃 
// if( 줌아웃값 >=50 ){
// 줌아웃값 = 줌레이트 - 10 
//줌레이트 = 줌아웃값}
// 줌 인
// if ( 줌인값 <=150){
// 줌인값 = 줌레이트 + 10 
// 줌레이트 = 줌아웃값}

const fontSelect= document.querySelector('.font-style');
const textArea = document.querySelector('.text-area');
const textDecoration = document.querySelector('.text-decoration');
const color = document.querySelector('.color');
const textAlign = document.querySelector('.text-align');
const zoomOut = document.querySelector('#zoom-out');
const zoomIn = document.querySelector('#zoom-in');
const sizeSelect = document.querySelector('#font-size');

let zoomRate = Number(document.querySelector('.zoom-rate').innerHTML);

const toggle = (id) =>{
  textArea.classList.toggle( 'new-'+id );
}
const clickEvent = (e) =>{
  switch(e.target.id){
    case 'bold' :
    case 'italic' :
      toggle( e.target.id );
      break;
    case 'underline' :
    case 'line-through' :
      textArea.style.textDecoration = ( textArea.style.textDecoration !== e.target.id ) ? e.target.id : 'none';
      break;
    case 'left' :
    case 'center' :
    case 'right' :
      textArea.style.textAlign = e.target.id;
      break;  
  }
  if( e.target.id === 'zoom-out'){
    let fontSize = Number(sizeSelect.value);
    if( zoomRate >= 50 ){
      zoomRate = zoomRate - 10;
      textArea.style.fontSize = fontSize*zoomRate/100+'pt';
      document.querySelector('.zoom-rate').innerHTML = zoomRate;
    }
  }
  if( e.target.id === 'zoom-in'){
    let fontSize = Number(sizeSelect.value);
    if( zoomRate < 200 ){
      zoomRate = zoomRate + 10;
      textArea.style.fontSize = fontSize*zoomRate/100+'pt';
      document.querySelector('.zoom-rate').innerHTML = zoomRate;
    }
  }
}
const changeEvent = (e) =>{
  if( e.target.id === 'font' ){
    textArea.style.fontFamily = e.target.value;
  }else if( e.target.id === 'font-size' ){
    textArea.style.fontSize = Number(zoomRate)*Number(e.target.value)/100+'pt';
    console.log(Number(zoomRate)*Number(e.target.value)/100);
  }else if( e.target.id === 'text-color'){
    textArea.style.color = e.target.value;
  }else if( e.target.id === 'background-color'){
    textArea.style.backgroundColor = e.target.value;
  }
} 
const eventList = () =>{
  fontSelect.addEventListener('change', changeEvent);
  textDecoration.addEventListener('click', clickEvent);
  textAlign.addEventListener('click', clickEvent);
  color.addEventListener('change', changeEvent);
  zoomOut.addEventListener('click', clickEvent);
  zoomIn.addEventListener('click', clickEvent);
}
const init = () =>{
  eventList();
}
init()