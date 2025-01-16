//reference types-> objects, arrays, function

//2memory-/**
// stack, heap
//  array ka data in heap, access krne keliye pointer/refference made in stack
// let arr=[1,2,3]
// var -> arr is in stack storing the reference of 1, 2, 3*/

//obj= collection of key value pairs
let obj={
    name:"Anuska",
    age:21, //"key" is used when key name has a spce in its name-> "full name"
    greet: function(){
        console.log("Hello ANuska");
        
    }
}
console.log(obj);
obj.greet();

console.log(typeof(obj));

let obj2=obj//a shallow copy is made, a new reference obj2 is created in stack memory but it is pointing to the same value in heap

//SHALLOW COPY
//DEEP COPY