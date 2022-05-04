let add = (n1, n2) => n1 + n2;
let subtract = (n1, n2) => n1 - n2;
let multiply = (n1, n2) => n1 * n2;
let divide = (n1, n2) => n1 / n2;

function operate(operator, n1, n2){
  n1 = parseInt(n1);
  n2 = parseInt(n2);
  switch (operator) {
    case "+":
      return add(n1, n2);
      break;
    case "-":
      return subtract(n1, n2);
      break;
    case "*":
      return multiply(n1, n2);
      break;
    case "/":
      return divide(n1, n2);
      break;
    default:
      return null;
  }
}

const calculatorDOM = document.getElementById("calculator");
const numDisplayText = document.getElementById("num-display-text");
const operatorDisplayText = document.getElementById("operator-display-text")

let inputsArray = []
let inputs = []
let storedInputs = []

calculatorDOM.addEventListener("click", function buttonClicked(e){
  let buttonId = e.target.id;
  let buttonChosen = e.target.classList
  if (buttonChosen.contains("digits")){
    inputsArray.push(buttonId);
    inputs = inputsArray.join("");
    numDisplayText.innerHTML = inputs;
  } else if (buttonChosen.contains("operators")) {
    storedInputs.push(inputs);
    inputs = [];
    inputsArray = [];
    operatorDisplayText.innerHTML = buttonId;
  } else if (buttonId === "equal") {
    numDisplayText.innerHTML = operate(operatorDisplayText.innerHTML, storedInputs, inputs);
  } else if (buttonId === "clear") {
    inputsArray = [];
    inputs = [];
    storedInputs = [];
    numDisplayText.innerHTML = "";
    operatorDisplayText.innerHTML = "";
  }

});
