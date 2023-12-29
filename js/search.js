function searchByArgumentLinkTopic() {
  var inputSearch = document.getElementById("nav__input-search");
  var wordToSearchFor = inputSearch.value.toUpperCase();
  var tbody = document.querySelector("tbody");
  var tr = tbody.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (let i = 1; i < tr.length; i++) {
    for (let j = 0; j < 3; j++) {
      let content = "";
      content = tr[i].getElementsByTagName("td")[0].innerText;
      content += tr[i].getElementsByTagName("td")[1].innerText;
      content += tr[i].getElementsByTagName("td")[2].innerText;

      if (content) {
        if (content.toUpperCase().indexOf(wordToSearchFor.toUpperCase()) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }
}