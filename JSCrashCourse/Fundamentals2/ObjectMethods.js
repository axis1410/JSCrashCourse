const jonasArr = 
{
    firstName : "Jonas",
    lastName : "Schmedtmann",
    birthYear: 1991,
    job : "Teacher",
    friends : ['Michael', 'Peter', 'Steven'],
    hasDriversLicense : true,
    
    calcAge: function()
    {
        this.age = 2022 - this.birthYear;
        return this.age;
    },

    getSummary: function()
    {
        if (this.hasDriversLicense){

            return `${this.firstName} is a ${this.calcAge()} year old ${jonasArr.job}, and he has a driver's license`;
        }
        else{
            return `${this.firstName} is a ${this.calcAge()} year old ${jonasArr.job}, and he has no driver's license`;
        }
    
    }

    // calcAge: function(){
    //     // console.log(this);
    //     return 2022 - this.birthYear;
    // }

    // calcAge : function(birthYear)
    // {
    //     return 2021 - birthYear;
    // }

    

};

console.log(jonasArr.calcAge());

console.log(this.calcAge());
console.log(this.calcAge());
console.log(this.calcAge());

// Challenge
// "Jonas is a 31 year old teacher, and he has a driver's license."

console.log(jonasArr.getSummary());