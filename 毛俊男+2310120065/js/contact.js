
const speak = document.querySelector('#speak')

const speakContent = document.querySelector('.speak')

const closeContent = document.querySelector('.close')

speak.addEventListener('click',function(){
    speakContent.style.display = 'block'
})

closeContent.addEventListener('click',function(){
    speakContent.style.display = 'none'
})