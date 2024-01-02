let btnSpan = document.getElementById("button-span");
btnSpan.onclick = btnSpan.onclick === null ? addNewLink : btnSpan.onclick;

let btnSave = document.getElementById("button-span-save");
btnSave.onclick = btnSave.onclick === null ? saveToJson : btnSave.onclick;

let table = document.getElementById("links-table");
table = table === null ? document.getElementById("theory-table") : table;
table.onclick = table.onclick === null ? onClickHandler : table.onclick;
