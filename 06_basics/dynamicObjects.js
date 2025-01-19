// let obj={
//     age:21,
//     wt:51,
//     ht:163
// };

// console.log(obj);

// obj.color="Black"
// console.log(obj);
/**WHY OBJECT IS DYNAMIC
 * coz its properties/state and dimensions can be changed
 * during run time
 */

/**
 * OBJECT CLONING
 * let a={val:12}
 * let b=a;//reference cpy ho rha hai
 * this si not object clonig, why, because a block of
 * memeory is assigned having val=12, referred by a,
 * a=b, means b is also refereing to the same location as a
 * this is not cloning
 */

// OBJECT CLONING
/**1. Spread operator */

let src={
    age:21,
    wt:51,
    ht:163
};

// let dest={...src}; //clone done, ... spread operator
// src.age=99
// console.log("src:",src);
// console.log("dest:",dest);//alag alag copy bna hai

/**2. Assign*/

// let dest=Object.assign({},src); //clone done
// src.age=99
// console.log("src:",src);
// console.log("dest:",dest)

/**3. ITERATION  */

let dest={};
//cloning don in for loo
for(let key in src){
    let newKey=key;
    let newValue=src[key];
    dest[newKey]=newValue;
}

src.age=99
console.log("src:",src);
console.log("dest:",dest)
