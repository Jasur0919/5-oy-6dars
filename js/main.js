const header3 = document.querySelector('.header-3');
const toggle = document.querySelector('.menu');
const bgBlur = document.querySelector('#bg-blur');
const closeBtn = document.querySelector('.close-button');


toggle.addEventListener('click', ()=> {
header3.classList.forEach(item => {
    if(item === "show"){
        bgBlur.classList.remove('bg_blur');
        header3.classList.remove('show');
    } else{
        bgBlur.classList.add('bg_blur');
        header3.classList.add('show')
    }
    })
})

closeBtn.addEventListener('click', ()=> {
    header3.classList.remove('show');
    bgBlur.classList.remove('bg_blur'); 
})

