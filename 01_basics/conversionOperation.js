let score=27
console.log(typeof score);//normal way //o/p=number, n small
console.log(typeof (score));//as a method


let input="99abc"
console.log(typeof input)
//suppose the input we get in in string, but the 100% operations needs to be done with numbers, declare another variable
let valInNumber= Number(input) //N in captal, class based kuch hoti hai

console.log(typeof valInNumber);
console.log(valInNumber)//NaN(not a number)

let a=null
let b=undefined
console.log(a);
console.log(b);

console.log(typeof a);
console.log(typeof b);

let numberConv=Number(a)
let numberConv2=Number(b)
console.log(numberConv);
console.log(numberConv2);

console.log(typeof numberConv);
console.log(typeof numberConv2);

let bool=true
let numBool=Number(bool)
console.log(bool);
console.log(numBool);
console.log(typeof bool);

// "33"=>33
/*"33abc"=> NaN
    "true=>1"
     */

    let isLoggedIn ="\n"
    let boolisLoggedIn=Boolean(isLoggedIn)
    console.log(boolisLoggedIn);
    /* 1 or any integer=true
        0= false
        ""=false
        "xyz"=true
     */
// *************************OPERATIONS*********************


    
    
