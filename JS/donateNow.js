document.getElementById('btn-donate-now').addEventListener('click', function(event){
    event.preventDefault();

    const donateBalance = getDonationValueById('input-donate-Now')
    const accountBalance = getMoneyValueById('account-balance')
    console.log('add money donate',donateBalance, accountBalance)


    if(isNaN(donateBalance) || donateBalance < 0){
        alert('Please Enter Valid Amount')
    }
    else if(accountBalance === 0){
        console.log('You Do not have sufficient Balance!')
    }
    else{
        // myModal.style.display = 'block';
        const balance = getMoneyValueById('account-balance');
        const newBalance = balance - donateBalance;
        const receiveBalance = getMoneyValueById('donate-received');
        const newReceiveBalance = receiveBalance + donateBalance;

        document.getElementById('donate-received').innerText = newReceiveBalance.toFixed(2);
        document.getElementById('account-balance').innerText = newBalance.toFixed(2);
        
        // add history
    // const  p = document.createElement('p')
    // p.innerText = `
    // Added: ${donateBalance} tk. Receive Donation: ${newReceiveBalance} 
    // `
    // console.log(p)

    // document.getElementById('history-container').appendChild(p);

    // }
    
    // div tag create
    const historyItem = document.createElement('div');
        historyItem.classList.add("rounded-md", "border-1-2", "border-gray-600");
        historyItem.innerHTML = `
                  <p>${donateBalance} tk. Receive Donation: ${newReceiveBalance}</p>
                  <p class="text-sm text-gray-500">${
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
        document.getElementById('donation-section').add('hidden')
        document.getElementById('history-section').remove('hidden')
     
    }
        // alert('Donation Successful',donateBalance )
        // if(donateMoney = 'number'){
        //     console.log('ok',donateBalance)
        // }
        // else{
        //     ('go back')
        // }
        // // show the modal
        // const myModal = document.getElementById('my_Modal_6').checked = true;
        // myModal.showModal();

})

