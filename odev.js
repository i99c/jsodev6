const input = document.getElementById('input')
const kaydetBtn = document.getElementById('kaydet')
const yazi = document.getElementById('yazi')

kaydetBtn.addEventListener('click', () => {
    yazi.textContent = input.value
    input.value = ''
})

const renkBtn = document.querySelector('#renk')
// console.log(renkBtn)
const styleBtn = document.querySelector('#style')

const shadowBtn = document.querySelector('#shadow')

renkBtn.addEventListener('click', () => {
    yazi.style.color = 'red'
})

styleBtn.addEventListener('click', function () {
    yazi.style.fontStyle = 'italic'
})

shadowBtn.addEventListener('click', textShadowDegis)


function textShadowDegis() {
    yazi.style.textShadow = '2px 2px 10px yellow'
}

const resetBtn = document.getElementById('reset')

resetBtn.addEventListener('click', () => {
    yazi.style.color = 'black';

    yazi.style.fontStyle = 'normal';

    yazi.style.textShadow = 'none';
});

