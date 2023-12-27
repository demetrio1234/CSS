function showDropDownItems() {
  var dropDownUl = document.getElementById("dropdown__ul");

  var dropDownButton = document.getElementById("dropdown__button");

  if (dropDownUl && dropDownUl.innerHTML.length <= 0) {
    showArguments(dropDownUl, dropDownButton);
  } else {
    hideArguments(dropDownUl, dropDownButton);
  }
}

const hideArguments = function (dropDownUl, dropDownButton) {

  for (let i = 0; i < dropDownUl.childNodes.length; i++) {
    dropDownUl.childNodes[i].remove();
  }

  dropDownUl.innerHTML = "";
  dropDownButton.innerText = "Show Arguments";
  document.getElementById("dropdown__span").style.display = "none";
};

const showArguments = async function (dropDownUl, dropDownButton) {
  let item = { elements: "" };

  const response = await fetch("../data/arguments.json");
  const arguments = await response.json();

  for (let i = 0; i < arguments.arguments.length; i++) {
    let tempName = arguments.arguments[i].name;
    /*
    item.elements += `<li class="inserted-list-item" id="inserted-list-item">
                        <input class="custom-checkbox" type="checkbox" name="${tempName}" id="${tempName}" style="left:50px"/>
                        <label for="${tempName}" class="custom-label" name="${tempName}" value="${tempName}" style="left:50px">${tempName}</label>
                      </li>`;
    */
    item.elements += `<li class="--width-fit-content --bg-rebeccapurple" id="dropdown__item">
                        <input
                          class="--width-fit-content"
                          type="checkbox"
                          name="${tempName}"
                          id="${tempName + i}"
                        />
                        <label class="--width-fit-content" for="${tempName + i}">${tempName}</label>
                      </li>`;
  }

  dropDownUl.innerHTML = `${item.elements}`;

  dropDownButton.innerText = "Hide Arguments";
  document.getElementById("dropdown__span").style.display = "block";

  document.getElementById("dropdown__span").style.top =
    Math.ceil(dropDownButton.getBoundingClientRect().y / 2).toString() + "px";
  document.getElementById("dropdown__span").style.left =
    Math.ceil(dropDownButton.getBoundingClientRect().x).toString() + "px";
};

let dropDownButton = document.querySelector('#dropdown__button');
dropDownButton.onclick = dropDownButton.onclick === null ? showDropDownItems : dropDownButton.onclick;
