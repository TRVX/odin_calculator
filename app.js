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
const displayText = document.getElementById("display-text");

let inputsArray = []
let inputs = []

calculatorDOM.addEventListener("click", function buttonClicked(e){
  let buttonChosen = e.target.id;

})

// digitContainer.addEventListener("click", function displayUpdate(e){
//   inputs1Array.push(e.target.id);
//   inputs1 = inputs1Array.join("");
//   displayText.innerHTML = inputs1;
// });
//
// operatorContainer.addEventListener("click", function operatorChosen(e){
//   let operatorChosen = e.target.id;
//   displayOperator.innerHTML = operatorChosen;
//   digitContainer.addEventListener("click", function displayUpdate(e){
//     console.log(inputs1);
//     inputs2Array.push(e.target.id);
//     inputs2 = inputs2Array.join("");
//     displayText.innerHTML = inputs2;
//   });
// });
//
// clearButton.addEventListener("click", function clearDisplay(){
//   inputs1Array = [];
//   displayText.innerHTML = "";
// })
