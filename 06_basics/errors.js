// #any event due to which the normal flow of execution gets disrupted
//error-type-> compile time(during parsing)
/**
 * and run time(during execution)
 * gracefully handling errors-> try catch block
 */ 

// try{
//     //only those code where there is a possibility of throwing errors
//     console.log("I am inside try block");
//     //reference error
//     console.log(x);
//     console.log("End");
    
// }
// catch(err){
//     //defines what to do with the error

//     //retry logic
//     //fall back mech
//     //logging
//     //custom error
//     console.log("I am in catch block");
//     console.log("Your error is=",err);
    
// }
// /**
//  * finally block-> will run everytime
//  */
// finally{
//     console.log("I will run every time");
// }

//CUSTOM ERROR-> throw keyword


//lets create custom error

// try{
//     console.log(x);
    
// }
// catch(err){
//     throw new Error(`SORRY not referenced is undefined`);
// }

let errorCode=100;
if(errorCode==100){
    throw new Error("Invalid JSON")
}

