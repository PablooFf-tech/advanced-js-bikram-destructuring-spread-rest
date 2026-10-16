//RESUELVE LOS EJERCICIOS AQUÍ

// Ejercicio 1
const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
];
const [, ana] = empleados;

// Ejercicio 2
const [{ email: emailLuis }] = empleados;

// Ejercicio 3
let a = 5;
let b = 3;
[a, b] = [b, a];

// Ejercicio 4
const HIGH_TEMPERATURES = {
    yesterday: 30,
    today: 35,
    tomorrow: 32,
};

const { today: maximaHoy, tomorrow: maximaManana } = HIGH_TEMPERATURES;
console.log(maximaHoy);
console.log(maximaManana);

// Ejercicio 5
function sumEveryOther(...nums) {
    return nums.reduce((total, num) => total + num, 0);
}

// Ejercicio 6
function addOnlyNums(...args) {
    return args
        .filter((arg) => typeof arg === "number")
        .reduce((total, num) => total + num, 0);
}

// Ejercicio 7
function countTheArgs(...args) {
    return args.length;
}

// Ejercicio 8
function combineTwoArrays(array1, array2) {
    return [...array1, ...array2];
}

// Ejercicio 9
function onlyUniques(...args) {
    return [...new Set(args)];
}

// Ejercicio 10
function combineAllArrays(...arrays) {
    return [].concat(...arrays);
}

// Ejercicio 11
function sumAndSquare(...nums) {
    return nums.reduce((total, num) => total + num ** 2, 0);
}
