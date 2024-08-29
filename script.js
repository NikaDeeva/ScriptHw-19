"use strict"
// 1
const modal = document.querySelector('.modal');
const openBtn = document.querySelector('[data-action="open-modal"]');
const closeBtn = document.querySelector('[data-action="close-modal"]');
function openClose(){
    document.body.classList.toggle('show-modal');
}
openBtn.addEventListener('click', openClose);
closeBtn.addEventListener('click', openClose);
// 2
const backdrop = document.querySelector('.js-backdrop');
backdrop.addEventListener('click', event => {
if (event.target === backdrop){
    openClose();
}
});
// 3
const colors = document.querySelectorAll('input[name="color"]');
function changeColor() {
    const selectedColor = document.querySelector('input[name="color"]:checked').value;
    document.body.style.backgroundColor = selectedColor;
}
colors.forEach(color => {
    color.addEventListener('change', changeColor);
});
// 4
let name = document.querySelector('#name-input');
const changed = document.querySelector('#name-output')
function changeName(){
changed.textContent = name.value;
}
name.addEventListener('input', changeName);
// 4.1
let validInput = document.querySelector('#validation-input');
function checkLength(){
    const inputLength = parseInt(validInput.getAttribute('data-length'));
    if (validInput.value.length === inputLength){
        validInput.classList.add('valid');
        validInput.classList.remove('invalid');
    }
    else{
        validInput.classList.add('invalid');
        validInput.classList.remove('valid');
    }
}
validInput.addEventListener('blur', checkLength);