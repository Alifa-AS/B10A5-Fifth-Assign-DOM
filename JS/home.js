
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



 function showSectionById(id){
     document.getElementById('main-section').classList.add('hidden')
     document.getElementById('history-section').classList.add('hidden');

     //remove hidden
     document.getElementById(id).classList.remove('hidden')
     
 }

 
