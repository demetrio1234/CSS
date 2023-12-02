window.onkeydown = function (event) {
  let btnspn = document.getElementById("btn-span");
  let ddwnspn = document.getElementById("ddwnspn");

  if (document.activeElement === btnspn && event.keyCode === 32) {
    event.preventDefault();
    btnspn.click();
  } else if (document.activeElement === ddwnspn && event.keyCode === 32) {
    event.preventDefault();
    ddwnspn.click();
  }
};
