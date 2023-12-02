window.onkeydown = function (event) {
  let btnSpan = document.getElementById("btnSpan");
  let ddwnspn = document.getElementById("ddwnspn");

  if (document.activeElement === btnSpan && event.keyCode === 32) {
    event.preventDefault();
    btnSpan.click();
  } else if (document.activeElement === ddwnspn && event.keyCode === 32) {
    event.preventDefault();
    ddwnspn.click();
  }
};
