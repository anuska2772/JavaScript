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
function getSum(a,b,c){//arguments
    let sum=a+b+c;
    return sum;
    //unreachable code
    // a=a+b;
    // b=a-b;
    // a=a-b;
}
let sum=getSum(1,2,3);//paramenters- actual values
console.log(sum);

let square=function(num){
    return num*num;
}
let ans=square(25);
console.log(ans);

function sayHello(){
    console.log("Hello Anuska");
}

sayHello()

function prod(a,b){
    return a*b;
}
sum=getSum("2","3","5") //235-> output
console.log(sum);
let prod1=prod("2","3")// 6-> output
console.log(prod1);

function addRandNumbers(){
    let ans=0
    for(let i=0; i<arguments.length; i=i+1){
        ans=ans+arguments[i];

    }
    return ans;
    // console.log(arguments);
}

added=addRandNumbers(12,23,34,42,51)
console.log(added);

/**
 * spread operator method->
 * function addRandNumbersV2(...numbers){
    let ans=0
    for(let i=0; i<numbers.length; i++){
        ans=ans+numbers[i]
    }
    return ans
}
 */
