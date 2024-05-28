function searchByArgumentLinkTopic() {
  var inputSearch = document.getElementById("nav__input-search");
  var wordToSearchFor = inputSearch.value.toUpperCase();
  var tbody = document.querySelector("tbody");
  var tr = tbody.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (let i = 0; i < tr.length; i++) {

    tr[i].style.display = "none";

    let argument = "";
    argument = tr[i].getElementsByTagName("td")[0].innerText;
    if (argument.toUpperCase().indexOf(wordToSearchFor) > -1) {
      tr[i].style.display = "";
    }

    let link = "";
    link = tr[i].getElementsByTagName("td")[1].innerText;
    if (link.toUpperCase().indexOf(wordToSearchFor) > -1) {
      tr[i].style.display = "";
    }

    let topic = "";
    topic = tr[i].getElementsByTagName("td")[2].innerText;
    if (topic.toUpperCase().indexOf(wordToSearchFor) > -1) {
      tr[i].style.display = "";
    }
  }
}