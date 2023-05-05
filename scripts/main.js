(function () {
  const numberButtonsAll = document.querySelectorAll(".number");
  console.log(numberButtonsAll);

  function pushNumber() {
    numberButtonsAll.forEach((numButton) =>
      numButton.addEventListener("click", function () {
        alert("You pushed a number!");
      })
    );
  }

  pushNumber();
})();
