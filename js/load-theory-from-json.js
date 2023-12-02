async function loadTheoryFromJson() {
  const fetchedData = await fetch("../data/theory-links.json");
  const json = await fetchedData.json();

  console.log(json);
}

window.onload = loadTheoryFromJson();
