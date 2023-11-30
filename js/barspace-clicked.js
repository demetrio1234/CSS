window.onkeydown = function(event){

    let btnSpan = document.getElementById("btnSpan");
    let dropDownSpan = document.getElementById("dropDownSpan");

    if( document.activeElement === btnSpan && event.keyCode === 32){
        event.preventDefault();
        btnSpan.click();
    }else if(document.activeElement === dropDownSpan && event.keyCode === 32){
        event.preventDefault();
        dropDownSpan.click();
    }       
}