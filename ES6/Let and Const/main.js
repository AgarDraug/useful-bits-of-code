/*function testVar(){
    var a = 30;
    if(true){
        var a = 50;
        console.log("Testing with var: inside if - " + a);
    }
    console.log("after if - " + a);
}

//testVar();

function testLet(){
    let b = 30;
    if(true){
        let b = 50;
        console.log("Testing with let: inside if - " + b);
    }
    console.log("after if - " + b);
}

//testLet();

for(var i = 0; i< 10; i++){
    console.log(i);
}
console.log(i);
console.log("using let...");
for(let e = 0; e< 10; e++){
    console.log(e);
}
console.log(e);*/

const colors = [];

colors.push('red');
colors.push('blue');

//colors = 'green';
//this doesnt work because constant doesn't let you change the value of the variable
console.log(colors);

/*Let makes it so your variables have a narrower scope,
 making it easier to maintain.
 Const makes it so your variable can't be completly changed 
 after you set it */