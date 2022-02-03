function calcAverage(score1, score2, score3)
{
    averageScore = score1+score2+score3;
    return averageScore;
}

function checkWinner(averageDolphin, averageKoala){
    if(averageDolphin / averageKoala >= 2){
        return `Dolphin beat Koala by ${averageDolphin} VS ${averageKoala}`
    }
    else if(averageKoala / averageDolphin >= 2){
        return `Koala beat Dolphin by ${averageKoala} VS ${averageDolphin}`;
    }
    else{
        return "No winner...";
    }
}

const averageDolphin1 = calcAverage(44, 23, 71);
const averageDolphin2 = calcAverage(85, 54, 41);
const averageKoala1 = calcAverage(65, 54, 49);
const averageKoala2 = calcAverage(23, 34, 27);


console.log(checkWinner(averageDolphin1, averageKoala1));
console.log(checkWinner(averageDolphin2, averageKoala2));