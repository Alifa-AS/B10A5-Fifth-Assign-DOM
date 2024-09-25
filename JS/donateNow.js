document.getElementById('btn-donate-now').addEventListener('click', function(event){
    event.preventDefault();
document.getElementById('btn-donate-feni').addEventListener('click', function(event){
    event.preventDefault();
document.getElementById('btn-donate-quota').addEventListener('click', function(event){
    event.preventDefault();

    const donateBalance = getDonationValueById('input-donate-Now')
    const accountBalance = getMoneyValueById('account-balance')
    console.log('add money donate',donateBalance, accountBalance)


    if(isNaN(donateBalance) || donateBalance <= 0){
        alert('Please Enter Valid Amount');
        return;
    }
    else if(accountBalance === 0){
        console.log('You Do not have sufficient Balance!');
        return;
    }
    else{
        const balance = getMoneyValueById('account-balance');
        const newBalance = balance - donateBalance;
        const receiveBalance = getMoneyValueById('donate-received');
        const newReceiveBalance = receiveBalance + donateBalance;

        document.getElementById('donate-received').innerText = newReceiveBalance.toFixed(2);
        document.getElementById('account-balance').innerText = newBalance.toFixed(2);
        my_modal_2.showModal()
        const modal = document.getElementById('my_modal_2');
        const closeButton = modal.querySelector('.btn');
        closeButton.addEventListener('click', () =>{
            modal.close;
        })
       
    // div tag create
    const historyItem = document.createElement('div');
        historyItem.classList.add("rounded-md", "border-1-2", "border-gray-600");
        historyItem.innerHTML = `
                  <p class="border-2">${donateBalance} tk. Receive Donation: ${newReceiveBalance}</p>
                  <p class="text-sm" text-gray-500 border-2">${
                  new Date().toLocaleString('en-US',{
                  timeZone: 'Asia/Dhaka',
                  timeStyle: 'medium',
                  dateStyle: 'full'
                  })}
                  </p>
        ` ;
        const historyContainer = document.getElementById('history-container');
        historyContainer.appendChild(historyItem); 
        console.log(historyContainer )        
        console.log(historyItem )        
        document.getElementById('donation-section').add('hidden');
        document.getElementById('history-section').remove('hidden');
     
    }
        // if(donateMoney = 'number'){
        //     my_modal_2.showModal()
        // }
         

})

