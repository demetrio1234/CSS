function searchByArgumentLinkTopic() {
    var input, filter, table, tr, td, i, txtValue, aTables;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    table = document.getElementById("links-table");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 1; i < tr.length; i++) {
      for (j = 0; j < 3; j++) {
        let content = "";
        content = tr[i].getElementsByTagName("td")[0].innerText;
        content += tr[i].getElementsByTagName("td")[1].innerText;
        content += tr[i].getElementsByTagName("td")[2].innerText;

        if (content) {
          if (content.toUpperCase().indexOf(filter.toUpperCase()) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
      }
    }
  }