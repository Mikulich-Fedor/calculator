function insert(num) {
  document.form.textview.value = document.form.textview.value + num;
}

function clean() {
  document.form.textview.value = " ";
  window.location.reload();
}
function back() {
  let exp = document.form.textview.value;
  document.form.textview.value = exp.substring(0, exp.length - 1);
}

function equal() {
  let exp = document.form.textview.value;
  var a = Number(exp);
  console.log(typeof a);
  if (exp) {
    document.form.textview.value = eval(exp);
  }
}
//Кводрат
function sqr() {
  let exp = document.form.textview.value;

  if (exp) {
    document.form.textview.value = Math.sqrt(exp);
  }
}
//степень
function sq() {
  let exp = document.form.textview.value;
  if (exp) {
    document.form.textview.value = exp * exp;
  }
}

function factor() {
  let exp = document.form.textview.value;
  var sum = 1;
  for (i = 1; i <= exp; i++) {
    sum *= i;
  }
  document.form.textview.value = sum;
}

function sin() {
  let exp = document.form.textview.value;
  if (exp) {
    document.form.textview.value = Math.sin(exp);
  }
}
function cos() {
  let exp = document.form.textview.value;
  if (exp) {
    document.form.textview.value = Math.cos(exp);
  }
}

function tg() {
  let exp = document.form.textview.value;
  if (exp) {
    document.form.textview.value = Math.tan(exp);
  }
}
function ctg() {
  let exp = document.form.textview.value;
  if (exp) {
    document.form.textview.value = Math.tanh(exp);
  }
}

let body = document.getElementById("body");
var calc = document.createElement("div");
calc.classList.add("calc");
body.appendChild(calc);

function load() {
  let span = document.createElement("span");
  calc.appendChild(span);
  let val = document.form.textview.value;
  span.innerHTML = "Результат " + val;
  localStorage.setItem("calc", span.innerHTML);
}

if (localStorage.getItem("calc")) {
  calc.innerHTML = localStorage.getItem("calc");
}
