function fillTable(links) {
  if (links !== undefined) {
    if (links) {
      let table = document.getElementById("links-table");

      for (let i = 0; i < links.length; i++) {
        //Add a new row
        var row = table.insertRow(-1);

        //Add categories
        let categories = { categories: "" };
        for (let j = 0; j < links[i].categories.length; j++) {
          categories.categories += links[i].categories[j].toString();
          if (j < links[i].categories.length - 1) {
            categories.categories += " /\r\n";
          }
        }
        let cellArgument = row.insertCell(0);

        cellArgument.innerText = categories.categories;

        //Add link
        let link = links[i].href;
        let text = links[i].href;
        let cellLink = row.insertCell(1);
        cellLink.innerHTML = `<a href="${link}">${text}</a>`;

        //Add description
        let cellDescription = row.insertCell(2);
        cellDescription.innerText = links[i].description;
      }
    }

    ddItemsShown = false;
  }
}
