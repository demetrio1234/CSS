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
    let selectedArguments = document.getElementById("dropdown__ul").getElementsByTagName("input");
    var inputLink = document.getElementById('input-link');
    var inputTopic = document.getElementById('input-topic');

    try {
        for (let j = 0; j < selectedArguments.length; j++)
            selectedArguments[j].checked = false;

        inputLink.value = "";
        inputTopic.value = "";
    } catch (error) {
        console.log(error)
    }
}