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

// function solve(number){
//     return function(number){
//         return number*number;
//     }
// }
// let ans=solve(100)//argument sent in function solve is unused
/**
 * The solve function doesn't directly use the 10. 
 * Instead, it simply returns the inner function.
So, ans now holds a reference to the inner function:


 */
// let finalAns=ans(10)
// console.log(finalAns);

//4. Use function in data structure

// const arr=[
//     function(a,b){
//         return a+b;
//     },
//     function(a,b){
//         return a-b;
//     },
//     function(a,b){
//         return a*b;
//     }
// ];
// let first=arr[0];
// let ans=first(5,10)
// console.log(ans);

// let second=arr[1];
// console.log(second(15,10));

// let third=arr[2];
// console.log(third(5,10));


//5. use in an object

// let obj={
//     age:21,
//     wt:51,
//     ht:163,
//     greet:()=>{
//         console.log("Hello India");
        
//     }


// }
// let greet=obj.greet()
// console.log(greet);
// console.log(obj.age);


//6. function expression

console.log(greet);
var greet=function(){
    console.log("Hello India");
    
}



