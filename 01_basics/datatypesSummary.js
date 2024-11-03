 //2 parts- primitive and non primitive
 /* how data is stored in memory and how it is accesed from memory, on the basis of this 
 datatypes are categorized in 2 parts- PRIMITIVE and NON PRIMITIVE
  */

 /* Primitive- 7 types
/**String, 
 * Number, 
 * Boolean, 
 * null(empty), 
 * undefined(variable declared but what value needs to be stored is not decided yet, so undefined),
 * Symbol(make any value unique, use symbol)
 * BigInt
 */

/*Reference type(Non Primitive)
 * Arrays 
 * Objects(very imp)
 * Functions 
 */

//JAVASCRIPT IS A DYNAMICALLY TYPED LANGUAGE

let score=27
let scoreVal=39.8//number only, no variable called float
let isLoggedIn=false
let outTemp=null
let userEmail;//by default value is undefined

const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id === anotherId);

const bigNumber= 123456789098232n //adding n makes this a BigInt

const heroes=["Iron Man", "Captain America","Thor", "Hulk"] //This was array

//now comes object, in curly braces, key-value pairs
let myObj={
    name: "Anuska",
    age: 20,

}

//function, function in js can also be treated as variable

//variable wala tareeka

const myFunc= function(){
    console.log("Hello World");
    
}

console.log(typeof myFunc)
console.log(typeof myObj)
console.log(typeof heroes)





  