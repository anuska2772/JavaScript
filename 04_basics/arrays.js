let arr=[1,2,3,4,5] //creation of array
console.log(arr);

//arrays constructor use
let brr=new Array('love',1,true);
console.log(brr);
// console.log(typeof(arr));
// console.log(typeof(brr));

console.log(brr[0]) 
//built in methods->
/**
 * push-> right most side insertion element
 * pop-> remove last element
 * shift-> remove 1st element
 * unshift-> add at first element
 * slice->array se ek new part
 * splice->array content change, replace, remove, in any position
 * map
 * filter
 * reduce
 * sort
 * indexOf
 * find
 */
// brr.push("Anuska")
// console.log(brr);
// brr.pop()
// console.log(brr);

// brr.shift()
// console.log(brr);

// brr.unshift("Anuska")
// console.log(brr);

// brr.push(10)
// brr.push(20)
// brr.push(30)
// brr.push(40)
// brr.push(50)
// console.log(brr);
// //SLICE
// console.log(brr.slice(3,7))
// //SPLICE
// console.log(brr.splice(1,2,"Chatterjee"));
// console.log(brr);
// brr.splice(1,0,"hehe")
// console.log(brr);
// brr.splice(1,2)
// console.log(brr);


//MAP

let arr1=[10,15,20,25,30]

arr1.map((number,index)=>{
    console.log(number*number);
    console.log(index);
    
})
// let ans=arr1.map((number,index)=>{
//     return number*number;

// })
// console.log(ans);

//FILTER

let even=arr1.filter((number)=>{
    return number%2==0;
    // if(number%2==0){
    //     return true;

    // }
    // else{
    //     return false;
    // }
});

console.log(even);


let arr2=[1,2,'ANuska','Chatterjee',true, null, undefined];
let ans=arr2.filter((value)=>{
    if(typeof(value)==='boolean'){
        return true;
    }
    else{
        return false;
    }
});
console.log(ans);

//reduce
/**
 * acumulator,current
 * either initialize accumulators value as 0 or it will automatically initialize the first item of array
 if accumulator initialized with 0, current takes the first item of array
 else if, accumulaotr takes first element, current takes the next element
*/

let newArray=[10,20,30,40];
let ans1=newArray.reduce((acc,curr)=>{
    return acc+curr; //this acc+curr is stored again inside acc
},0);
console.log(ans1);

//SORTED
let newArray1=[1,9,4,2,6,5];
let ans2=newArray1.sort()
console.log(ans2);

//indexOf

let i=newArray1.indexOf(2);
console.log(newArray1.indexOf(2));


let b=newArray1.find(ele=> ele==4)
console.log(b);

