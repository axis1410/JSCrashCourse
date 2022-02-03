var day = "wednesday";

console.log("Using switch statements : ")
switch(day)
{
    case "monday":
        console.log("Today is Monday");
        console.log("Go to coding meetup");
        break;
    case "tuesday":
        console.log("Prepare theory videos ");
        break;
    case "wednesday":
    case "thursday":
        console.log("Write code examples");
        break;
    case "friday":
        console.log("record videos");
        break;
    case "saturday":
    case "Sunday":
        console.log("Enjoy the weekend");
        break;
    default:
        console.log("Not a valid day...");
}


console.log("Using If statements : ");
if(day == "monday"){
    console.log("Today is Monday");
    console.log("Go to coding meetup");
}
else if(day == "tuesday"){
    console.log("Prepare theory videos ");
}
else if(day == "wednesday" || day == "thursday"){
    console.log("Write code examples");
}
else if(day == "friday"){
    console.log("record videos");
}
else if(day == "saturday" || day == "sunday"){
    console.log("Enjoy the weekend");
}
else{
    console.log("Invalid day...")
}