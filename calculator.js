// Select the display element
const display = document.getElementById("display");

// Select all the button elements
const buttons = document.querySelectorAll(".button");

// Add event listeners to the buttons
buttons.forEach(button => {
  button.addEventListener("click", handleButtonClick);
});

// Define the handleButtonClick function
function handleButtonClick(event) {
  const buttonText = event.target.value;
  if (buttonText === "=") {
    evaluateExpression();
  } else {
    displayValue(buttonText);
  }
}

// Define the displayValue function
function displayValue(value) {
  display.value += value;
  evaluateExpression();
}

// Define the evaluateExpression function
function evaluateExpression() {
  const expression = display.value;
  const result = eval(expression); // Using eval to evaluate the expression
  display.value = result;
  
}

// Define the clearDisplay function
function clearDisplay() {
  display.value = "";
}

// Define the deleteLastChar function
function deleteLastChar() {
  display.value = display.value.slice(0, -1);
}
