/**
 * Variable scopimg->
 * global scope
 * function scope
 * block scope
 */
//GLOBAL SCOPE-> can be used everywhere-> within the file, inside function, in loop, in if, etc
//var age=20;

//FUNCTION SCOPE

// function hello(){
//     var name="Earth";
//     console.log("hello ",name);
    
// }
// hello();
// console.log(name);//will show error->name is not defined

//BLOCK SCOPE-> var is not a block scope
console.log(age);
{
    var age=21;
}
//console.log(age);
