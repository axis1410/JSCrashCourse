function calcAge(birthYear)
{
    return 2022 - birthYear;
}

var yearsUntilRetirement = function(birthYear, firstName) 
{
    const age = calcAge(birthYear);
    const retirementAge = 65 - age;

    if(retirementAge > 0)
    {
        console.log(`${firstName} retires in ${retirementAge} years`);
        return retirementAge;
    }
    else
    {
        console.log(`${firstName} has already retired`);
        return -1;
    }

    // return `${firstName} retires in ${retirementAge} years`;
}

console.log(yearsUntilRetirement(1991, "Bob"));
console.log(yearsUntilRetirement(1955, "Mike"));
