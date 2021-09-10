(function(){
  const menuObj = document.querySelectorAll('#main-menu .gnb li');
  const itemObj = document.querySelector('#container');
  const btnObj = document.querySelector('.btn-menu');
  const barObj = document.querySelector('#main-menu');

  //main-menu click event
  menuObj.forEach( (liElem,idx ) => {
    liElem.addEventListener('click', function(){
      userClick('block');
      //menu select
      const delObj = itemObj.querySelector('div.on');
      delObj.classList.remove('on');
      itemObj.children[idx].classList.add('on');
    });
  });

  //btton click event
  btnObj.addEventListener('click', function(){
    userClick('none');
    
  });



  const userClick = (strDisplay) => {
      //container
      itemObj.classList.toggle('on');
      //bar
      barObj.classList.toggle('on');
      //menu button
      btnObj.style.display = strDisplay;
  }

})();