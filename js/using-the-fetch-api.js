async function logLinks() {
    const response = await fetch("../data/exported-links.json");
    const data = await response.json();
    
    if(data !== undefined){
        
        var table = document.getElementById("links-table");

        for (let i = 0; i < data.length; i++) {
            //Add a new row
            var row = table.insertRow(-1);
        
            //Add categories
            let categories = { categories: "" };
            for (let j = 0; j < data[i].categories.length; j++) {
                categories.categories += data[i].categories[j].toString();
                if (j < data[i].categories.length - 1) {
                categories.categories += " /\r\n";
                }
            }
            let cellArgument = row.insertCell(0);
        
            cellArgument.innerText = categories.categories;
        
            //Add link
            let link = data[i].href;
            let text = data[i].href;
            let cellLink = row.insertCell(1);
            cellLink.innerHTML = `<a href="${link}">${text}</a>`;
        
            //Add description
            let cellDescription = row.insertCell(2);
            cellDescription.innerText = data[i].description;
        }
            
        let selectArguments = document.getElementById("selectArguments");
        
        if(data.arguments && selectArguments !== null){
            let arguments = document.getElementById("selectArgument");
            
            let argumentHTML = {"tag":""};
            
            for(let x = 0; x < Object.keys(data.arguments).length; x++) {     
                argumentHTML.tag += `<option value="${x}">${data.arguments[x].name}</option>`;
            }
            
            arguments.innerHTML = `${argumentHTML.tag}`;
        }     
        ddItemsShown = false;
    }
}
  