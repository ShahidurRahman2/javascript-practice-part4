




document.getElementById("add-btn").addEventListener("click",function(event){
    event.preventDefault();

    const inputMoney=getInputFieldValueById("input-cashin");
    const inputpin= getInputFieldValueById("cashin-pin")
    if(inputpin ===1234){
       const x=getTextFieldById("balance-id")
       const y=x + inputMoney ;
       document.getElementById("balance-id").innerText=y;

    }
    else{
        alert('nothig')
    }
})





document.getElementById("cash-btn").addEventListener("click",function(event){
    event.preventDefault();

    const inputMoney=getInputFieldValueById("input-cashout");
    const inputpin= getInputFieldValueById("cashout-pin")
    if(inputpin ===1234){
       const x=getTextFieldById("balance-id")
       const y=x - inputMoney ;
       document.getElementById("balance-id").innerText= y ;
       


    //    transection.....createElement dea taka adan podan history
    const p = document.createElement('p');
    p.innerText=`deduct money: ${inputMoney}tk.    newBalance: ${y}tk. `;
    document.getElementById('transition-container').appendChild(p);
    
    }
    else{
        alert('nothig')
    }
})



