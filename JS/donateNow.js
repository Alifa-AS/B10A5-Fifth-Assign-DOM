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

        document.getElementById('donate-received').innerText = newReceiveBalance;

        document.getElementById('account-balance').innerText = newBalance;
        console.log('Donation Successful',donateBalance )

    }
})