/**
 * synchronous code-
 * console.log("Hi");
console.log("Love");
console.log("Babbar");

any piece of code that executes in the smae time- synchronous code
jaise hi flow of execution uss line mei pahuchta hai, execute ho jata hai, wait nhi krwata

aynchronous code-> flow of execution reached at the start of a piece of code,
theres no guarantee ki usi time pe execute hoke, apna behaviour show krde
eg-> settimeOut(function, duration(in mSec))

function myName(){
    console.log("Anuska")
}

setTimeOut(myName, 5000)// theres no guarantee that after
5 seconds only the code will be executed 
it may happen so that the code might get executed after 10 seconds,
after 32 seconds or even after 1 minute

asynchronous-> setTimeOut, network request, event listeners,etc
db connection request, etc

*/

/**
 * BLOCKING
 * 
 * console.log("Start")
 * setTimeOut(sayMyName, 5000)
 * console.log("End") //iss line ko wait krna padha, considered as BLOCKED STATE
 * asynchronous code ko alag se handle krne ka system-> EVENT LOOP
 * 
 * synch code-> normal handling
 * async code-> event loop
 */

/**
 * EVENT LOOP(components)
 * 1. call stack-> when a function is called, call stack ke andar,
 *                 entry created, function call completed, entry removed
 * 2. Browser-> 
 * 3. callBackQueue
 * 
 *  
 */
