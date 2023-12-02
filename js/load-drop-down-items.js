function showDropDownItems() {
  var dropDown = document.getElementById("ddwn");

  var spanText = document.getElementById("ddwnspn");

  if (dropDown.innerHTML.length <= 0) {
    showArguments(dropDown, spanText);
  } else {
    hideArguments(dropDown, spanText);
  }
}

const hideArguments = function (dropDown, spanText) {
  document.getElementById("inserted-list-item").remove();
  dropDown.innerHTML = "";
  spanText.innerText = "Show Arguments";
  dropDown.style.display = "none";
};

const showArguments = async function (dropDown, spanText) {
  let item = { elements: "" };

  const response = await fetch("../data/arguments.json");
  const arguments = await response.json();

  for (let i = 0; i < arguments.arguments.length; i++) {
    let tempName = arguments.arguments[i].name;

    item.elements += `<li class="inserted-list-item" id="inserted-list-item">
                        <input class="custom-checkbox" type="checkbox" name="${tempName}" id="${tempName}" style="left:50px"/>
                        <label for="${tempName}" class="custom-label" name="${tempName}" value="${tempName}" style="left:50px">${tempName}</label>
                      </li>`;
  }

  dropDown.innerHTML = `${item.elements}`;

  spanText.innerText = "Hide Arguments";
  dropDown.style.display = "block";

  dropDown.style.top =
    Math.ceil(spanText.getBoundingClientRect().y / 2).toString() + "px";
  dropDown.style.left =
    Math.ceil(spanText.getBoundingClientRect().x / 2).toString() + "px";
};

document.querySelector('[class="btn-square-powderblue"]').onclick =
  showDropDownItems;
