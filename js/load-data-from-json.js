async function logLinks() {
  const response = await fetch("../data/exported-links.json");
  const links = await response.json();

  fillTable(links);
}
