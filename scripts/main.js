(function () {
  const numberButtonsAll = document.querySelectorAll(".number");
  const operatorButtonsAll = document.querySelectorAll(".operator");
  const clearButton = document.querySelector(".clear");
  const equalButton = document.querySelector(".equal-sign");

  let calculationArr = [];

  function pushNumber(button) {
    alert(button.value);
    calculationArr.push(button.value);
    // delete later
    console.log(calculationArr);
  }

  function pushOperator(button) {
    alert(button.value);
    calculationArr.push(button.value);
    // delete later
    console.log(calculationArr);
  }

  function calculate() {
    let num1, num2, opIndex, op;
    for (let i = 0; i < calculationArr.length; i++) {
      if ("*/+_".includes(calculationArr[i])) {
        opIndex = i;
        op = calculationArr[i];
        break;
      }
    }
    console.log({ calculationArr });
    console.log({ opIndex });
    num1 = calculationArr.slice(0, opIndex).join("");
    num2 = calculationArr.slice(opIndex + 1).join("");

    console.log("num1", num1);
    console.log("num2", num2);
    console.log("op", op);
  }
  numberButtonsAll.forEach((button) =>
    button.addEventListener("click", () => pushNumber(button))
  );
  operatorButtonsAll.forEach((button) =>
    button.addEventListener("click", () => pushOperator(button))
  );
  clearButton.addEventListener("click", () => alert(clearButton.value));
  equalButton.addEventListener("click", () => calculate());
})();
