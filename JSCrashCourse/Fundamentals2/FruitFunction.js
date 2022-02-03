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