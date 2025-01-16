let arr=[10,20,30,40,50]
function getSum(arr){
    let l=arr.length;
    let sum=0
    for(let i=0; i<l; i++){
        sum+=arr[i]

    }
    return sum
}

console.log("Sum=",getSum(arr));
