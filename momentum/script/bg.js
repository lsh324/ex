const bg = [];
for( let i=1; i<=7; i++){
  bg.push(`images/bg${i}.jpg`)
}

const bgElem = document.querySelector('.bg');
const bgnum = Math.floor(Math.random()*bg.length);
bgElem.src = bg[bgnum];