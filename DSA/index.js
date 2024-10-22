// 1. Write a function that takes n number of arrays of integers and returns an array of distinct integers i.e the integers should appear only once among the input arrays. Example: [1,2,3], [2,3,4], [3,4,5] => [1,5]. Note: number of arrays can be n. The function should work when inputs are increased or decreased.

// function distinctVeal(arr){
//     let str=[];
//     for(let i=0;i<arr.length;i++){
//         for(let j=0;j<arr[i].length;j++){
//             str.push(arr[i][j])
//         }
//     }
//     let obj={};
//     for(let i=0;i<str.length;i++){
//         let num=str[i];
//         if(!obj[num]){
//             obj[num]=1;
//         }else{
//             obj[num]+=1;
//         }
//     }
//     let uniqueValue=[];
//     for(let key in obj){
//         if(obj[key]==1){
//             uniqueValue.push(key)
//         }
//     }
//     return uniqueValue;
// }

// let x=distinctVeal([[1,2,3], [2,3,4], [3,4,5],[5,6,7,8]]);
// console.log(x.map(Number));






// 2. At place of space put 00.

// let str="I am Suman";
// let bag="";
// for(let i=0;i<str.length;i++){
// if(str[i]==" "){
//     bag=bag+"00";
// }else{
//     bag+=str[i];
// }
// }
// console.log(bag);


// 3. Reverse the array from k;

let nums=[1,2,3,4,5,7,6,8];
let k=3;
let arr1=[];
let arr2=[];

for(let i=0;i<=k;i++){
    arr1.push(nums[i])
}
for(let j=k+1;j<nums.length;j++){
    arr2.push(nums[j])
}
let arr=[...arr2,...arr1];
console.log(arr)





















