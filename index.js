document.querySelector('button[type="submit"]').onclick = function(){
  let num = document.querySelector('#tentacles').value;
  let currency = document.querySelector('select').value;
  let multiply = num * currency;
  let result = document.querySelector('.result');
  result.textContent = multiply;
}