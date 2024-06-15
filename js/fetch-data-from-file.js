const loadTableData = async function () {

    const response = await fetch("../data/job-insertions.json");
    const links = await response.json();

    fillTable(links);
}

window.onload = loadTableData();
