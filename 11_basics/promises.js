/**
 * promises->
 * any available async code, what value it is returning, kya woh reject hogya
 * kya woh succesfully complete hogya, kya woh pending state mei hai,
 * basically uska state check krna and wht type of value it is returning, if its is 
 * returning the value in an effective manner
 * these are handled by PROMISES
 * 
 * promises let async methods return values like synchronous methods
 * doesnt return a value, but a promise thta it will return some value
 * in the future
 * 
 * 
 * a promise if one of these states->
 * 1. Pending-> initial state, neither fullfilled nor rejected
 * 2. fulfilled-> operation completed succesfully
 * 3. rejected-> operation failed
 */

/**PROMISE has 2 imp states
 * 1. Resolve/fullfilled
 * 2. reject
 */

//SYNTAX
//new Promise((resolve, reject)=>{
    //          ----})