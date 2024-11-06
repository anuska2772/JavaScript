//Memories are of 2 types-
/**Stack- used in primitive datatypes
 * heap- used in non primiitve tpes
 */

let myName="Anuska"
let anotherName=myName
anotherName="Jhimly" //a copy of myName is given to anotherName, so changes are made in the copy variable not the original one
console.log(anotherName);
console.log(myName);

let userOne={
    email: "user@google.com",
    upi: "user@ybl"
} //variable name(userOne) allocated space in stack, while content allocated in heap

let userTwo=userOne //no copy is made, it also points to the same content as userOne
userTwo.email="anuska@google.com" //change made in the original value in the heap
console.log(userOne.email); //both show same value-> anuska@google.com
console.log(userTwo.email);



