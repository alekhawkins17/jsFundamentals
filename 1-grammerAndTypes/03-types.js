// BOOLEAN: has two possible values of either thrue or false

let on = true;
console.log(on);

let off = false;
console.log(off);

// NULL: null is an empty value. Think of it as an empty container. Nothing is in it, but it can be filled in later.

let empty = null;
console.log(empty);

// UNDEFINED: no value is assigned and does not act as an empty container.

let undef = undefined;
console.log(undef);

let correct;
console.log(correct);

// NUMBERS: numbers are literally numbers. Also reffered to as interger.

let degrees = 85;
console.log(degrees);

let precise = 999999999999999999999; //15 9's
console.log(precise);

let rounded = 9999999999999999999999; //16 9's
console.log(rounded);

let notQuite = 0.2 + 0.1;
console.log(notQuite)

let a = Number('123');
console.log(a);

// STRING: datatype used to represent text. Either wrapped in single or double quotes. '' ""

let stringOne = 'single quotes';
let stringTwo = "double quotes";
console.log(stringOne, stringTwo);

// numbers vs. strings
let first = 1050 + 100;
console.log(first);

let second = '1050' + '100';
console.log(second);

//OBJECTS: objects are used to store many values instead of a singular value. Objects hold key value pairs.

let frodo = {
race: 'hobbit',
rings: 1,
cloak: true
}

console.log(frodo);
console.log(typeof frodo);

//ARRAY: containers that hold a list of items.

let burritos = ['large', 5, true];
console.log(burritos);
console.log(typeof burritos);

//addition and concatenation
let third = 1050 + '100';
console.log(third);
console.log(typeof third);

//challenge

let firstName = 'Alek';
let lastName = 'Hawkins';
let houseNumber = 3119;
let street = 'arrowroot way';
let city = 'Indianapolis';
let state = 'Indiana';
let zipcode = 46239;

console.log(houseNumber + ' ' + street);
console.log(houseNumber, street);

//STRING PROPERTIES
    // properties are qualities associated with a data type.
    // strings and numbers both have qualities associated with them, and their own properties.

let myName = 'Alek';
console.log(myName.length); // only time javascript doesnt start counting from 0.

//STRING METHODS: methods are tools that help us manipulate our data.
    // properties use '.', methods use '.Methods()'

let myNameIs = 'Alek';
console.log(myNameIs.toUpperCase());

let home = 'my home is greenwood';
console.log(home.includes('greenwood'));

let sent = ('this sentence will be split into individual parts');
console.log(sent.split(''));
    
