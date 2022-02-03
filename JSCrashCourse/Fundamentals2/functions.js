// function logger()
// {
//     console.log(`My name is Bruh`);
// }

// logger();

// function fruitProcessor(apples, oranges){
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges}`;
//     return juice;
// }

// const appleJuice = fruitProcessor(4, 0);
// const orangeJuice = fruitProcessor(0, 21);
// const totalJuice = fruitProcessor(4, 21);

// console.log(appleJuice);
// console.log(orangeJuice);
// console.log(totalJuice);

// const num = Number('14');
// console.log(typeof(num));

// function calcAge1(birthYear)
// {
//     var age = 2021 - birthYear;
//     return age;
// }

// const calcAge2 = function (birthYear)
// {
//     return 2021 - birthYear;
// }

// const age2 = calcAge2(1991);
// const age1 = calcAge1(1991);
// console.log(age1);
// console.log(age1, age2);

function cutFruitPieces(fruit){
    return fruit * 4;
}

function fruitProcessor(apples, oranges){
    var applePieces = cutFruitPieces(apples);
    var orangePieces = cutFruitPieces(oranges);


    console.log(apples, oranges);
    const juice = `Juice with ${applePieces} of apples and ${orangePieces} of orange`;
    return juice;
}

console.log(fruitProcessor(2,3));


