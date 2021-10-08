 const count = document.querySelector(".count");
const add = document.querySelector(".Add");
const sub = document.querySelector(".Subtract");
const reset = document.querySelector(".Reset");
const button = document.querySelector(".buttons");

button.addEventListener("click", (e) => {
  if (e.target.classList.contains("Add")) {
    count.innerHTML++;
    colorActions();
  }
  if (e.target.classList.contains("Subtract")) {
    count.innerHTML--;
    colorActions();
  }
  if (e.target.classList.contains("Reset")) {
    count.innerHTML = 0;
    colorActions();
  }
});

function colorActions() {
  if (count.innerHTML > 0) {
    count.style.color = "yellow";
  } else if (count.innerHTML < 0) {
    count.style.color = "Red";
  } else {
    count.style.color = "yellow";
  }
}

// solo event catcher;

// add.addEventListener("click", () => {
//   count.innerHTML++;
// });

// sub.addEventListener("click", () => {
//   count.innerHTML--;
// });

// reset.addEventListener("click", () => {
//   count.innerHTML = 0;
// });
