let currency = document.querySelector("select");
let num = document.querySelector("#tentacles");
let result = document.querySelector(".result");

function action() {
  result.textContent = num.value * currency.value;
}

num.oninput = function () {
  return action()
}

currency.onchange = function () {
  return action()
}