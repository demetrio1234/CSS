const main = document.querySelector("body main");
main.addEventListener("click", (event) => {
  var targetId = event.target.id;

  let rgx = /-\d+/g;

  if (rgx.test(targetId))
    targetId = targetId.replace(rgx, "");

  switch (targetId) {
    case "button-span":
      let menu = document.querySelector("#nav");

      showHide(menu);
      break;
    case "button-span-red":
      let navUl = document.querySelector("#nav-ul");

      if (navUl.children.length > 0) navUl.children[0].remove();
      break;
    case "-button-span-save":
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
    case "button-span-edit":
      editRow(event.target);
      break;
    case "button-span-delete":
      deleteRow(event.target);
      break;
    case "button-span-save":
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

const modal = document.querySelector("#modal");
if (modal)
  modal.addEventListener("click", (event) => {
    switch (event.target.id) {
      case "modal__select-arguments":
        event.preventDefault();
        break;
      case "modal__button-close":
        clearModalForm(form);
        showHide(event.target.parentElement.parentElement);
        break;
      case "modal__button-save":
        let formData = getModalFormData(form);
        let rowIndex = modal.lastChild.textContent;
        let updatedRow = updateRow(rowIndex, formData);
        clearModalForm(form);
        showHide(modal);
        break;
      default:
        break;
    }
  });

const updateRow = function (rowIndex, formData) {
  let tbody = document.getElementById("tbody");
  let allRows = tbody.getElementsByTagName("tr");

  allRows[rowIndex].cells[0].innerHTML = ``;
  for (let i = 0; i < formData.categories.length; i++) {
    allRows[rowIndex].cells[0].innerHTML += `${formData.categories[i]}`;
    if (i >= 1 && i < formData.categories.length)
      allRows[rowIndex].cells[0].innerHTML += "/\n";
  }

  allRows[rowIndex].cells[1].innerHTML = `<a href="${formData.href}">${formData.href}</a>`;
  allRows[rowIndex].cells[2].innerHTML = `${formData.description}`;
  //allRows[index].cells[3].innerHTML = `${formData.timestamp}`;
  return allRows[rowIndex];
}

const deleteRow = function (deleteButton) {
  let row = findRowByButton(deleteButton);
  let tbody = document.querySelector("tbody");
  let allRows = tbody.getElementsByTagName("tr");
  let indexRowToDelete = Array.from(allRows).indexOf(row);
  allRows[indexRowToDelete].parentNode.removeChild(allRows[indexRowToDelete]);
}

const findRowByButton = function (button) {
  let div = button.parentElement;
  let td = div.parentElement;
  return td.parentElement;
}

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

  var path = window.location.pathname.split("/").pop().split(".")[0]
  var page = path.split("/").pop().replace(".html", "");
  let url = window.location.origin + `/data/${page}-arguments.json`;

  var arguments = [];

  // Fetch the JSON data from the file
  await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
    .then(response => response.json())
    .then(data => {
      // Access the "arguments" array
      arguments = data.arguments;
    })
    .catch(error => console.error('Error fetching the JSON data:', error));

  let i = 0;
  arguments.forEach(argument => {
    let tempName = argument.name;

    item.elements += `<li class="--flex-row" id="dropdown__item_${i}" style="text-align:left;">
                        <input
                          class="--min-height-25"
                          type="checkbox"
                          name="${tempName}"
                          id="input-${tempName + "_" + i}"
                        />&nbsp;&nbsp;
                        <label
                          class="--inline-block --min-width-150 --min-height-25" for="input-${tempName + "_" + i}">${tempName}</label>
                      </li>`;
    i++;
  });

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
};

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
    cellButtons.innerHTML = `<div><span class="button-span-green">Edit</span><span class="button-span-red">Delete</span></div>`;

    resetForm();
  }
};

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
};

const clearModalForm = function (form) {
  let select = form.getElementsByTagName("select");
  let inputs = form.getElementsByTagName("input");

  for (let option of select.arguments.options)
    if (option.textContent && option.textContent.length > 0) {
      option.selected = false;
      option.textContent = '';
    }

  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i] !== null && inputs[i].value !== null && inputs[i].value.length > 0) {
      inputs[i].value = '';
      inputs[i].placeholder = '';
    }
  }
}

