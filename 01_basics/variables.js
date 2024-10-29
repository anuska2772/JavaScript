const accId=12345
let accEmail="abc@gmail.com"
var accPassword="123"
city="Asansol"//not recommened at all, only a possibility
let accState;//prints undefined

//accId=2 //not allowed
accEmail="ab@gmail.com"
accPassword="12345"
city="Bangalore"

console.log(accId)
console.table([accId, accEmail, accPassword, city, accState])
/*
 prefer not to use var
 coz of issue in block scope and functional scope*/
