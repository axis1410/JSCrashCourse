// Value between 300 and 50 : tip = 15%
// Value not between 300 and 50 : tip = 20%

var tip;
var value1 = 275, value2 = 40, value3 = 430;
var value = [275, 40, 430];

for (i = 0; i < value.length; i++){
    tip = value[i] <= 300 && value[i] >= 50 ? value[i] * 0.15 : value[i] * 0.2;
    console.log(`The value was ${value[i]}, the tip was ${tip}, and the total value is ${value[i] + tip}`)
}


