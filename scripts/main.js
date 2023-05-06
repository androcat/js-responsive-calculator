(function () {
  const numberButtonsAll = document.querySelectorAll(".number");
  const operatorButtonsAll = document.querySelectorAll(".operator");
  const clearButton = document.querySelector(".clear");
  const equalButton = document.querySelector(".equal-sign");
  const screen = document.querySelector(".calculator-screen");

  let calculationArr = [];
  let total = 0;

  function pushNumber(button) {
    calculationArr.push(button.value);
    // delete later
    console.log(calculationArr);
    screen.value = calculationArr.toString().split(",").join("");
  }

  function pushOperator(button) {
    calculationArr.push(button.value);
    // delete later
    console.log(calculationArr);
    screen.value = calculationArr.toString().split(",").join("");
  }

  function calculate() {
    let num1, num2, opIndex, op;
    for (let i = 0; i < calculationArr.length; i++) {
      if ("*/+-".includes(calculationArr[i])) {
        opIndex = i;
        op = calculationArr[i];
        break;
      }
    }
    // console.log({ calculationArr });
    // console.log({ opIndex });
    num1 = parseInt(calculationArr.slice(0, opIndex).join(""));
    num2 = parseInt(calculationArr.slice(opIndex + 1).join(""));

    console.log("num1", num1);
    console.log("num2", num2);
    console.log("op", op);

    console.log(calculationArr);

    if (op === "*") {
      total += num1 * num2;
    } else if (op === "/") {
      //  look up if just integer division
      total += num1 / num2;
    } else if (op === "+") {
      total += num1 + num2;
    } else {
      total += num1 - num2;
    }
    calculationArr = [];
    screen.value = total.toString();

    calculationArr.push(total + "");
    console.log(calculationArr);
  }
  numberButtonsAll.forEach((button) =>
    button.addEventListener("click", () => pushNumber(button))
  );
  operatorButtonsAll.forEach((button) =>
    button.addEventListener("click", () => pushOperator(button))
  );
  clearButton.addEventListener("click", () => {
    calculationArr = [];
    total = 0;
    screen.value = "0";
  });
  equalButton.addEventListener("click", () => calculate());
})();
