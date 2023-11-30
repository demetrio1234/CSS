var table = document.getElementById("links-table");

var data = {
  links: [
    {
      categories: ["JS", "*"],
      href: "https://www.w3schools.com/whatis/whatis_json.asp",
      innerText: "https://www.w3schools.com/whatis/whatis_json.asp",
      description: "What is JSON?",
      summary: "",
    },
    {
      categories: ["JS"],
      href: "https://stackoverflow.com/questions/20180251/when-to-use-window-onload",
      innerText:
        "https://stackoverflow.com/questions/20180251/when-to-use-window-onload",
      description: 'When to use "window.onload"?',
      summary: "",
    },
    {
      categories: ["JS"],
      href: "https://stackoverflow.com/questions/1408289/how-can-i-do-string-interpolation-in-javascript",
      innerText:
        "https://stackoverflow.com/questions/1408289/how-can-i-do-string-interpolation-in-javascript",
      description: "How can i do string interpolation in JavaScript?",
      summary: "",
    },
    {
      categories: ["JS", "JSON"],
      href: "https://stackoverflow.com/questions/7081165/javascript-how-to-find-number-of-children-in-an-object",
      innerText:
        "https://stackoverflow.com/questions/7081165/javascript-how-to-find-number-of-children-in-an-object",
      description: "How to find number of children in an object",
      summary: "",
    },

    {
      categories: ["HTML"],
      href: "https://www.w3schools.com/TAGs/tag_code.asp",
      innerText: "https://www.w3schools.com/TAGs/tag_code.asp",
      description: "code",
      summary: "",
    },

    {
      categories: ["HTML"],
      href: "https://code-boxx.com/display-code-snippets-html/",
      innerText: "https://code-boxx.com/display-code-snippets-html/",
      description: "Display Code Snippets in HTML (Simple Examples)",
      summary: "",
    },
  ],
  arguments : 
    [
        {
            "id": 0,
            "name": "HTML",
            "description": ""
        },
        {
            "id": 1,
            "name": "CSS",
            "description": ""
        },
        {
            "id": 2,
            "name": "JS",
            "description": ""
        },
        {
            "id": 3,
            "name": "JSON",
            "description": ""
        }
    ]
};

if(data !== undefined){

  if(data.links){
    for (let i = 0; i < Object.keys(data.links).length; i++) {
      //Add a new row
      var row = table.insertRow(-1);

      //Add categories
      let categories = { categories: "" };
      for (let j = 0; j < data.links[i].categories.length; j++) {
        categories.categories += data.links[i].categories[j].toString();
        if (j < data.links[i].categories.length - 1) {
          categories.categories += " /\r\n";
        }
      }
      let cellArgument = row.insertCell(0);

      cellArgument.innerText = categories.categories;

      //Add link
      let link = data.links[i].href;
      let text = data.links[i].href;
      let cellLink = row.insertCell(1);
      cellLink.innerHTML = `<a href="${link}">${text}</a>`;

      //Add description
      let cellDescription = row.insertCell(2);
      cellDescription.innerText = data.links[i].description;
    }

  }

  let selectArguments = document.getElementById("selectArguments");

  if(data.arguments && selectArguments !== null){
    let arguments = document.getElementById("selectArgument");

    let argumentHTML = {"tag":""};

    for(let x = 0; x < Object.keys(data.arguments).length; x++) {     
      argumentHTML.tag += `<option value="${x}">${data.arguments[x].name}</option>`;
    }

    arguments.innerHTML = `${argumentHTML.tag}`;
  }

  var ddItemsShown = false;
}