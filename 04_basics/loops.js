/**
 * for(let i=0; i<=5; i++){
 * }
 */

/**
 * let i=0
 * while(i<=10){
 * i++;
 * }
 */
 
/**
 * do{
 * ----------
 * i++;
 * }while(i<=10);
 */
let i=0;
for(; ;){
    if(i<5){
        console.log(i);
        i++;
        
    }
    break;

}

//forEach()

// let arr=[10,20,30]
// console.log(arr.length);

// arr.forEach((value, index)=>{
//     console.log("Number=",value,"Index=",index);
    
// })

//for in-> koi bhi enumerable properties of ibject through which we can iterate

let obj={
    name:"Anuska",
    age:21, //"key" is used when key name has a spce in its name-> "full name"
    greet: function(){
        console.log("Hello ANuska");
        
    }
}

for(let key in obj){
    console.log(key,":",obj[key]);
    
}

//for of loop-> iterable objects ke upar iteration
let arr=[10,20,30]
for (let value of arr){
    console.log(value);
}

let str="Anuska"
for( let val of str){
    console.log(val,end=" ");
    
}