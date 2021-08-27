require('dotenv').config();

let NAME = process.env.NAME || "without name";
let NUM = process.env.NUM || "without number";

console.log('Hola ' + NAME);
console.log('Your number is ' + NUM );