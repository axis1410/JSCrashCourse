var bills = [125, 555, 44];
var tip = [];
var cost = [];


// If bill is between 300 and 50, tip = 15%
// Otherwise tip = 20%

function calcTip(bill){
    if(bill <= 300 && bill >= 50){
        return bill * 0.15;
    }
    else{
        return bill * 0.2;
    }
}

for(i = 0; i < bills.length; i++){
    var bill = bills[i];
    calcTip(bill);
    console.log(`Tip value for ${bills[i]} = ${calcTip(bill)}`);
    tip.push(calcTip(bill));
    var finalPrice = calcTip(bill) + bills[i];
    cost.push(finalPrice);
}

console.log(bills);
console.log(tip);
console.log(cost);