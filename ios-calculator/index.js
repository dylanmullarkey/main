const total = document.getElementById("total");
const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const btn3 = document.getElementById("btn-3");
const btn4 = document.getElementById("btn-4");
const btn5 = document.getElementById("btn-5");
const btn6 = document.getElementById("btn-6");
const btn7 = document.getElementById("btn-7");
const btn8 = document.getElementById("btn-8");
const btn9 = document.getElementById("btn-9");
const btn0 = document.getElementById("btn-0");

btn1.addEventListener("click", press1);
btn2.addEventListener("click", press2);
btn3.addEventListener("click", press3);
btn4.addEventListener("click", press4);
btn5.addEventListener("click", press5);
btn6.addEventListener("click", press6);
btn7.addEventListener("click", press7);
btn8.addEventListener("click", press8);
btn9.addEventListener("click", press9);
btn0.addEventListener("click", press0);
// btn2.onclick()

function press1() {
  total.textContent += 1;
  console.log(1);
}
function press2() {
  total.textContent += 2;
  console.log(2);
}
function press3() {
  total.textContent += 3;
  console.log(3);
}
function press4() {
  total.textContent += 4;
  console.log(4);
}
function press5() {
  total.textContent += 5;
  console.log(5);
}
function press6() {
  total.textContent += 6;
  console.log(6);
}
function press7() {
  total.textContent += 7;
  console.log(7);
}
function press8() {
  total.textContent += 8;
  console.log(8);
}
function press9() {
  total.textContent += 9;
  console.log(9);
}
function press0() {
  total.textContent += 0;
  console.log(0);
}
