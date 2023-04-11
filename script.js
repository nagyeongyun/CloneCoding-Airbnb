function onMenulist(){
    const menubtn = document.getElementById('mymenu');
    if(menubtn.style.visibility !== 'visible'){
        menubtn.style.visibility = 'visible';
    }else{
        menubtn.style.visibility = 'hidden';
    }
}

window.addEventListener('scroll', function() {
    // 스크롤 높이 계산
    const scrollHeight = window.pageYOffset || document.documentElement.scrollTop;
  
    // 상단바에 해당하는 요소 선택
    const navbar = document.querySelector('.wrap1');
  
    // 상단바가 있는 경우에만 실행
    if (navbar) {
      // 일정 스크롤 높이 이하에서만 상단바 위치 조정
      if (scrollHeight < 10) {
        // 스크롤 높이에 따라 변화하는 값을 계산
        const transformValue = 'translateY(' + (-scrollHeight) + 'px)';
        // transform 속성 적용
        navbar.style.transform = transformValue;
      }
      // 일정 스크롤 높이 이상에서는 상단바 고정
      else {
        // transform 속성 적용
        navbar.style.transform = 'translateY(-10px)';
      }
    }
  });