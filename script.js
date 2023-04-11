function onMenulist(){
    const menubtn = document.getElementById('mymenu');
    if(menubtn.style.visibility !== 'visible'){
        menubtn.style.visibility = 'visible';
    }else{
        menubtn.style.visibility = 'hidden';
    }
}

window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.wrap1');
  const navbarHeight = navbar.offsetHeight; //상단바 높이
  let lastScroll = 0;
  
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    const a = 25-currentScroll;
    const b = 25-navbarHeight
    
    if (currentScroll <= navbarHeight) {
      navbar.style.paddingTop = a + `px`;  //상단바 높이 - 현재 스크롤 위치
      navbar.style.boxShadow = 'none';
    } else if (currentScroll > lastScroll) {
      navbar.style.paddingTop = '30';
      navbar.style.boxShadow = '0 2px 2px rgba(212, 212, 212, 0.5)';
    } else {
      navbar.style.paddingTop = b + `px`; //상단바 높이 - navbarHeight
      navbar.style.boxShadow = '0 2px 2px rgba(212, 212, 212, 0.5)';
    }
  
    lastScroll = currentScroll;
  });
  });