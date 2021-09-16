const btnEmail = document.querySelector('#mail');
const btnSubmit = document.querySelector('#submit');
const btnExit = document.querySelector('#exit');
const mailForm = document.querySelector('.mailform');

console.log(btnSubmit);
btnEmail.addEventListener('click', function(){
  mailForm.style.display = 'block';
});
btnSubmit.addEventListener('click', function(){
  mailForm.style.display = 'none';
  alert('전송되었습니다. 감사합니다.');
});
btnExit.addEventListener('click', function(){
  mailForm.style.display = 'none';
})