console.log("2" > 1); //conversion occurs


console.log(null>0);
console.log(null==0);
console.log(null<0);
console.log(null<=0);
console.log(null<=0);
/* The reason is that, the equality check(==) and comparisons check
(>, <,>=,<=,...) work differently
comparisons convert null to a number, treating it as 0,
thats why null>=0 is true whereas null>0 is false */

console.log("*********************************")

console.log(undefined>0);
console.log(undefined==0);
console.log(undefined<0);
console.log(undefined<=0);
console.log(undefined<=0);

//STRICT CHECK(===), not only checks values but also its datatypes
console.log("2"==2);//true. since conversion occurs
console.log("2"===2);//false, since not equal datatypes


