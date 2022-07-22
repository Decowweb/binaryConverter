const buttonZero = document.querySelector('[zero]')
const buttonOne = document.querySelector('[one]')
const buttonConvert = document.querySelector('[convert]')
const buttonClean = document.querySelector('[clean]')

function start() {
    buttonZero.addEventListener('click', insertNumber)
    buttonOne.addEventListener('click', insertNumber)
    buttonClean.addEventListener('click', cleanNumber)
}

function insertNumber(e) {
    let numberBeforeConvert = document.getElementById('spaceNumberInner').innerHTML
    if (e.target == buttonZero && numberBeforeConvert.length <= 11) {
        document.getElementById('spaceNumberInner').innerHTML = numberBeforeConvert + 0
    } else if (e.target == buttonOne && numberBeforeConvert.length <= 11) {
        document.getElementById('spaceNumberInner').innerHTML = numberBeforeConvert + 1
    }
    buttonConvert.addEventListener('click', convertNumber)
}

function convertNumber() {
    numberBeforeConvert = document.getElementById('spaceNumberInner').innerHTML
    let inversion = numberBeforeConvert.split("").reverse().join("")
    let multiplier = 1
    let result = 0
    for (n of inversion) {
        result = result + n * multiplier
        multiplier = multiplier * 2
    }
    document.getElementById('spaceConvertInner').innerHTML = result
}

function cleanNumber() {
    document.getElementById('spaceNumberInner').innerHTML = ''
    document.getElementById('spaceConvertInner').innerHTML = ''
}

start()