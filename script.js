function onMenulist(){
    const menubtn = document.getElementById('mymenu');
    if(menubtn.style.visibility !== 'visible'){
        menubtn.style.visibility = 'visible';
    }else{
        menubtn.style.visibility = 'hidden';
    }
}