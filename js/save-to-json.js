function download() { //content, fileName, contentType

    let table = document.getElementById("links-table");

    let rows = table.getElementsByTagName("tr");

    let links = [{"categories":[], "href": "",
    "innerText": "",
    "description": "",
    "summary": ""}];

    for(let i = 1; i < rows.length ; i++){
        
        let categories = rows[i].cells[0].innerText.split("/");

        //let countCategories = (categories.match("/") || []).length;

        let temp = {categories:[], href:"",innerText:"",description:"",summary:""}

        temp.categories = categories;

        for(let j = 1; j < rows[i].cells.length ;j++ ){

            if(j === 1){
                temp.href = rows[i].cells[j].getElementsByTagName("a")[0].href;
                temp.innerText = rows[i].cells[j].getElementsByTagName("a")[0].innerText;
                
            }else{
                temp.description = rows[i].cells[j].innerText;
            }
            
        }

        links.push(temp);
    }

    var jsonData = JSON.stringify(links);

    console.log(jsonData);

    var a = document.createElement("a");
    var file = new Blob([jsonData], {type: "text/plain" });
    a.href = URL.createObjectURL(file);
    a.download = "exported-links.json";
    a.click();
}

/*
//////////////////////////////////////////////////////////
//Node.js:

var fs = require('fs');
fs.writeFile("test.txt", jsonData, function(err) {
    if (err) {
        console.log(err);
    }
});

//////////////////////////////////////////////////////////
//Browser (webapi):

function download(content, fileName, contentType) {
    var a = document.createElement("a");
    var file = new Blob([content], {type: contentType});
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
}
download(jsonData, 'json.txt', 'text/plain');

*/