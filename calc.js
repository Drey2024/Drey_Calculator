   const calculatorScreen = document.getElementById('screen');

function appendValue(inputValue) {
  calculatorScreen.value += inputValue;
}

function clearScreen() {
  calculatorScreen.value = '';
}   


const result = eval(calculatorScreen.value);
calculatorScreen.value = result;

function calculateResult() {
    try {   
        const result = eval(calculatorScreen.value);
        calculatorScreen.value = result;
    }

    catch (error) {
        calculatorScreen.value = 'invalid expression';
       
        
    }
}
