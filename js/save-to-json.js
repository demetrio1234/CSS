function saveToJson() {
  let fileName = document.getElementById("form-input-save").value;
  if (fileName.length <= 0 || fileName === null) {
    alert("Please enter a name to save the new json file.");
    return;
  }

  let table = document.getElementById("links-table");
  table = table === null ? document.getElementById("theory-table") : table;

  let rows = table.getElementsByTagName("tr");
  if (rows.length <= 1) {
    alert(
      "Please enter at least a new item in the table to save a new json file."
    );
    return;
  }

  let links = [
    {
      categories: [],
      href: "",
      innerText: "",
      description: "",
      summary: ""
    },
  ];

  for (let i = 0; i < rows.length; i++) {
    let categories = rows[i].cells[0].innerText.split("/");

    let temp = {
      categories: [],
      href: "",
      innerText: "",
      description: "",
      summary: "",
    };

    temp.categories = categories;

    for (let j = 1; j < 3; j++) {
      if (j === 1) {
        temp.href = rows[i].cells[j].getElementsByTagName("a")[0].href;
        temp.innerText =
          rows[i].cells[j].getElementsByTagName("a")[0].innerText;
      } else {
        temp.description = rows[i].cells[j].innerText;
      }
    }

    if (i === links.length)
      links.splice(0, 1);

    links.push(temp);
  }

  links.shift();
  var jsonData = JSON.stringify(links);
  var a = document.createElement("a");
  var file = new Blob([jsonData], { type: "text/plain" });
  a.href = URL.createObjectURL(file);
  a.download = fileName;
  a.click();

  document.getElementById("form-input-save").value = "";
}

/*
//////////////////////////////////////////////////////////
//Node.js:

var fs = require('fs');
fs.writeFile("test.txt", jsonData, function(err) {
    if (err) {
        console.log(err);
    }
});

//////////////////////////////////////////////////////////
//Browser (webapi):

function download(content, fileName, contentType) {
    var a = document.createElement("a");
    var file = new Blob([content], {type: contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}
download(jsonData, 'json.txt', 'text/plain');

*/
