//arays

const arr=[0,1,2,3,4,5]
// console.log(arr[3]);//they make shallow copes- changes in the copy reflected in original

// const arr2= new Array(1,5,3,4)
// console.log(arr2.length);

// //Array methods
// console.log(arr);

// arr.push(6)
// console.log(arr);
// arr.pop()
// console.log(arr);

/////////
arr.unshift(0)//addign 0 infront of arr, shifts all the elemnets aftewards, not optimized
console.log(arr);

arr.shift()
console.log(arr);
arr.shift()
console.log(arr);//shifts forward by one place


console.log(typeof arr.includes(9));
console.log(arr.indexOf(9));

const newArray= arr.join()
console.log(arr);

console.log(typeof arr);

console.log(newArray);

console.log(typeof newArray);



///////SLICE

console.log("A ", arr);

const slice1= arr.slice(1,3) //slice prints from 1st index to 2nd index, excluding 3rd
console.log(slice1);

console.log("B ", arr);

const slice2=arr.splice(1,3) // splice includes last index, plus modifies the original array
console.log(slice2);

console.log("C ", arr);






