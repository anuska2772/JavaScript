function sayName(myName="Healer"){//default name, in case we forget to pass a name{
    console.log("My name is:",myName);
    
}
sayName("Anuska")//dispalyes undefined, before default value fizef in myName variable,
sayName(null)//o/p-> My name is null
sayName(undefined)//o/p-> My name is Healer
sayName(98)
//can even pass functions

function getAge(){
    return 190;
}
function utility(name="Anuska", age=getAge()){
    console.log(name," ",age);
    

}
//utility("anuska",10)
// utility("anuska")//o/p->anuska undefined
// utility()//o/p-> undefined undefined
utility()//passign functions