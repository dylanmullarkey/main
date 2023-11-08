const number = document.getElementById("count");
const add = document.getElementById("add");
const sub = document.getElementById("sub");

let count = 0;

function increment() {
  count++;
  number.textContent = count;
}

function decrement() {
  count--;
  number.textContent = count;
}

add.addEventListener("click", increment);
sub.addEventListener("click", decrement);