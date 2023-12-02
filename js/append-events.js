let btnSpan = document.getElementById("btn-span");
btnSpan.onclick = btnSpan.onclick === null ? addNewLink : btnSpan.onclick;

let btnSave = document.getElementById("btn-span-save");
btnSave.onclick = btnSave.onclick === null ? saveToJson : btnSave.onclick;
