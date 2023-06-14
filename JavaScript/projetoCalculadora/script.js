const result = document.getElementById("result");

function appendToResult(value) {
  result.value += value;
}

function appendOperator(operator) {
  result.value += operator;
}

function calculate() {
  try {
    result.value = eval(result.value);
  } catch (error) {
    result.value = "Error";
  }
}

function clearResult() {
  result.value = "";
}

function deleteLastDigit() {
  result.value = result.value.slice(0, -1);
}

document.addEventListener("keydown", function (event) {
  const key = event.key;

  if (key.match(/[0-9/*\-+.]/)) {
    event.preventDefault();
    appendToResult(key);
  } else if (key === "Enter" || key === "=") {
    event.preventDefault();
    calculate();
  } else if (key === "Escape" || key === "Delete") {
    event.preventDefault();
    clearResult();
  } else if (key === "Backspace") {
    event.preventDefault();
    deleteLastDigit();
  }
});
