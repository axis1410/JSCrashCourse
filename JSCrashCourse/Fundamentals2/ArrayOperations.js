var friends = ["Michael", "Steven", "Peter"];
console.log(friends);

// Add elements to array 

var newLength = friends.push("Bob");
console.log(friends);
console.log(newLength);

friends.unshift("John");
console.log(friends);

// Remove elements from array
popped = friends.pop();
console.log(friends);
console.log(popped);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Michael"));
console.log(friends.includes("Steven"));

friends.push(32);
console.log(friends.includes("32"));
console.log(friends.includes(32));

if(friends.includes("Peter")){
    console.log("You have a friend called Peter");
}
else{
    console.log("Peter is not your friend");
}