const output = document.querySelector('#main');
const sub = document.querySelector('#sub');

const wrap = document.querySelector('#wrap');
const acButton = document.querySelector('#acBtn');
const equalButton = document.querySelector('#equal');

let num1;
let num2;
let op;

const add = (a, b) => {
  return a + b;
}
const subtract = (a, b) => {
  return a - b;
}
const multiply = (a, b) => {
  return a * b;
}
const divide = (a, b) => {
  if (b !== 0)
    return a / b;
  return 'Error';
}

const clickEvent = (e) => {
  const target = e.target;
  if (target.className === 'number') {
    output.innerHTML += target.innerHTML;
  }
  else if (target.className === 'operator') {
    if (output.innerHTML !== '') {
      num1 = Number.parseFloat(output.innerHTML);
      output.innerHTML = '';
      op = target.innerHTML;
      sub.innerHTML = num1 + ' ' + op;
    }
  }
}

const acBtnClickEvent = () => {
  num1 = ''
  num2 = ''
  op = ''
  output.innerHTML = ''
  sub.innerHTML = ''
}

const equalClickEvent = () => {
  if (num1 !== '') {
    num2 = Number.parseFloat(output.innerHTML);
    sub.innerHTML += ' ' + num2 + ' = ';
  }
  switch (op) {
    case '+':
      output.innerHTML = add(num1,num2);
      break;
    case '-':
      output.innerHTML = subtract(num1,num2);
      break;
    case '*':
      output.innerHTML = multiply(num1,num2);
      break;
    case '/':
      output.innerHTML = divide(num1,num2);
      break;
    default:
      break;
  }
  num1 = ''
  num2 = ''
  op = ''
}

const init = () => {
  wrap.addEventListener('click', clickEvent);
  acButton.addEventListener('click', acBtnClickEvent);
  equalButton.addEventListener('click', equalClickEvent);
}

init();