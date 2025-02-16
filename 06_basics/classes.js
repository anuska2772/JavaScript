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
    #wt=51;//# marks the variable as private, used only in the class it is defined not outside
    ht=163;

    walking(){
        console.log("I am walking ",this.#wt);
        //cant drectly write #wt, have to use this keyword
        
    }

    running(){
        console.log("I am running");
        
    }
    get fetchWeight(){
        return this.#wt;
    }
    set modifyWeight(val){

        this.#wt=val;
    }
}
let obj=new Human();
console.log(obj.walking()); 

/**To access the a private data outside the class 
 * we use getters(a function used to fetch the value of a private data)
 *  and setters(updates the value)
 * 
 * getter setter use case-> to add on semantic clarity, can do encapsulation,provide data production
 * 
 */