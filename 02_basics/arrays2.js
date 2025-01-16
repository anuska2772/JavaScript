const marvel=["Iron man", "Loki", "Thor"]
const dc=["Super man", "Batman", "Flash"]

marvel.push(dc)
console.log(marvel);//o/p-> array inside array,
//just to prove that array takes in any type of data entry, it considered the entire array(dc) as a single data
console.log(marvel.length); //o/p-> 4



//*****************************************//
// marvel.concat(dc)
// console.log(marvel);//concat also doent have any effect
const allHeroes= marvel.concat(dc)
console.log(allHeroes); //gives all heroes

//another alternative of concat

const allHeroes2 =[...marvel, ...dc] //spread method
console.log(allHeroes2);
//diff: in concat only 2 arrays concatenation, 
//      in spread method, >2 arrays concatenated
const arr= [1,2,3, [4,5,6], 7,8,[6,7,[5,4]]]

const useArray=arr.flat(Infinity) //here Infinity is the det, how many array deep is the given
//normalyy give the dept as identified, but 
//setting dept=infinity, calculates 
//the depth on its own and displays the array 
// in a spread out form
console.log(useArray);


console.log(Array.isArray("Anuska"));//is it an Array? No-> false
console.log(Array.from("Anuska"));//creates Anuska as in array
console.log(typeof Array.isArray()); //boolean
console.log(typeof Array.from("Anu")); //object

console.log(Array.from({name:"Anuska"})); //eturns an empty array-> []
//doesnt understand whether to make array of the key or the value

//REMEMBER THE CASE

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3)); //returns an array from a set of elements





