let name = 'André';

function makeUppercase(word){
    return word.toUpperCase();
}

//Using `` instead of '' allows us to "break" the strings without concatenating

let template = `<h1>${makeUppercase('hello')}, ${name}</h1>
                <p>This is a simple template in JavaScript</p>`;

document.getElementById('template').innerHTML = template;