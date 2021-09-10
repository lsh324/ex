//전역변수
(function(){
  //지역변수
  const gnbMenu = document.querySelectorAll('.gnb > ul > li');
  gnbMenu.forEach( (liElem, idx ) => {
    liElem.addEventListener('mouseover', () => {
      const obj = gnbMenu[idx].querySelector('.submenu');
      // obj.style.display = 'block';
      obj.style.height = '80%';
    });
    liElem.addEventListener('mouseout', () =>{
      const obj = gnbMenu[idx].querySelector('.submenu');
      // obj.style.display = 'none';
      obj.style.height = '0';
    });
  });
})();