const selectTag = document.querySelector("select[name = 'font']");
const calculator = document.querySelector(".calculator");
const calcButtons = document.querySelectorAll(".calcButton");
const numPads = document.querySelectorAll(".numPad");
const displayInput = document.querySelector(".display input");
const buttonStyle = document.querySelector(".buttonChange input");
const buttonStyleText = document.querySelector(".buttonChange h1 span");
const darkMode = document.querySelector("#darkMode");
const whiteMode = document.querySelector("#whiteMode");
const rangeInput = document.querySelector("#buttonChangeInput");
const fontWeightInput = document.querySelector("#fontWeightChangeInput");
let currentButtonStyle = '0';


function updateButtonStyle(style) {
    const styles = ['#FF964A', '#61EA6E', '#46B1FF', '#AC98FF', '#D96CFF', '#FF5387'];
    const styleNames = ["(Orange)", "(Green)", "(Blue)", "(Purple)", "(Pink)", "(Red)"];
    
    calcButtons.forEach(button => button.style.backgroundColor = styles[style]);
    buttonStyleText.innerHTML = styleNames[style];
    rangeInput.style.accentColor = styles[style];
}

selectTag.addEventListener("input", function(){
    const fontValue = selectTag.value;
    const fontFamily = fontValue === "Pretendard Variable" ? 'Pretendard Variable' : 'Roboto';
    
    [calcButtons, numPads, [displayInput], [selectTag]].flat().forEach(element => {
        element.style.fontFamily = fontFamily;
    });
});

darkMode.addEventListener("click", function(){
    darkMode.style.border = 'solid 4px #e16fe7';
    whiteMode.style.border = 'none';
    calculator.style.backgroundColor = '#101010';
    displayInput.style.backgroundColor = '#101010';
    displayInput.style.color = '#f0f0f0';
    numPads.forEach(button => {
        button.style.backgroundColor = '#F4EDE7';
        button.style.color = '#000000';
    });
    updateButtonStyle(currentButtonStyle);
});


whiteMode.addEventListener("click", function(){
    darkMode.style.border = 'none';
    whiteMode.style.border = 'solid 4px #e16fe7';
    calculator.style.backgroundColor = '#f0f0f0';
    displayInput.style.backgroundColor = '#f0f0f0';
    displayInput.style.color = '#101010';
    numPads.forEach(button => {
        button.style.backgroundColor = '#333333';
        button.style.color = '#fafafa';
    });
    updateButtonStyle(currentButtonStyle); 
});


buttonStyle.addEventListener("input", function(){
    currentButtonStyle = buttonStyle.value;
    updateButtonStyle(currentButtonStyle);
});


selectTag.addEventListener("input", function(){
    if (selectTag.value === "Pretendard Variable") {
        calcButtons.forEach(button => button.style.fontFamily = 'Pretendard Variable');
        numPads.forEach(button => button.style.fontFamily = 'Pretendard Variable');
        displayInput.style.fontFamily = 'Pretendard Variable'
        selectTag.style.fontFamily = 'Pretendard Variable'
    } else if (selectTag.value === "Roboto") {
        calcButtons.forEach(button => button.style.fontFamily = 'Roboto');
        numPads.forEach(button => button.style.fontFamily = 'Roboto');
        displayInput.style.fontFamily = 'Roboto'
        selectTag.style.fontFamily = 'Roboto'
    }
})

fontWeightInput.addEventListener("input", function(){
    if (fontWeightInput.value === "0") {
        calcButtons.forEach(button => button.style.fontWeight = '300');
        numPads.forEach(button => button.style.fontWeight = '300');
        displayInput.style.fontWeight = '300'
        fontWeightInput.style.accentColor = '#858585'
    } else if (fontWeightInput.value === "1") {
        calcButtons.forEach(button => button.style.fontWeight = '400');
        numPads.forEach(button => button.style.fontWeight = '400');
        displayInput.style.fontWeight = '400'
        fontWeightInput.style.accentColor = '#656565'
    } else if (fontWeightInput.value === "2") {
        calcButtons.forEach(button => button.style.fontWeight = '500');
        numPads.forEach(button => button.style.fontWeight = '500');
        displayInput.style.fontWeight = '500'
        fontWeightInput.style.accentColor = '#505050'
    } else if (fontWeightInput.value === "3") {
        calcButtons.forEach(button => button.style.fontWeight = '600');
        numPads.forEach(button => button.style.fontWeight = '600');
        displayInput.style.fontWeight = '600'
        fontWeightInput.style.accentColor = '#353535'
    } else if (fontWeightInput.value === "4") {
        calcButtons.forEach(button => button.style.fontWeight = '700');
        numPads.forEach(button => button.style.fontWeight = '700');
        displayInput.style.fontWeight = '700'
        fontWeightInput.style.accentColor = '#101010'
    }
})

document.addEventListener('DOMContentLoaded', function () {
    let firstNumber = '';
    let secondNumber = '';
    let operator = '';
    let resultDisplayed = false;

    const display = document.getElementById('calcDisplay');

    document.querySelectorAll('.numPad').forEach(button => {
        button.addEventListener('click', function () {
            if (resultDisplayed) {
                display.value = '0';
                resultDisplayed = false;
            }

            if (display.value === '0') {
                display.value = button.textContent;
            } else {
                display.value += button.textContent;
            }
        });
    });

    document.querySelectorAll('.calcButton').forEach(button => {
        button.addEventListener('click', function () {
            if (button.id === 'clear') {
                firstNumber = '';
                secondNumber = '';
                operator = '';
                display.value = '0';
            } else if (button.id === 'calculate') {
                if (!operator || resultDisplayed) return;

                secondNumber = display.value;
                display.value = calculate(firstNumber, operator, secondNumber);
                resultDisplayed = true;
            } else if (['plus', 'minus', 'multiply', 'divide'].includes(button.id)) {
                if (!firstNumber || resultDisplayed) {
                    firstNumber = display.value;
                    resultDisplayed = false;
                } else if (firstNumber && !operator) {
                    secondNumber = '';
                }

                switch (button.id) {
                    case 'plus':
                        operator = '+';
                        break;
                    case 'minus':
                        operator = '-';
                        break;
                    case 'multiply':
                        operator = '*';
                        break;
                    case 'divide':
                        operator = '/';
                        break;
                }
                display.value = '0';
            }
        });
    });

    function calculate(firstNumber, operator, secondNumber) {
        firstNumber = parseFloat(firstNumber);
        secondNumber = parseFloat(secondNumber);

        if (operator === '+') return firstNumber + secondNumber;
        if (operator === '-') return firstNumber - secondNumber;
        if (operator === '*') return firstNumber * secondNumber;
        if (operator === '/') return firstNumber / secondNumber;
    }
});
