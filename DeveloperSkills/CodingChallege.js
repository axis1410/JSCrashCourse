const maxTemps1 = [17, 21, 23];
const maxTemps2 = [12, 5, -5, 0, 4];

function printForecast(arr){
    for(i = 0; i < arr.length; i++){
        console.log(`${arr[i]} C in ${i+1} days`)
    }
}

printForecast(maxTemps1)
printForecast(maxTemps2);