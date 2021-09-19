let button = document.querySelectorAll("button");
let currentOperand = document.querySelector(".current-operand");
let previousOperand = document.querySelector(".previous-operand");

button.forEach((x) =>
  x.addEventListener("click", function enterNumber() {
    if (x.innerText == "del") {
      let clear = currentOperand.innerText.split("");
      clear.pop();
      let del = clear.join("");
      currentOperand.innerText = del;
    } else if (x.innerText == "ac") {
      if (currentOperand.innerText == "") {
        currentOperand.innerText = "";
        previousOperand.innerText = "";
      } else {
        currentOperand.innerText = "";
      }
    } else if (x.innerText == "." && currentOperand.innerText.includes(".")) {
      !currentOperand.innerText + x.innerText;
    } else if (x.innerText == "+") {
      parseFloat(
        (previousOperand.innerText = currentOperand.innerText + x.innerText)
      );
      currentOperand.innerText = "";
    } else if (x.innerText == "-") {
      parseFloat(
        (previousOperand.innerText = currentOperand.innerText + x.innerText)
      );
      currentOperand.innerText = "";
    } else if (x.innerText == "×") {
      parseFloat(
        (previousOperand.innerText = currentOperand.innerText + x.innerText)
      );
      currentOperand.innerText = "";
    } else if (x.innerText == "÷") {
      parseFloat(
        (previousOperand.innerText = currentOperand.innerText + x.innerText)
      );
      currentOperand.innerText = "";
    } else if (x.innerText == "=") {
      previousOperand.innerText += currentOperand.innerText;
      if (previousOperand.innerText.includes("+")) {
        let result =
          parseFloat(previousOperand.innerText) +
          parseFloat(currentOperand.innerText);
        currentOperand.innerText = result;
      }
      if (previousOperand.innerText.includes("-")) {
        let result =
          parseFloat(previousOperand.innerText) -
          parseFloat(currentOperand.innerText);
        currentOperand.innerText = result;
      }
      if (previousOperand.innerText.includes("×")) {
        let result =
          parseFloat(previousOperand.innerText) *
          parseFloat(currentOperand.innerText);
        currentOperand.innerText = result;
      }
      if (previousOperand.innerText.includes("÷")) {
        let result =
          parseFloat(previousOperand.innerText) /
          parseFloat(currentOperand.innerText);
        currentOperand.innerText = result;
      }
    } else {
          currentOperand.innerText += x.innerText;
    }
  })
);
