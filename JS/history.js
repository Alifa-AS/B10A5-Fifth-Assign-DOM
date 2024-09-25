document.getElementById('input-btn-history').addEventListener('click', function(){
    showSectionById('history-section');

    const historyTab = document.getElementById('input-btn-history');
    const donateTab = document.getElementById('input-btn-donate');
    
    historyTab.classList.add("bg-lime-400") 
    donateTab.classList.remove("bg-lime-400")

})

document.getElementById('input-btn-donate').addEventListener('click', function(){
    showSectionById('main-section');
    const historyTab = document.getElementById('input-btn-history');
    const donateTab = document.getElementById('input-btn-donate');
  
    historyTab.classList.remove("bg-lime-400")
    donateTab.classList.add("bg-lime-400")
    

})
