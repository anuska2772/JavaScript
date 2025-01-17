/**
 * Function-> first class citizens, since it performs a lot of operations
 * ->assign variable
 * ->passed as argument
 * ->return function
 * ->use function in DS
 * ->as a property
 * 
 */
//1. assign variable
// let greet=function(){
//     console.log("Hello");
    
// }
// greet()

//2. passed as an argument

// function greetMe(greet, fullName){
//     console.log("Hello ",fullName);
//     greet();
    

// }
// function greet(){
//     console.log("Have a Nice Day!");
    
// }

// greetMe(greet,"Anuska")

//3. Return a function

function solve(number){
    return function(number){
        return number*number;
    }
}
let ans=solve(100)//argument sent in function solve is unused
/**
 * The solve function doesn't directly use the 10. 
 * Instead, it simply returns the inner function.
So, ans now holds a reference to the inner function:


 */
let finalAns=ans(10)
console.log(finalAns);
