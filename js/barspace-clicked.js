window.onkeydown = function (event) {
  let btnspan = document.getElementById("btn-span");
  let dropdownspan = document.getElementById("dropdownspan");

  if (document.activeElement === btnspan && event.keyCode === 32) {
    event.preventDefault();
    btnspan.click();
  } else if (document.activeElement === dropdownspan && event.keyCode === 32) {
    event.preventDefault();
    dropdownspan.click();
  }
};
