//login button event handler
var login = document.getElementById('login');
login.addEventListener('click', function(){
    var loginitem = document.getElementById('loginarea');
        loginitem.style.display = "none";
    var deposititem = document.getElementById('depositarea');
        deposititem.style.display = "block";
})

//deposit button event hendler
var depositBtn = document.getElementById('depositBtn');
depositBtn.addEventListener('click', function(){
    var depositNumber = inputNumber('depositAmount')
    updateSpan("currentDeposit", depositNumber);
    updateSpan("currentBalance", depositNumber);
    document.getElementById("depositAmount").value = "";
});

//withdraw button event hendler
var withdrawBtn = document.getElementById('withdrawBtn');
withdrawBtn.addEventListener('click', function(){
    var withdrawNumber = inputNumber('withdrawAmount')
    updateSpan("currentwithdraw", withdrawNumber);
    updateSpan("currentBalance", -1 * withdrawNumber);
    document.getElementById("withdrawAmount").value = "";
});

// inputNumber and updatespan function
function inputNumber(id){
    var amount = document.getElementById(id).value;
    var amountNumber = parseFloat(amount);
    return amountNumber;
}
function updateSpan(id, addedNumber){
    var current = document.getElementById(id).innerText;
    var currentNumber = parseFloat(current);
    var total = addedNumber + currentNumber;
    document.getElementById(id).innerText = total;   
}

