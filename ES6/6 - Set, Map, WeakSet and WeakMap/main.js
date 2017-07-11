
// SET
let myArray = [11,22,33,44,55,33]; //last 33 wont show because every value has to be unique 
let mySet = new Set(myArray);

mySet.add('100');
mySet.add({
    a:1,
    b:2
});


//console.log(mySet.size); 

// MAP

/*mySet.forEach(function(val){
    console.log(val);
})*/

let myMap = new Map([['a1','Hello'], ['b2', 'Bye']]);
myMap.set('c3', 'foo');
myMap.delete('a1');
//console.log(myMap);

//WeakSet - creates a set of objects
/*
let carWeakSet = new WeakSet();

let car1 = {
    make: 'Honda',
    model: 'Civic'
}

let car2 = {
    make: 'Toyota',
    model: 'Auris'
}

carWeakSet.add(car1);
carWeakSet.add(car2);

carWeakSet.delete(car1);

console.log(carWeakSet);*/

// WeakMap - Same as above but with key-value pairs

let carWeakMap = new WeakMap();

let key1 = {
    id:1
}

let car1 = {
    make: 'Honda',
    model: 'Civic'
}

let key2 = {
    id:2
}

let car2 = {
    make: 'Toyota',
    model: 'Auris'
}

carWeakMap.set(key1, car1);
carWeakMap.set(key2, car2);

console.log(carWeakMap);