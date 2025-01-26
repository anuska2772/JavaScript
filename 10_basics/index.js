//code 1
// const t1=performance.now()

// for(let i=1; i<=100; i++){
//     let para=document.createElement('p');
//     para.textContent="this is para "+i;
//     document.body.appendChild(para);
// }

// const t2=performance.now();
// console.log("Total time taken by code 1="+(t2-t1));

// //code 2

// const t3=performance.now()
// let myDiv=document.createElement('div')
// for(let i=1; i<=100; i++){
//     let para=document.createElement('p');
//     para.textContent="This is para "+i;
//     myDiv.appendChild(para)
// }
// document.body.appendChild(myDiv)
// const t4=performance.now()
// console.log("Time taken by code 2="+(t4-t3));
/**code 2 faster than code 1
 * resaon-> reflow and repaint
 */


let fragment= document.createDocumentFragment();

for(let i=1; i<=100; i++){
    let para=document.createElement('p');
    para.textContent="This is para "+i;
    fragment.appendChild(para) //no reflow no repaint
    //that is why using document fragment is a good practice
}
//the below line takes 1 reflow and 1 repaint
document.body.appendChild(fragment)