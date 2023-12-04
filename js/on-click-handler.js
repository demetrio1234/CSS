function recursiveRowSearch(element) {
  do {
    element = element.parentElement;
  } while (element.tagName.toUpperCase() !== "TR");

  return element;
}

function onClickHandler() {
  const delSpans = document.getElementsByClassName("btn-span-red");

  for (let i = 0; i < delSpans.length; i++) {
    delSpans[i].addEventListener("click", function (event) {
      var row = recursiveRowSearch(event.target);
      var list = row.parentElement;
      list.removeChild(row);
    });
  }

  const editSpans = document.getElementsByClassName("btn-span-green");

  for (let i = 0; i < editSpans.length; i++) {
    editSpans[i].addEventListener("click", function (event) {
      var row = recursiveRowSearch(event.target);
      openModal(row);
    });
  }
}

window.onload = onClickHandler;
