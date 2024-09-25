
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

// const historyTab = document.getElementById('input-btn-history');
// const donateTab = document.getElementById('input-btn-donate');
// historyTab.addEventListener('click', function(){
//     historyTab.classList.add("bg-lime-400") 
//     donateTab.classList.remove("bg-lime-400")

// })
 
// const historyTabNew = document.getElementById('input-btn-history');
// const donateTabNew = document.getElementById('input-btn-donate');
// historyTab.addEventListener('click', function(){
//     historyTab.classList.remove("bg-lime-400")
//     donateTab.classList.add("bg-lime-400")
    
// })
 
