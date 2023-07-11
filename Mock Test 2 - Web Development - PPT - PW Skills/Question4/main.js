let menu = document.getElementById('menu');


menu.addEventListener('click', ()=>{
    let nav_item = document.getElementById('list-box');
    let close = document.getElementById('close');


    if(nav_item.style.display === 'none' || close.style.display === "none"){
        nav_item.style.display='block';
        close.style.display='block';
    }else{
        nav_item.style.display='none' ;
        close.style.display='none' ;
    }

    close.addEventListener('click',()=>{
        nav_item.style.display="none";
    })
})