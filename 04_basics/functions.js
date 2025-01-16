//function functionName()

//function definition
// function myName(){
//     console.log("Anuska Chatterjee");
    
// }
// myName()

// NON PARAMETERIZED
// function printCount(){
//     for(let i=1; i<=10; i++){
//         console.log(i);
        
//     }
// }
// printCount()

//PARAMETERIZED
// function getAvg(a,b){
//     let avg=(a+b)/2;
//     console.log(avg);
    
// }
// getAvg(5,4)

//return 
//function declre->when we write the keyword fuction,we are basically declaring the function
//function definition-> after declaring the function 
function getSum(a,b,c){
    let sum=a+b+c;
    return sum;
    //unreachable code
    // a=a+b;
    // b=a-b;
    // a=a-b;
}
let sum=getSum(1,2,3);
console.log(sum);

let square=function(num){
    return num*num;
}
let ans=square(25);
console.log(ans);

