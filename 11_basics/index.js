// let firstPromise=new Promise( (resolve, reject)=>{
//     console.log("Anuska");//initially firstPromise is in pending state
//     //but after writing resolve(), will be marked as fullfilled
//     // resolve(1001);//any value
//     // reject(new Error("Internal Server Error"));
// })




// setTimeout(myName,5000)

// let firstpromise= new Promise((resolve, reject)=>
// {
//     setTimeout(function myName(){
//         console.log("My name is Anuska");
//     },5000 );

//     resolve(1);
// });

// let promise1= new Promise((resolve, reject)=>{
//     let success=true;
//     if(success){
//         resolve("Promise fullfilled")
//     }
//     else{
//         reject("Promise rejected!");
//     }
// });

// promise1.then((message)=>{
    // console.log("Then ka message is "+message);
// }).catch((error)=> {
    // console.log("Error:"+error);
// })

//multiple then blocks are also applicable
//promise chaining
// promise1.then((message1)=>{
//     console.log("Then ka message is "+message1);
//     return "second msg fullfilled"
// }).then((message2)=>{
//     console.log("second msg:"+message2);
//     return "third msg fullfilled"
// }).then((message3)=>{
//     console.log("third msg:"+message3);
// }).finally((message)=>{
//     console.log("I am the finally block");

// })

//FINALLY BLOCK(always run, regardless, reject used or resolve used)

//multiple promises
// let p1=new Promise((resolve, reject)=>{
//     setTimeout(resolve, 1000, "First");
// })
// let p2=new Promise((resolve, reject)=>{
//     setTimeout(resolve, 1000, "Second");
// })
// let p3=new Promise((resolve, reject)=>{
//     setTimeout(resolve, 1000, "Third");
// })

// Promise.all([p1,p2,p3]) //a new promise created that will be resolved, when all 3 promises will be resolved
// //if any one of them fails, this fails too
// Promise.all([p1,p2,p3]).then((values)=>{
//     console.log(values);
    
// })