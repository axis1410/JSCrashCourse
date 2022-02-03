// const jonasArray = [
//     'Jonas',
//     'Schmedtmann',
//     2022 - 1991,
//     'Teacher',
//     ['Michael', 'Peter', 'Steven']
// ];

// // Objects (Key-Value Pairs)

// var jonas = {
//     firstName : "Jonas",
//     lastName : "Schmedtmann",
//     age : 2022 - 1991,
//     job : "Teacher",
//     friends : ['Michael', 'Peter', 'Steven']
// };

// jonas.location = "Portugal"
// jonas["twitter"] = "@jonasschmedtmann";
// console.log(jonas)


// // console.log(jonas);

// // console.log(jonas.firstName);
// // console.log(jonas["lastName"]);

// // const nameKey = "Name";

// // console.log(jonas.nameKey);
// // console.log(jonas["first" + nameKey]);
// // console.log(jonas["last" + nameKey]);

// // const interestedIn = prompt("What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends.");
// // console.log(jonas[interestedIn]);

// // if(jonas[interestedIn]){
// //     console.log(jonas[interestedIn]);
// // } 
// // else{
// //     console.log("Wrong request")
// //     prompt("What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends.");
// // }


// Challenge
// Jonas has 3 friends, best friend is called Michael"

var jonasArr = {
    firstName : "Jonas",
    lastName : "Schmedtmann",
    age : 2022 - 1991,
    job : "Teacher",
    friends : ['Michael', 'Peter', 'Steven']

}
console.log(`${jonasArr.firstName} has ${jonasArr.friends.length}, and his best friend is called ${jonasArr.friends[0]}`);