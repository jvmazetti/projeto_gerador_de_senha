const input = document.querySelector('.input');
const button = document.querySelector('a');

function generator() {
    let randomString = Math.random().toString(26).slice(-8);
    input.value = randomString;
}

function copy() {
    navigator.clipboard.writeText(input.value);
    button.classList.add('active');
    setTimeout(function(){
        button.classList.remove('active');
        input.value = '';
    },2000)
}