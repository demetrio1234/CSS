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

  let links = undefined;

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

  document.getElementById('saveButton').addEventListener('click', async () => {
    // Check if the File System Access API is supported
    if ('showSaveFilePicker' in window) {
      try {
        // Show the save file dialog
        const fileHandle = await window.showSaveFilePicker({
          suggestedName: 'default-filename.txt',
          types: [
            {
              description: 'Text Files',
              accept: {
                'text/plain': ['.txt'],
              },
            },
          ],
          // You can specify a default directory, but note that this is browser-dependent
          // and may not work in all cases or browsers.
          startIn: 'documents' // or 'desktop', 'downloads'
        });

        // Create a writable stream
        const writableStream = await fileHandle.createWritable();

        // Write data to the file
        await writableStream.write('Hello, world!');

        // Close the writable stream
        await writableStream.close();

        console.log('File saved successfully.');
      } catch (err) {
        console.error('Error saving file:', err);
      }
    } else {
      console.error('File System Access API is not supported in this browser.');
    }
  });





























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
