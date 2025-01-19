/**class is a blueprint, we make a plan for a house, it contains methods, functions, then we create an instance
 * from the blue print, basically an actual/real thing which is implemneted called-object
 * class(is a container)-> has 2 things
 * -> state/properties
 * -> behavior/functionality
 * 
 * For eg-> class Human
 * state/properties-> age, wt, ht,etc
 * behaviors-> walk, talk, run etc
 * 
 */

class Human{
    age=21;//public -> can be used inside the class as well as outside
    #wt=51;//# marks the variable as private,
    ht=163;

    walking(){
        console.log("I am walking ",this.#wt);
        
    }

    running(){
        console.log("I am running");
        
    }
}
let obj=new Human();
console.log(obj.walking()); 