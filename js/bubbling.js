const main = document.querySelector("body main");

main.addEventListener("click", function (event) {
  var targetId = event.target.id;

  switch (targetId) {
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
    case "-btn-span-save":
      let name = document.getElementById("form-input-name");
      let surname = document.getElementById("form-input-surname");
      let birthday = document.getElementById("form-input-birthday");
      let email = document.getElementById("form-input-email");

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
    case "button-add-new-link":
      getFormData();
      event.preventDefault();
      break;
    case "btn-span-save":
      saveToJson();
      event.preventDefault();
      break;
    default:
      break;
  }
});

const header = document.querySelector("header");
header.addEventListener("keyup", (event) => {
  var targetId = event.target.id;

  switch (targetId) {
    case "nav__input-search":
      searchByArgumentLinkTopic();
      break;
    default:
      break;
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

const getFormData = function () {
  let selectedArguments = document.getElementById("dropdown__ul").getElementsByTagName("input");

  let selectedArgumentsNames = []
  for (let item of selectedArguments) {
    if (item.checked === true)
      selectedArgumentsNames.push(item.name);
  }

  let inputLink = document.getElementById('input-link').value;
  let inputTopic = document.getElementById('input-topic').value;

  if (selectedArgumentsNames.length === 0) {
    alert("Please, choose at least an argument.");
    return;
  }
  if (inputLink == null) {
    alert("Please, insert a link.");
    return;
  }
  if (inputTopic == null) {
    alert("Please, insert a topic.");
    return;
  }

  addNewLink(selectedArgumentsNames, inputLink, inputTopic);
}

const addNewLink = function (selectedArgumentsNames, inputLink, inputTopic) {

  let tbody = document.querySelector("tbody");

  if (tbody) {
    var row = tbody.insertRow(0);

    //Add categories
    var categories = "";
    for (let j = 0; j < selectedArgumentsNames.length; j++) {
      categories += selectedArgumentsNames[j];
      if (j < selectedArgumentsNames.length - 1) {
        categories += " /\r\n";
      }
    }

    let cellArgument = row.insertCell(0);
    cellArgument.innerText = categories;

    let cellLink = row.insertCell(1);
    cellLink.innerHTML = `<a href="${inputLink}">${inputLink}</a>`;

    let cellTopic = row.insertCell(2);
    cellTopic.innerText = inputTopic;

    let cellButtons = row.insertCell(3);
    cellButtons.innerHTML = `<div><span class="btn-span-green">Edit</span><span class="btn-span-red">Delete</span></div>`;

    resetForm();
  }
}

const resetForm = function () {
  let dropDownUl = document.getElementById("dropdown__ul");
  let selectedArguments = dropDownUl.getElementsByTagName("input");
  var inputLink = document.getElementById('input-link');
  var inputTopic = document.getElementById('input-topic');

  try {
    for (let j = 0; j < selectedArguments.length; j++)
      selectedArguments[j].checked = false;

    dropDownUl.style.display = "none";
    inputLink.value = "";
    inputTopic.value = "";
  } catch (error) {
    console.log(error)
  }
}

const saveToJson = function () {
  let fileName = document.getElementById("form-input-save").value;
  if (fileName.length <= 0 || fileName === null) {
    alert("Please enter a name to save the new json file.");
    return;
  }

  let tbody = document.querySelector("tbody");
  //table = table === null ? document.getElementById("theory-table") : table;

  let rows = tbody.getElementsByTagName("tr");
  if (rows.length <= 1) {
    alert("Please enter at least a new item in the table to save a new json file.");
    return;
  }

  let links = [
    { categories: [], href: "", innerText: "", description: "", summary: "" },
  ];

  for (let i = 0; i < rows.length; i++) {
    let categories = rows[i].cells[0].innerText.split("/");

    let tempRow = {
      categories: [],
      href: "",
      innerText: "",
      description: "",
      summary: "",
    };

    tempRow.categories = categories;

    for (let j = 1; j < 4; j++) {
      if (j === 1) {
        tempRow.href = rows[i].cells[j].getElementsByTagName("a")[0].href;
        tempRow.innerText =
          rows[i].cells[j].getElementsByTagName("a")[0].innerText;
      } else {
        tempRow.description = rows[i].cells[j].innerText;
      }
    }

    links.push(tempRow);
  }

  var jsonData = JSON.stringify(links);
  var a = document.createElement("a");
  var file = new Blob([jsonData], { type: "text/plain" });
  a.href = URL.createObjectURL(file);
  a.download = fileName;
  a.click();

  document.getElementById("form-input-save").value = "";
}