

function displayValue(value) {
  document.getElementById("display").value += value;
}

function evaluateExpression() {
  var expression = document.getElementById("display").value;
  var result = eval(expression);
  document.getElementById("display").value = result;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function deleteLastChar() {
  var display = document.getElementById("display");
  display.value = display.value.slice(0, -1);


- displayValue(value);
- evaluateExpression();
- clearDisplay();
- deleteLastChar();
}
function add() {
    const num1 = parseFloat(inputField.value);
    const num2 = parseFloat(inputField.value);
    const result = num1 + num2;
    resultField.value = result;
  }
  
  function subtract() {
    const num1 = parseFloat(inputField.value);
    const num2 = parseFloat(inputField.value);
    const result = num1 - num2;
    resultField.value = result;
  }
  