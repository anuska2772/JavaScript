//ASYNC AWAIT AND FETCH API
// //clean code, easy to debug code -> async await

// // through async await, we can represent our asynchronous code into synchronous code
// /**and then sequentially execute the asynchronous codes*/

// async function getData(){
//     setTimeout(function(){
//         console.log("I am inside set timeout block");
//     },3000);
// }
// let output=getData();

//async await-efficiently handling of promises, 
// async function always returns a Promise

//fetch API -> provides interface for fetching resources across internet.
/**REQUEST->
 * 1. get
 * 2. post
 * 3. put
 * 4. delete
 */

/**SYNTAX
 *  
 */

// async function getData() {

//     //get request-> async
//     let resp= await fetch('https://jsonplaceholder.typicode.com/todos/2');
//     //parse asli data-> parse json-> async
//     let data = await resp.json(); 
//     console.log(data);
// }
// getData()

/**
 * SCENARIO
 * prepare url/api end point(jaha se mereko data leke ana hai)-> sync code hai, string ko concatenate krna hai
 * fetch data-> network call-> async
 * process data -> bs print kr rha hu-> sync(since network call is async
 *                  it may delay data fetching, so then it moves to data processing
 *                  but ther is no data to be processed, so undefined)
 * ***therefore***-> a condition is applied, jb tk mera data network call se na aye, tb tk process nhi hoga,
 * here comes the logic of await, so add AWAIT in front of line number 36
 * 
 * sync-> async -> sync
 */

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const url= "https://jsonplaceholder.typicode.com/posts";

const options={
  method: "POST",
  body: JSON.stringify({ username: "anuska" }),
  headers: myHeaders,
}

async function postData(){
    const response = await fetch(url,options); 
    let data=await response.json();
    console.log("Mydata: ", data);
}
postData()

