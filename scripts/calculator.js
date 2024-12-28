let displayNum = document.querySelector(".js-input");
document.querySelectorAll(".js-btnNum").forEach((button) => {
  button.addEventListener("click", () => {
    let calNumber = button.innerHTML;

    displayNum.value += calNumber;
  });
});

document.querySelectorAll(".js-mathbtn").forEach((button) => {
  button.addEventListener("click", () => {
    let mathOp = button.innerHTML;

    displayNum.value += mathOp;


  });
});
