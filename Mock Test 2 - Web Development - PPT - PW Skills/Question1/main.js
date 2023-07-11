
let box = document.getElementById('red-box');
let change = document.querySelector('.changes');

box.addEventListener('click', ()=>{
    box.classList.add('action')
    change.innerHTML = "Color is Changed to Yellow & Size is Double"
});