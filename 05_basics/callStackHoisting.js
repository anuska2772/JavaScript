// //hoisting

// sayMyName("Anuska")
// function sayMyName(finalName){
//     console.log(finalName);
    
// }//due to hoisting by default the function automatically gets shifted to the top of the code

// //sayMyName("Anuska")
//this was function hoisting

//VARIABLE HOISTING

// var age=21
// console.log(age);
// var age=21 
//in this case
/**
 * only var age is shifted before console.log.., 
 * therefore no value is assigned, so o/p=undefined 
 */

//USING LET AND CONST-> not applicable
//ONLY APPLICABLE FOR VAR keyqword

//function EXPRESSION mei nhi chalega

// myName()
// var myName=function (){
//     console.log("Hello Anuska!");
    
// }, shows error

//const obj=new Human();//wont work
class Human{

}
//const obj=new Human();//running well
/**
 * HOISTING is only possible for function declaration
 * and variable declaration
 */
