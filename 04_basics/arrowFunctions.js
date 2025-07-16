// normal function
// let getExp = function(x,y){
//     let ans=x**y
//     return ans;
// }
// console.log(getExp(2,5));

//arrow function-> remove function keyword, use => after function header
let getExp = (x,y)=>{
        let ans=x**y
        return ans;
    }
console.log(getExp(2,5));

    
/**
 * ARROW FUNCTIONS->
 * 1. Syntax
 * 2. 'arguments' keyword
 * 3. hoisting
 * 4. This keyword
 */
//1. Syntax
const sayHello = ()=>{
    console.log("Hi ANuska");
}
sayHello()

/**
 * const add=(a,b)=>a+b //one liner arrow function
 * const addV2=(a,b)=>{
 *      return a+b
 * }
 */

//2. arguments keyword
//argumets is only available in nromal function and not in arrow function
//therefore use spread operator(...nums)

const add=(...nums)=>{
    console.log(nums);
} 
add(1,2,3,4)

//3. Hoisting- not availbale in arrow function
//4. This keyword

const obj={
    value:20,
    myFunction: function(){
        console.log('value is:'+this.value);
        console.log(this);//normal function this points to this value, current value
    }
}

obj.myFunction()
const obj1={
    val:20,
    func: ()=>{
        console.log(this);//arrow function this point to global window
    }
}
obj1.func()