
function getDonationValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    // console.log(id,inputValue, inputNumber)
    return inputNumber;
}

function getMoneyValueById(id){
    const moneyValue = document.getElementById(id).innerText;
    const moneyNumber = parseFloat(moneyValue);
    return moneyNumber;
}