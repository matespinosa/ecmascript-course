function newFunction(name, age, country){
    var name = name || 'mateo';
    var age = age || 23;
    var country = country || 'COL'
    console.log(name,edad,country);
}

// es6
function newFunction2(name = 'mateo', age = 23, country = 'COL') {
    console.log(name, age, country);
};

newFunction2();
newFunction2('Ricardo', '25', 'MX');

// Template literals -> separar o unir varios elementos

let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
let = epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);


let lorem = "Quiero escribir una frase epica que podemos separar \n"
+ "otra fase epica que necesitamos."

// es6
let lorem2 = `Otra frase epica que necesitamos
ahora es otra frase epica`;

console.log(lorem);
console.log(lorem2);

let person = {
    'name': 'mateo',
    'age': 23,
    'country': 'COL'
}

console.log(person.name, person.age);

let { name, age, country } = person;
console.log(name, country);


let team1 = ['Mateo', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Jessica', 'Camila'];

let education = ['David', ...team1, ...team2];

console.log(education);

{
    var globalvar = "Global var";
}

{
    let globallet = "Global let";
    console.log(globallet);
}

console.log(globalvar);

const a ='b';
a = 'a';

let name = 'Mateo';
let age = 23;

// es5
obj = { name: name, age: age};
// es6
obj2 = { name, age };
console.log(obj2);

const names = [
    {name: 'Mateo', age: 23},
    {name: 'David', age: 25}
]

let listOfNames = names.map(function (item) {
    console.log(item.name);
})

let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, age, country) => {
    ...
}

const listOfNames4 = name => {
    // bloque de código ... 
}

const square = num => num * num;

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve('Hey!');
        } else {
            reject('Ups!');
        }
    })
}

helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('Hola')) //Podemos poner otros then si queremos
    .catch(error => console.log(error));

    class calculator {
        constructor() {
            this.valueA = 0;
            this.valueB = 0;
        }
        sum(valueA, valueB) {
            this.valueA = valueA;
            this.valueB = valueB;
            return this.valueA + this.valueB;
        }
    }

    const calc = new calculator();
    console.log(calc.sum(2,2));

    import { hello } from './module';

    hello();

    function* helloWorld() {
        if (true) {
            yield 'Hello, ';
        }
        if (true) {
            yield 'World';
        }
    };

    const generetorHello = helloWorld(); 
    console.log(generetorHello.next().value);
    console.log(generetorHello.next().value);

    console.log(generetorHello.next().value);

