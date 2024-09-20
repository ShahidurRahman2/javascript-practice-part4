

// fuction dea kaj

function getInputFieldValueById(id) {
    const inputmoney =document.getElementById(id).value;
    const money = parseFloat(inputmoney);
    return money;
}

function getTextFieldById(id) {
    const textinput =document.getElementById(id).innerText;
    const textToNumber=parseFloat(textinput);
    return textToNumber;
}



function showSectionById(id){
    document.getElementById("transition-id").classList.add("hidden");
    document.getElementById("add").classList.add("hidden");
    document.getElementById("cashout").classList.add("hidden");
    document.getElementById(id).classList.remove("hidden");
}
