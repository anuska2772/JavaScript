const score=400 //automatically js detected the type is number
//but we can explicitly define number as well
console.log(score);

const balance = new Number(400)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));//precision to 2 digits after dot(.)

const number=2.771
//console.log(number.toFixed(1));
console.log(number.toPrecision(3));

const hundreds =10000000 //dificult to see, present therefore use localeString for easier representation
console.log(hundreds.toLocaleString());//represent using ,-> by default US representation
console.log(hundreds.toLocaleString('en-IN'));//in Indian representation
//++++++++++++++++******Maths********++++++++++++++++

console.log(Math);
console.log(Math.abs(-76));//gives the +ve value only
console.log(Math.round(4.46));//mostly used yhan floor, ceil
console.log(Math.ceil(4.001));//gives number >= 4.0
console.log(Math.floor(4.4));//gives number <= 4.0
//Marh.max() , Math.min()
console.log("Math.Random next");

console.log(Math.round((Math.random()*10)) +1);

const min=10
const max=20

console.log(Math.floor(Math.random() * (max-min+1)) + min)






