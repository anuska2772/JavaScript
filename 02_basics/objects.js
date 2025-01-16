//objects created in 2 types- literal and constructor
//singleton- objects created from constructor

//OBJECT LITERALS
//Object.create-constructor method through singleton created

/*2 types to access objects:-
    object.fullName
    or
    object["fullName"]*/
const mySymbol= Symbol("key1")
const JsUser={
    name: "Anuska",//key value pairs, name is already considered as String, though we dont write inside ""
    "full name": "Anuska Chatterjee",
    //take a symbol, add it in the keys of object
    //mySymbol: "myKey1", //not the actual process of adding
    [mySymbol]:"myKey1", //this is the correct process
    age:20,
    location: "Asansol",
    email: "anuska@gmail.com",
    isLoggedIn: false,
    lastLoggedIn: ["Monday", "Friday"]

}

//2 types of accessing email
console.log(JsUser.email);
//console.log(JsUser[email]);//error- email not found, as email is stored in the form of STRING
console.log(JsUser["email"])//no error
console.log(JsUser["full name"]);
// console.log(JsUser.mySymbol);//displays myKey1
// //if we check the data type of mySymbol, it is not actually used as a symbol
// console.log(typeof JsUser.mySymbol); //displays string

console.log(JsUser[mySymbol]);

JsUser.email="anuska2772@gmail.com" //changing the value of a object
//Object.freeze(JsUser) //locking the values of object

// JsUser.email="anu2772@gmail.com"
console.log(JsUser);

//ADDING FUNCTION
//funcs can be treated as variables

JsUser.greeting =function(){
    console.log("Hello jS user");
    
}
JsUser.greeting2 =function(){
    console.log(`Hello jS user, ${this.name}`);
    
}
console.log(JsUser.greeting);//o/p-> undefined, before when it was freeze-d
console.log(JsUser.greeting2());//o/p-> error it is not a function, why? because we have freezed it











 

