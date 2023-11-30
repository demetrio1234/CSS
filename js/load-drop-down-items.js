function showDropDownItems(){

    var dropDown = document.getElementById("dropDownUl");   

    let spanText = document.getElementById("dropDownSpan");

    if(ddItemsShown === false){
        showArguments(dropDown);
        spanText.innerText = "Hide Arguments";
        dropDown.style.display="block";
    }else{
        dropDown.innerHTML = '';
        spanText.innerText = "Show Arguments";
        dropDown.style.display="none";
    }

    ddItemsShown = !ddItemsShown;
}

const showArguments = function (dropDown){
        //let customItems = [ { "index" : null , "name" : null},];

        let item = {"elements":""}

        for(let i = 0; i < data.arguments.length ; i++){
            
            let tempName = data.arguments[i].name;
    
            item.elements += `<li class="inserted-list-item">
                                <input class="custom-checkbox" type="checkbox" name="${tempName}" id="${tempName}" />
                                <label for="${tempName}" class="" name="${tempName}" value="${tempName}">${tempName}</label>
                            </li>`
    
            //customItems.push({index:i, name:item});
        }
    
        dropDown.innerHTML = `${item.elements}`;
}