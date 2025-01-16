//dates
let myDate= new Date()
console.log(myDate);// gives output in an unreadable date format- 2024-12-26T13:45:39.518Z, cannot be used 
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toTimeString());
//console.log(myDate.toISOString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);


//created date
let createdDate = new Date("2024 12 27 ") //yy mm dd or "2024-12-27"
let createdDate2 = new Date(2024, 11, 27) //yy mm(0th indexed) dd
console.log(createdDate2.toDateString());
let myTimeStamp = Date.now()
console.log(myTimeStamp);//o/p in mili seconds
console.log(createdDate.getTime());//in mSeconds
//can be converted into seconds too, by dividing the Date.now( ) by 1000
//but it gives result in decimal, to avoid that use-> Math.floor()
console.log(Math.floor(Date.now()/1000));


let newDate= new Date()
console.log(newDate.getFullYear());
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());//day of the week

// newDate.toLocaleString('default', {
//     weekday: "long",
//     timeZone: ''
// })








