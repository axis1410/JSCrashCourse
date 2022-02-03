var tips = [];
var totals = [];
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

function calcTip(bill){
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}


for(i = 0; i < bills.length; i++){
    bill = bills[i];
    tip = calcTip(bill);
    total = tip + bill;

    totals.push(total);
    tips.push(tip);
}

console.log(bills);
console.log(tips);
console.log(totals);

function calcAverage(arr){
    var sum = 0;
    for(i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum.toFixed(2);
}

console.log(calcAverage(totals));
console.log(calcAverage(tips));