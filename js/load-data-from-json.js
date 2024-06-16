const loadTableData = async function () {
  const page = window.location.pathname.split("/").pop().split(".")[0];
  const response = await fetch(`../data/${page}.json`);
  const links = await response.json();

  fillTable(links);
}

window.onload = loadTableData();
