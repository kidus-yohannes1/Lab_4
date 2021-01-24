
(
    function (){
        var num1;
var num2;
var choose;

choose = prompt("1 for addition\n 2 for subtraction \n 3 for multipication \n 4 for division\n 5 for multiple addition\n 6 multiple multiplication");

if (choose == 1){
    num1 = prompt("please Enter the first number");
    num2 = prompt("please Enter the second number");
    tempNum1 = parseInt(num1);
    tempNum2 = parseInt(num2);
    let sum = add(tempNum1,tempNum2)
    alert(sum)

}
else if (choose == 2){
    num1 = prompt("please Enter the first number");
    num2 = prompt("please Enter the second number");
    tempNum1 = parseInt(num1);
    tempNum2 = parseInt(num2);
    let diffrence = subtract(tempNum1,tempNum2)
    alert(diffrence)

}
else if (choose == 3){
    num1 = prompt("please Enter the first number");
    num2 = prompt("please Enter the second number");
    tempNum1 = parseInt(num1);
    tempNum2 = parseInt(num2);
    let product = multiplay(tempNum1,tempNum2)
    alert(product)

}
else if (choose == 4){
    num1 = prompt("please Enter the first number");
    num2 = prompt("please Enter the second number");
    tempNum1 = parseInt(num1);
    tempNum2 = parseInt(num2);
    let quotient = divide(tempNum1,tempNum2)
    alert(quotient)

}
else if (choose == 5){
    multiple_add()


}
else if (choose == 6){
    multiple_multiplay()

}

function add(n1,n2){
    return (n1 + n2)
}
function subtract(n1,n2){
    return (n1 - n2)
}
function multiplay(n1,n2){
    return (n1 * n2)
}
function divide(n1,n2){
    if(n2 != 0){
        return (n1 / n2)
    }
    else{
        alert("The second number can not be zero")
    }
    
}
function multiple_add(){
    let addition_array = new Array();
    let max_num;
    var mult_sum = 0;
    max_num = prompt("maximum number? ");
    for (let i = 0; i < parseInt(max_num); i++){
        addition_array[i] = prompt("please Enter the number").toString(); 
        mult_sum += parseInt((addition_array[i]));
    }
    alert(mult_sum);

}
function multiple_multiplay(){
    let multipication_array = new Array();
    let max_num;
    var mult_product = 1;
    max_num = prompt("maximum number? ");
    for (let i = 0; i < parseInt(max_num); i++){
        multipication_array[i] = prompt("please Enter the number").toString(); 
        mult_product *= parseInt((multipication_array[i]));
    }
    alert(mult_product);

}




        
    }
)();