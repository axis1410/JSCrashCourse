// const friends = ["Michael", "Steven", "Peter"]
// console.log(friends);

// var years = new Array(1991, 1964, 2002, 2020);
// console.log(years);

// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends[2]);
// console.log(friends.length);
// console.log(typeof(friends));

// console.log(friends[friends.length -1]);

// friends[2] = 'Jay';
// console.log(friends);

// const firstName = "Jonas"

// var jonas = [firstName, "Schmedtmann", 2022 - 1991, "Teacher", friends];

// console.log(jonas);
// console.log(jonas.length);

// Exercise

function calcAge(birthYear)
{
    return 2022 - birthYear;
}

const birthYears = [1990, 1967, 2001, 2021, 2010, 2019]
const ages = [];

for(i = 0; i < birthYears.length; i++){
    age = calcAge(birthYears[i]);
    ages.push(age);
}

console.log(ages);