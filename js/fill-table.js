function fillTable(links) {
  if (links !== undefined) {
    if (links) {
      let tbody = document.querySelector("tbody");

      for (let i = 0; i < links.length; i++) {
        //Add a new row
        var row = tbody.insertRow(-1);

        //Add categories
        let categories = { categories: "" };
        for (let j = 0; j < links[i].categories.length; j++) {
          categories.categories += links[i].categories[j].toString();
          if (j < links[i].categories.length - 1) {
            categories.categories += "/";
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

        //Add Buttons
        let cellButtons = row.insertCell(3);
        cellButtons.innerHTML = `<div id="div-btn-span-edit">
                                   <span class="btn-span-green">Edit</span>
                                 </div>
                                 <div id="div-btn-span-delete">
                                   <span class="btn-span-red">Delete</span>
                                 </div>`;
      }
    }

    ddItemsShown = false;
  }
}
