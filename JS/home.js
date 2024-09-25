
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


//  document.getElementById('btn-donate-feni').addEventListener('click',function(){
//     const feniDonate = document.getElementById('input-donate-feni').value;
    
//  })
//  document.getElementById('btn-donate-quota').addEventListener('click',function(){
//     const quotaDonate = document.getElementById('input-donate-quota').value;
    
//  })

//  main section 3 btn

// const getAllDonateSection = [
//     {idOfButton: 'btn-donate-now', idOfInput: 'input-donate-now', subject: 'Noakhali'},
//     {idOfButton: 'btn-donate-feni', idOfInput: 'input-donate-feni', subject: 'Feni'},
//     {idOfButton: 'btn-donate-quota', idOfInput: 'input-donate-quota', subject: 'Quota'},
// ];

// getAllDonateSection.forEach(section =>{
//     document.getElementById(section.idOfButton).addEventListener('click', function(){
//         const donationAmountValue = document.getElementById(section.idOfInput).value;

//         if(donationAmount){
//             alert(`${donateBalance} tk. Receive Donation: ${section.name}`)
           
//          }
//         else{
//             alert('please enter valid amount')
//         }
//     })
// });
