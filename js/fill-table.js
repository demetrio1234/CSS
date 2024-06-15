function fillTable(jsonData) {
  if (jsonData) {

    arrayOfObjects = jsonData["insertions"]
      ? fillInsertionsTable(jsonData["insertions"])
      : fillHowTosTable(jsonData);
  }
  ddItemsShown = false;
}

function fillInsertionsTable(arrayOfObjects) {
  if (arrayOfObjects) {
    let tbody = document.querySelector("tbody");

    arrayOfObjects.forEach(insertion => {
      const row = document.createElement('tr');

      row.innerHTML = `
          <td>${insertion.insertionsDate}</td>
          <td><a href=${insertion.linkToInsertion}>${insertion.insertionsTitle}</a></td>
          <td>${insertion.position.join(', ')}</td>
          <td>${insertion.jobPercentage}</td>
          <td>${insertion.jobStartingDate}</td>
          <td>${insertion.companyName}</td>
          <td>${insertion.jobFirstContactPersonName}</td>
          <td>${insertion.jobFirstContactPersonCompanyPosition}</td>
          <td>${insertion.jobFirstContactPersonEmail}</td>
          <td>${insertion.jobFirstContactPersonPhoneNumber}</td>
          <td>${insertion.addedTimestamp}</td>
          <td>${insertion.modifiedTimestamp}</td>
      `;
      /*
      <td>${insertion.jobDescription.jobDescription}</td>
          <td>${insertion.jobDescription.jobAttendantResposibilities.join(', ')}</td>
          <td>${insertion.jobDescription.jobAttendantSkills.join(', ')}</td>
          <td>${insertion.jobDescription.employerBenefits.join(', ')}</td>
      */
      tbody.appendChild(row);
    });
  }
}

function fillHowTosTable(arrayOfObjects) {
  if (arrayOfObjects) {
    let tbody = document.querySelector("tbody");
    let i = 1;
    arrayOfObjects.forEach(howTo => {
      const row = document.createElement('tr');

      howTo.href.length > 50 ? howTo.href.substring(0, 50) + "..." : howTo.href;

      row.innerHTML = `
          <td>${howTo.categories.join(', ')}</td>
          <td><a href=${howTo.href}>${howTo.href.length > 50 ? howTo.href.substring(0, 50) + "..." : howTo.href}</a></td>
          <td>${howTo.description}</td>
          <td>
            <div class="--flex-row">
              <span id="button-span-edit-${i}" class="button-span-green ">Edit</span>
              <span id="button-span-delete-${i}" class="button-span-red ">Delete</span>
            </div>
          </td>
            `;

      i++;

      tbody.appendChild(row);
    });
  }
}