const main = document.querySelector("body main");

main.addEventListener("click", function (event) {
  var cName = event.target.className;

  cName = event.target.id;

  switch (cName) {
    case "btn-span":
      let menu = document.querySelector("#nav");

      showHide(menu);
      break;
    case "btn-span-green":
      //Edit event is fired up
      let modal = document.getElementById("div-modal");

      showHide(modal);
      break;
    case "btn-span-red":
      let navUl = document.querySelector("#nav-ul");

      if (navUl.children.length > 0) navUl.children[0].remove();
      break;
    case "btn-span-save":
      let name = document.getElementById("frm-input-name");
      let surname = document.getElementById("frm-input-surname");
      let birthday = document.getElementById("frm-input-birthday");
      let email = document.getElementById("frm-input-email");

      if (name.value.length > 0) {
        let tbody = document.querySelector("tbody");

        let row = tbody.insertRow(-1);

        let cellName = row.insertCell(0);
        let cellSurname = row.insertCell(1);
        let cellBirthday = row.insertCell(2);
        let cellEmail = row.insertCell(3);

        cellName.innerText = name.value;
        cellSurname.innerText = surname.value;
        cellBirthday.innerText = birthday.value;
        cellEmail.innerText = email.value;
      }
      break;
    case "dropdown__button":
      showHideDropDownItems();
      break;
    default:

  }
});

const showHide = function (element) {
  if (element.classList.contains("--hidden")) {
    element.classList.remove("--hidden");
  } else {
    element.classList.add("--hidden");
  }
};

const showHideDropDownItems = function () {
  const dropDownUl = document.getElementById("dropdown__ul");

  if (dropDownUl && dropDownUl.innerHTML.length <= 0) {
    showDropDownItems();
  } else {
    hideDropDownItems();
  }
}

const hideDropDownItems = function () {

  let dropDownSpan = document.getElementById("dropdown__span");
  let dropDownUl = document.getElementById("dropdown__ul");
  let dropDownArrow = document.getElementById("dropdown__arrow")
  while (dropDownUl.firstChild) {
    dropDownUl.removeChild(dropDownUl.lastChild);
  }

  dropDownSpan.classList.add("--hidden");
  dropDownArrow.classList.remove("arrow__direction--down");

};

const showDropDownItems = async function () {

  let dropDownUl = document.getElementById("dropdown__ul");
  let dropDownSpan = document.getElementById("dropdown__span");
  let dropDownArrow = document.getElementById("dropdown__arrow");

  let item = { elements: "" };

  const response = await fetch("../data/arguments.json");
  const arguments = await response.json();

  for (let i = 0; i < arguments.arguments.length; i++) {
    let tempName = arguments.arguments[i].name;

    item.elements += `<li class="--flex-row" id="dropdown__item_${i}" style="text-align:left;">
                        <input
                          class=""
                          type="checkbox"
                          name="${tempName}"
                          id="input-${tempName + "_" + i}"
                        />&nbsp;
                        <label class="--inline-block --min-width-50" for="input-${tempName + "_" + i}">${tempName}</label>
                      </li>`;
  }

  dropDownArrow.classList.add("arrow__direction--down");
  dropDownSpan.style.display = "block";
  dropDownSpan.style.position = "absolute";
  dropDownSpan.classList.remove("--hidden");
  dropDownSpan.classList.add("--bg-antiquewhite");

  dropDownUl = document.getElementById("dropdown__ul");

  dropDownUl.style.position = "relative";
  dropDownUl.innerHTML = `${item.elements}`;
};