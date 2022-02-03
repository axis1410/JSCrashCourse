// console.log("FOR LOOP")
// for(i = 1; i <= 10; i++){
//     console.log(`Lifting weights repetition ${i}`);
// }

// var rep = 1

// console.log("WHILE LOOP ");
// while(rep <= 10){
//     console.log(`Lifting weights repetition ${rep}`);
//     rep++;
// }

var dice = Math.trunc((Math.random() * 6) + 1);

while(dice !== 6)
{
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc((Math.random() * 6) + 1);
    
    if(dice == 6)
    {
        console.log(`You rolled a ${dice}`);
        console.log(`Loop terminated`);
    }
}


