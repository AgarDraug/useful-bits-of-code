//Default Params
/*

function greet($greeting = 'Hello world'){//lets us set a default value if nothing is passed on
    console.log($greeting)
}

greet();*/

//Spread Operator

let args = [1,2,3];
let args2 = [4,5,6];

function test(){
    console.log(args + ',' + args2);
}

//test.apply(null, args); ES5 method
test(...args,...args2);