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
const operatorInputs = document.getElementById("operator-inputs-container");
const displayArea = document.getElementById("display-area");
const clearInput = document.getElementById("clear-input");

let storedInputsArray = [];

digitInputs.addEventListener("click", function getId(e){
  storedInputsArray.push(e.target.id);
  let storedInputsNum = storedInputsArray.join("")
  displayArea.innerHTML = storedInputsNum;
});

operatorInputs.addEventListener("click", function getId(e){
  let storedInputsOperator = e.target.id;
  console.log(storedInputsOperator);
});

clearInput.addEventListener("click", function clearDisplay(){
  storedInputsArray = [];
  displayArea.innerHTML = "";
});
