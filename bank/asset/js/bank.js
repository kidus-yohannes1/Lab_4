let personProfile = {
    Name: "Kidus",
    balance: "34",
    account_no: "344",
    Password: "1234"
}
let personProfile1 = {
    Name: "Kassu",
    balance: "25",
    account_no: "3445",
    Password: "abcd"
}



function balance(){
    var x =  prompt("Enter Your account number");
    var y = prompt('Enter your password')
if ((x == personProfile.account_no) &&  (y == personProfile.Password)){
    alert(personProfile.balance);

}
else if((x == personProfile1.account_no) &&  (y == personProfile1.Password)){
    alert(personProfile1.balance);

}
else{
    alert("you don't have an account please create account ")
}
}
function Withdrawal(){
    var x =  prompt("Enter Your account number");
    var y = prompt('Enter your password')
    if ((x == personProfile.account_no) &&  (y == personProfile.Password)){
        var amount = prompt("HOw much money to be withdrawn")
        personProfile.balance = parseInt(personProfile.balance) - parseInt(amount)
        alert("Your current balance is " + personProfile.balance);
    
    }
    else if((x == personProfile1.account_no) &&  (y == personProfile1.Password)){
        var amount = prompt("HOw much money to be withdrawn")
        personProfile1.balance = parseInt(personProfile1.balance) - parseInt(amount)
        alert("Your current balance is " + personProfile1.balance);
    
    }
    else{
        alert("you don't have an account please create account ")
    }

}

function deposit(){

    var x =  prompt("Enter Your account number");
    var y = prompt('Enter your password')
    if ((x == personProfile.account_no) &&  (y == personProfile.Password)){
        var amount = prompt("HOw much money to be deposited")
        personProfile.balance = parseInt(personProfile.balance) + parseInt(amount)
        alert("Your current balance is " + personProfile.balance);
    
    }
    else if((x == personProfile1.account_no) &&  (y == personProfile1.Password)){
        var amount = prompt("HOw much money to be deposited")
        personProfile1.balance = parseInt(personProfile1.balance) + parseInt(amount)
        alert("Your current balance is " + personProfile1.balance);
    
    }
    else{
        alert("you don't have an account please create account ")
    }


}



(function(){
    
    var choose;
    choose = prompt("1 for balance\n 2 for deposit \n 3 for transfer \n 4 for withdraw");
    if (choose == 1){
        balance()
    }
    if (choose == 2){
        deposit()
    }
    if (choose == 3){
        transfer()
    }
    if (choose == 4){
        Withdrawal()
    }
    
    



})();