console.log('App has been updated. App restarted.');


// var square = (x) => x * x; // Arrow function can be one line if a single line of code to execute. Automatically returns.

var square = (x) => {
    var result = x * x;
    return result;
};

console.log(square(9));

var user = {
    name: 'Patrick',
    sayHi: () => { // Anonymous arrow function/method declaration. // Arrow Function Issues: Do not bind "this" keyword. 
        console.log(`Hi I'm ${this.name}.`);
    },
    sayHiAlt () {
        console.log(`Hi I'm ${this.name}.`);
    }
};


user.sayHi();