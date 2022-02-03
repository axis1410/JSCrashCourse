// const jonasArray = [
//     "Jonas",
//     "Scmedtmann",
//     2022 - 1991,
//     "Teacher",
//     ["Michael", "Peter", "Steven"]
// ];

// var types = [];



// for(var i = 0; i < jonasArray.length; i++)
// {
//     console.log(jonasArray[i], typeof(jonasArray[i]));
    
//     // types[i] = typeof(jonasArray[i]);
//     types.push(typeof(jonasArray[i]));

// }
// console.log(types);


// const years = [1991, 2007, 1969, 2020];
// var ages = [];

// for(i = 0; i < years.length; i++)
// {
//     var age = 2022 - years[i];
//     ages.push(age);
// }

// console.log(ages);


const jonasArray = [
    "Jonas",
    "Scmedtmann",
    2022 - 1991,
    "Teacher",
    ["Michael", "Peter", "Steven"]
];

for(i = jonasArray.length - 1; i >= 0; i--){
    console.log(jonasArray[i]);
}

for(exercise = 1; exercise <= 3; exercise++){
    console.log(`---------- Starting exercise ${exercise}`);

    for(rep = 1; rep <= 10; rep++){
        console.log(`Lifting weights repetition ${rep}`);
    }
}
