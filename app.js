// const add = (num1, num2) => num1 + num2;
// const subtract = (num1, num2) => num1 - num2;
// const multiply = (num1, num2) => num1 * num2;
// const divide = (num1, num2) => num1 / num2;
//
// function operate(operator, num1, num2){
//   switch (operator) {
//     case "+":
//       add(num1, num2);
//       break;
//     case "-":
//       subtract(num1, num2);
//       break;
//     case "*":
//       multiply(num1, num2);
//       break;
//     case "/":
//       divide(num1, num2);
//       break;
//     default:
//       console.log("No operator chosen");
//   }
// }
//
// const digitInputs = document.getElementById("digit-inputs-container");
// const operatorInputs = document.getElementById("operator-inputs-container");
// const displayArea = document.getElementById("display-area");
// const clearInput = document.getElementById("clear-input");
//
// let storedInputsArray = [];
//
// digitInputs.addEventListener("click", function getId(e){
//   storedInputsArray.push(e.target.id);
//   let storedInputsNum = storedInputsArray.join("")
//   displayArea.innerHTML = storedInputsNum;
// });
//
// operatorInputs.addEventListener("click", function getId(e){
//   let storedInputsOperator = e.target.id;
//   console.log(storedInputsOperator);
// });
//
// clearInput.addEventListener("click", function clearDisplay(){
//   storedInputsArray = [];
//   displayArea.innerHTML = "";
// });

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

const displayText = document.getElementById("display-text");
const displayOperator = document.getElementById("display-operator");
const digitContainer = document.getElementById("digits-container");
const operatorContainer = document.getElementById("operators-container");
const equalButton = document.getElementById("equal");
const clearButton = document.getElementById("clear");

let inputs1Array = []
let inputs1 = []

digitContainer.addEventListener("click", function displayUpdate(e){
  inputs1Array.push(e.target.id);
  inputs1 = inputs1Array.join("");
  displayText.innerHTML = inputs1;
});

operatorContainer.addEventListener("click", function operatorChosen(e){
  let operatorChosen = e.target.id;
  displayOperator.innerHTML = operatorChosen;
})

clearButton.addEventListener("click", function clearDisplay(){
  inputs1Array = [];
  displayText.innerHTML = "";
})
