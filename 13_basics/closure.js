/** binding a function with a required data is called closure.
 * CLOSURE-> top level entity
 * -> func+data(or lexical scope/surround state)
 */

// function init(){
//     let name="Anuska" //let-> block scope //name is a local variable created by init

//     function displayName(){
//         // let name="Chatterjee"
//         console.log(name);//use variable declared in a parent function
//     }
//     return displayName; //iss function ka reference returned

// }

// init();

function outerFunc(){
    let name="Anuska" 

    function innerFunc(){
        
        console.log(name);
    }
    return innerFunc; 

}
let inner=outerFunc();
inner();
/**We must think that after the outer function execution
 * is over, the 'name' variable is freed from the memory
 * or simply removed from the memory
 * BUT
 * it doesnt happen
 */
/**In nested functions, the inner functions get binded
 * together with the required value,
 * mind it: NO COPY OF THE DATA IS MADE!! 
 * only the reference of the data is passed
 */