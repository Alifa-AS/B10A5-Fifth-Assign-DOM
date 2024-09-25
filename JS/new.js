document.getElementById('btn-donate-now').addEventListener('click', function(event){
    event.preventDefault();

    const donateBalance = getDonationValueById('input-donate-Now')
    const accountBalance = getMoneyValueById('account-balance')
    console.log('add money donate',donateBalance, accountBalance) 

    //        // modal part
    // const myModal = document.getElementById('my_modal_6');
    // const myModalMsg = document.getElementById('myModal-msg')
    // const myModalOpen = document.getElementById('open-myModal');
    // const myModalClose = document.getElementById('close-myModal');
     

    });

    if(isNaN(donateBalance) || (donateBalance < 0)){
        alert('Please Enter Valid Amount!')
    }

    else if((donateBalance > accountBalance) || (accountBalance === 0)){
        alert('Donation Failed! You Do not have sufficient Balance.')
        
    }
    else if(donateBalance === ""){
        alert('Enter some valid amount')
    }

    else{
        // myModal.style.display = 'block';
        const balance = getMoneyValueById('account-balance');
        const donateAll = document.querySelectorAll('[id^=btn-donate-now]')
        const newBalance = balance - donateBalance;
        const receiveBalance = getMoneyValueById('donate-received');
        const newReceiveBalance = receiveBalance + donateBalance;

        document.getElementById('donate-received').innerText = newReceiveBalance;

        document.getElementById('account-balance').innerText = newBalance;
        // alert('Donation Successful',donateBalance )
        
        //  //  donate btn foreach
        // donateAll.forEach(button => {
        // button.addEventListener('click', function(){
        //     const inputBalance = button.id.replace('btn-donate-now', 'input-donate-now')
        //     const inputDonate = document.getElementById(inputBalance);
        //     const donateMoney = parseFloat(inputDonate.value);
        // })
         
        // modal
        // myModal.classList.add('active');


        // use loop for another 2 button
        // const button = document.querySelectorAll('btn-donate-now')
        // button.forEach(button >= 0){
        //     button.addEventListener('click', function(event){
        //         event.preventDefault();

        //     })
        // }
        // 
        
        // add history
    const  p = document.createElement('p')
    p.innerText = `
    Added: ${donateBalance} tk. Receive Donation: ${newReceiveBalance} 
    `
    console.log(p)

    document.getElementById('history-container').appendChild(p);


});
// modal 
myModalOpen.addEventListener('click', function(){
    myModal.classList.add('active')
})

 myModalClose.addEventListener('click', function(){
    myModal.remove('active');
 })

// history tab 
// const historyTab = document.getElementById('input-btn-history')
// historyTab.addEventListener('click', function(){
//     historyTab.classList.add('bg-lime-400 hover:bg-lime-300')
//     console.log('hoi nai')
// })