const getModalFormData = function (form) {
  let formData = {
    "categories": [],
    "href": "",
    "innerText": "",
    "description": "",
    "summary": "",
    "timestamp": ""
  };

  let select = form.getElementsByTagName("select");
  let inputs = form.getElementsByTagName("input");

  for (let option of select.arguments.options) {
    let selected = option.selected;
    if (selected) {
      formData.categories.push(option.textContent)
    }
  }

  formData.href = inputs[0].value;
  formData.innerText = inputs[0].value;
  formData.description = inputs[1].value;
  formData.timestamp = new Date;

  return formData;
};

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

    if (window.location.pathname.split("/").pop() === "how-to-s.html")
      links = [
        {
          categories: [],
          href: "",
          innerText: "",
          description: "",
          summary: ""
        },
      ];
    else
      links = [
        {
          insertionsDate: "",
          insertionsTitle: "",
          linkToInsertion: "",
          position: [],
          jobPercentage: [],
          jobStartingDate: "",
          companyName: "",
          jobDescription: {
            jobDescription: "",
            jobAttendantResposibilities: [],
            jobAttendantSkills: [],
            employerBenefits: []
          }
        }
      ];

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

    if (i === rows.length - 1)
      links.splice(0, 1);

    links.push(tempRow);
  }

  var jsonData = JSON.stringify(links);
  var a = document.createElement("a");
  var file = new Blob([jsonData], { type: "text/plain" });
  a.href = URL.createObjectURL(file);
  a.download = fileName;
  a.click();

  document.getElementById("form-input-save").value = "";
};

const editRow = function (editButton) {
  let modal = document.querySelector("#modal");

  modal.style.top = Math.ceil(editButton.getBoundingClientRect().y - 13).toString() + "px";
  modal.style.left = Math.ceil(editButton.getBoundingClientRect().x - 500).toString() + "px";
  modal.style.position = "absolute";
  showHide(modal);
  appendIndex(modal, editButton);
  fillModalForm(editButton);
};

const appendIndex = function (element, editButton) {
  let row = findRowByButton(editButton);
  let allRows = tbody.getElementsByTagName("tr")

  const rowIndex = Array.from(allRows).indexOf(row);

  const node = document.createElement("div");
  node.setAttribute("class", "--hidden");
  const textnode = document.createTextNode(`${rowIndex}`);
  node.appendChild(textnode);

  // Append the "li" node to the list:
  element.appendChild(node);
}

const fillModalForm = function (editButton) {
  let page = window.location.pathname.split("/").pop().replace(".html", "");

  fillDropDownByPageAndEvent(`${page}-arguments.json`, editButton);
};

const fillDropDownByPageAndEvent = async function (jsonFileName, editButton) {
  //Read the arguments from the relative file arguments.json
  const response = await fetch(`../data/${jsonFileName}`);
  const argumentsObject = await response.json();
  const arguments = argumentsObject.arguments;
  //Get the section and prefill it with a first empty option 
  let section = document.querySelector("#modal__select-arguments");
  let sectionInnerHtml = '<option value="" id="modal__option-" class=""></option>';

  //Get the row to edit and its textContent
  let row = findRowByButton(editButton);

  //Loop through all arguments and create all options
  for (let argument of arguments) {
    let innerText = row.cells[0].innerText;
    if (innerText.includes(argument.name)) {
      sectionInnerHtml += `<option value="${argument.name}" id="modal__option-${argument.id}" class="" selected>${argument.name}</option>`
    } else {
      sectionInnerHtml += `<option value="${argument.name}" id="modal__option-${argument.id}" class="">${argument.name}</option>`
    }
  }

  section.innerHTML = sectionInnerHtml;

  //Placeholders
  document.querySelector('#modal__input-link').placeholder = row.cells[1].innerText;
  document.querySelector('#modal__input-description').placeholder = row.cells[2].innerText;
  document.querySelector('#modal__input-timestamp').placeholder = row.cells[3].innerText;

  //Values
  document.querySelector('#modal__input-link').value = row.cells[1].innerText;
  document.querySelector('#modal__input-description').value = row.cells[2].innerText;
  document.querySelector('#modal__input-timestamp').value = row.cells[3].innerText;

};
