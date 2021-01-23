var height;
var weight;




height = prompt("Enter Your height");
weight = prompt("Enter Your weight");

tempHeight = parseFloat(height);
tempWeight = parseFloat(weight);
let calcBmi = bmi(tempHeight,tempWeight)

function bmi(heightt,weightt)
{
    return (weightt/(heightt * heightt))
}
if (calcBmi < 18.5) {
    console.log(calcBmi.toFixed(2) + " " + "under weight")
}
if (calcBmi >= 18.5 && calcBmi <=24.9) {
    console.log(calcBmi.toFixed(2) + " " + "Normal weight")
}
if (calcBmi > 25.0 && calcBmi <=29.9) {
    console.log(calcBmi.toFixed(2) + " " + "over weight")
}

