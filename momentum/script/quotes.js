const quotes = [
  {
    quote : "시간을 잘 맞춘 침묵은 말보다 더 좋은 웅변이다",
    author : "터퍼"
  },
  {
    quote : "스스로에게는 부자인양, 친구들에게는 빈자인양 행동하라",
    author : "유베날리스"
  },
  {
    quote : "다시 한번이라는 어리석은 말을 내게는 하지 말라",
    author : "미라보"
  },
  {
    quote : "인생은 한순간에 지나지 않는다. 죽음 또한 한순간이다",
    author : "실러"
  },
  {
    quote : "살기 위해서 먹어야지 먹기 위해서 살아서는 안된다",
    author : "소크라테스"
  }
];

const quoteElem = document.querySelector('.quote h2');
const authorElem = document.querySelector('.quote h3');
const num = Math.floor(Math.random()*quotes.length);
const today = quotes[num];

quoteElem.innerText = today.quote;
authorElem.innerText = today.author;
