const sec = document.querySelector('[data-sec]')
const inputVal = document.querySelector('input')
const resetBtn = document.querySelector('button')

function convert() {
    sec.innerText = parseFloat(inputVal.value * 60)
}

inputVal.addEventListener('input', convert)

function reset() {
    sec.innerText = ''
    inputVal.value = ''
}

resetBtn.addEventListener('click', reset)