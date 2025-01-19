class Human{
    age//doesnt have any value
    #wt=51;
    ht=163;
    //constructor is a special function

    constructor(newAge, newHeight, newWeight){
        this.age=newAge;
        this.ht=newHeight;
        this.#wt=newWeight;
    }
    walking(){
        console.log("I am walking ",this.#wt);
        
        
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
//let obj=new Human();
let obj=new Human(100,500,600);
console.log(obj.fetchWeight);