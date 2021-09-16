(function(){
  const btnObj = document.querySelector('.menu-icon');
  const wrapObj = document.querySelector('.menu');
  let current = 0; //0 - close , 1 - open 
  btnObj.addEventListener('click',function(){
    $(this).toggleClass("active");
    if( current ){
      wrapObj.style.left = '-300px';
      current = 0;
      removeWrapper();
    } else{
      wrapObj.style.left = '0';
      current = 1;
      createWrapper();
    }
  });

  const createWrapper = () =>{
    let divObj = document.createElement('div');
    divObj.classList.add('wrapper');
    document.body.append(divObj);
  }
  const removeWrapper = () => {
    const divObj = document.querySelector('.wrapper');
    divObj.remove();
  }
})();