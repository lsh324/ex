const clockElem = document.querySelector('#clock h1');
const dateElem = document.querySelector('#clock h2');
const weekdayList = ['일요일','월요일','화요일','수요일','목요일','금요일','토요일']
const getClock = () =>{
  const date = new Date();
  const hh = String( date.getHours()).padStart(2, '0');
  const mm = String( date.getMinutes()).padStart(2, '0');
  const ss = String( date.getSeconds()).padStart(2, '0');
  const yyyy = String( date.getFullYear()).padStart(4, '0');
  const MM = String( date.getMonth()+1).padStart(2, '0');
  const dd = String( date.getDate()).padStart(2, '0');
  clockElem.innerText = `${hh} : ${mm} : ${ss}`;
  dateElem.innerText = `${yyyy} - ${MM} - ${dd} ${weekdayList[date.getDay()]}`;
}
getClock();
setInterval( getClock , 1000 );