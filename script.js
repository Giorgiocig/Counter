const button = document.querySelectorAll(".btn");
const number = document.querySelector(".number");
let count = 0;
const minVal = 0;

button.forEach(function (btn) {
  btn.addEventListener("click", function () {
    if (btn.classList.contains("btn__increase")) {
      number.textContent++;
      count++;
    } else if (btn.classList.contains("btn__decrease")) {
      if (count === minVal) {
        number.textContent = minVal;
      } else {
        number.textContent--;
        count--;
      }
    } else {
      number.textContent = 0;
    }
  });
});
