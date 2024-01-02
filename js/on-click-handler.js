function recursiveRowSearch(element) {
  do {
    element = element.parentElement;
  } while (element.tagName.toUpperCase() !== "TR");

  return element;
}

function onClickHandler(event) {
  const delSpans = document.querySelector("#div-button-span-delete span");

  if (delSpans) {
    delSpans.addEventListener("click", function (event) {
      var row = recursiveRowSearch(event.target);
      var list = row.parentElement;
      list.removeChild(row);
    });
  }

  const editSpans = document.querySelector("#div-button-span-edit span");

  if (editSpans) {
    editSpans.addEventListener("click", function (event) {
      document.getElementById("modal").classList.remove("--hidden");
      var row = recursiveRowSearch(event.target);
    });
  }
}
