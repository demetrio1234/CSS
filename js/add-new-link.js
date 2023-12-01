function addNewLink() {
    let formNewLink = document.getElementById("formNewLink");

    if (formNewLink !== null) {
      let table = document.getElementById("links-table");

      if (table !== null) {
        let formCustomDropDown =
          document.getElementById("formCustomDropDown");

        if (formCustomDropDown !== null) {
          let dropDownUl = document.getElementById("dropDownUl");

          if (dropDownUl !== null) {
            let customCheckbox =
              document.getElementsByClassName("custom-checkbox");

            if (customCheckbox !== null && customCheckbox.length > 0) {
              let arguments = [{ id: null, value: "" }];
              let index = { index: 0 };
              for (let i = 0; i < customCheckbox.length; i++) {
                if (customCheckbox[i].checked === true) {
                  index.index++;

                  arguments.push({
                    id: index.index,
                    value: customCheckbox[i].id,
                  });
                }
              }
              arguments.splice(0, 1);

              if (arguments.length > 0) {
                let inputLink = document.getElementById("inputLink");
                let inputTopic = document.getElementById("inputTopic");

                if (
                  inputLink.value !== null &&
                  inputLink.value.length > 0 &&
                  inputTopic.value !== null &&
                  inputTopic.value.length > 0
                ) {
                  var row = table.insertRow(-1);

                  //Add categories
                  let categories = { categories: "" };
                  for (let j = 0; j < arguments.length; j++) {
                    categories.categories += arguments[j].value;
                    if (j < arguments.length - 1) {
                      categories.categories += " /\r\n";
                    }
                  }
                  let cellArgument = row.insertCell(0);
                  cellArgument.innerText = categories.categories;

                  let cellLink = row.insertCell(1);
                  cellLink.innerHTML = `<a href="${inputLink.value}">${inputLink.value}</a>`;

                  let cellTopic = row.insertCell(2);
                  cellTopic.innerText = inputTopic.value;

                  //Reset inputForm
                  for (let j = 0; j < customCheckbox.length; j++) {
                    customCheckbox[j].checked = false;
                  }

                  inputLink.value = "";
                  inputTopic.value = "";
                }
              }
            }
          }
        }
      }
    }
  }