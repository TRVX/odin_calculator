const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

function operate(operator, num1, num2){
  switch (operator) {
    case "+":
      add(num1, num2);
      break;
    case "-":
      subtract(num1, num2);
      break;
    case "*":
      multiply(num1, num2);
      break;
    case "/":
      divide(num1, num2);
      break;
    default:
      console.log("No operator chosen");
  }
}

const digitInputs = document.getElementById("digit-inputs-container");
const displayArea = document.getElementById("display-area");
let storedInputsArray = [];

digitInputs.addEventListener("click", function getId(e){
  storedInputsArray.push(e.target.id);
  displayArea.innerHTML = storedInputsArray.join("")
})
