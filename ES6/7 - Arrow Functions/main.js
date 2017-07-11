// shorter syntax and allows to bind lexical this
/*
function Prefixer(prefix){
    this.prefix = prefix;
}

Prefixer.prototype.prefixArray = function(arr){
    return arr.map((x) => {
        console.log(this.prefix + x);
    });
}

let pre = new Prefixer('hello space');

pre.prefixArray(['André', 'Silva']);*/

/*let add = function(a, b){
    let sum = a+b;
    console.log(sum);
    return false;
}

add(2,2);*/

let add = (a, b) => {
    let sum = a+b;
    console.log(sum);
    return false;
}

add(2,2);