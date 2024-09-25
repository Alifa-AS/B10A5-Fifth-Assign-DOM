document.getElementById('btn-donate-now').addEventListener('click', function(event){
    event.preventDefault();

    const donateBalance = getDonationValueById('input-donate-now')
    const accountBalance = getMoneyValueById('account-balance')
    
    


    if(isNaN(donateBalance) || donateBalance <= 0){
        alert('Please Enter Valid Amount');
        return;
    }
    else if(accountBalance === 0){
        console.log('You Do not have sufficient Balance!');
        return;
    }
    else if(donateBalance > accountBalance){
        alert('insufficient balance!');
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
        historyItem.classList.add("rounded-md", "border-2", "border-gray-300", "container", "mx-auto");
        historyItem.innerHTML = `
                  <p>${donateBalance} tk. Receive Donated for Noakhali, Bangladesh</p>
                  <p class="text-sm">${
                  new Date().toLocaleString('en-US',{
                  timeZone: 'Asia/Dhaka',
                  timeStyle: 'medium',
                  dateStyle: 'full'
                  })}
                  </p>
        ` ;
        document.getElementById('history-section').appendChild(historyItem);
                }
                
                

                const modal = document.getElementById('my_modal_2');
                const closeBtn = document.getElementById('close-btn');
                const continueBtn = document.getElementById('continue-btn');

                function openModal(){
                    modal.showModal();
                }

                function closeModal(){
                    modal.close();
                }

                closeBtn.addEventListener('click', closeModal);
                continueBtn.addEventListener('click',closeModal);
         

})


// feni
document.getElementById('btn-donate-feni').addEventListener('click', function(event){
    event.preventDefault();

    const donateBalance = getDonationValueById('input-donate-feni')
    const accountBalance = getMoneyValueById('account-balance')
    
    


    if(isNaN(donateBalance) || donateBalance <= 0){
        alert('Please Enter Valid Amount');
        return;
    }
    else if(accountBalance === 0){
        console.log('You Do not have sufficient Balance!');
        return;
    }
    else if(donateBalance > accountBalance){
        alert('insufficient balance!');
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
        historyItem.classList.add("rounded-md", "border-2", "border-gray-300", "container", "mx-auto");
        historyItem.innerHTML = `
                  <p>${donateBalance} tk. Receive Donated for Flood Relief at Feni, Bangladesh</p>
                  <p class="text-sm">${
                  new Date().toLocaleString('en-US',{
                  timeZone: 'Asia/Dhaka',
                  timeStyle: 'medium',
                  dateStyle: 'full'
                  })}
                  </p>
        ` ;
        document.getElementById('history-section').appendChild(historyItem);
                }
                
                

                const modal = document.getElementById('my_modal_2');
                const closeBtn = document.getElementById('close-btn');
                const continueBtn = document.getElementById('continue-btn');

                function openModal(){
                    modal.showModal();
                }

                function closeModal(){
                    modal.close();
                }

                closeBtn.addEventListener('click', closeModal);
                continueBtn.addEventListener('click',closeModal);
         

})


// quota
document.getElementById('btn-donate-quota').addEventListener('click', function(event){
    event.preventDefault();

    const donateBalance = getDonationValueById('input-donate-quota')
    const accountBalance = getMoneyValueById('account-balance')
    
    


    if(isNaN(donateBalance) || donateBalance <= 0){
        alert('Please Enter Valid Amount');
        return;
    }
    else if(accountBalance === 0){
        console.log('You Do not have sufficient Balance!');
        return;
    }
    else if(donateBalance > accountBalance){
        alert('insufficient balance!');
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
        historyItem.classList.add("rounded-md", "border-2", "border-gray-300", "container", "mx-auto");
        historyItem.innerHTML = `
                  <p>${donateBalance} tk. Receive Donated for Aid for Injured Quota Movement, Bangladesh</p>
                  <p class="text-sm">${
                  new Date().toLocaleString('en-US',{
                  timeZone: 'Asia/Dhaka',
                  timeStyle: 'medium',
                  dateStyle: 'full'
                  })}
                  </p>
        ` ;
        document.getElementById('history-section').appendChild(historyItem);
                }
                
                

                const modal = document.getElementById('my_modal_2');
                const closeBtn = document.getElementById('close-btn');
                const continueBtn = document.getElementById('continue-btn');

                function openModal(){
                    modal.showModal();
                }

                function closeModal(){
                    modal.close();
                }

                closeBtn.addEventListener('click', closeModal);
                continueBtn.addEventListener('click',closeModal);
         

})

const historyContainer = document.getElementById('history-container');
            historyContainer.appendChild(historyItem); 
            console.log(historyContainer )        
            console.log(historyItem )        
            document.getElementById('donation-section').add('hidden');
            document.getElementById('history-section').remove('hidden');



