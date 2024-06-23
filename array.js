// Create array
/* let marks = [23,35,34,34,56,66];
console.log(marks);
console.log(marks.length); 

let name = ['h','sd','wert','wedrfg','zxc'];
console.log(name[0]);
console.log(name[1]);
console.log(name[2]); */

// Looping over an array - for loop
/*let name = ['h','sd','wert','wedrfg','zxc'];
for (let i = 0; i < name.length; i++){
  console.log(name[i]);
}*/

//for - of loop
/* let name = ['h','sd','wert','wedrfg','zxc'];
for (let el of name){
    console.log(el);
}*/

// find the average marks of the entire class
/*let marks = [85,97,44,37,76,60];
let sum = 0;
for (let val of marks){
    sum += val;
}
let avg = sum / marks.length;
console.log("sum of marks :" , sum);
console.log("average marks of :" , avg); */

// change the array to store final price after applying offer. all items have an offer of 10% OFF on them.
/*let price = [250,645,300,900,50];
let idx = 0;
for(let items of price){
  console.log(`value at index ${idx} = ${items}`);
  idx++;
} 

let price = [250,645,300,900,50];
for (let i = 0; i < price.length; i++){
    let offer = price[i] / 10;
    price[i] -= offer;
}
console.log(price); */

// push() method
/* let fooditems = ["apple" , 'mango' , 'banana','pinepal'];
fooditems.push('watermelon','lichi','ice-cream');
console.log(fooditems); */

// pop() method
/*let fooditems = ["apple" , 'mango' , 'banana','pinepal'];
fooditems.pop();
console.log(fooditems);*/

// delete() - delete thayel items show krse
/*let fooditems = ["apple" , 'mango' , 'banana','pinepal'];
let deleteItem = fooditems.pop();
console.log(fooditems);
console.log(deleteItem);*/

//toString() - converts array to string
/*let fooditems = ["apple" , 'mango' , 'banana','pinepal'];
console.log(fooditems);
console.log(fooditems.toString());  // convert array to string */

// Concate() - joins multiple array & returns result
/*let arr = ['a','b','c','d'];
let arr1 = ['e','f','g','h'];
let arr2 = ['i','j','k'];
let res = arr.concat(arr1,arr2);
console.log(res); */

// unshift() push jevu work kre
/*let fooditems = ["apple" , 'mango' , 'banana','pinepal'];
fooditems.push('watermelon','lichi','ice-cream');
console.log(fooditems);

// shift() pop jevu work kre
let fooditems = ["apple" , 'mango' , 'banana','pinepal'];
fooditems.shift();
console.log(fooditems); */

// slice() - returns a piece of array - do not change in original array
/*let food = ['a','b','c','d' , 'e','f','g','h','i','j','k'];
console.log(food);
console.log(food.slice(1,4));

// splice() - change original array (add , remove , replace)
let arr = [1,2,3,4,5,6,7,8,9];
arr.splice(2,2,101,102);
console.log(arr);

// add element 
arr.splice(2,0,101);
console.log(arr);

// delete element
arr.splice(3,1);
console.log(arr);

// replace element
arr.splice(3,1,101);
console.log(arr); 

// Array Methods - Map()
let nums = [23,45,67];
nums.map((val) => {
  console.log(nums);
}); 

// Create copy(new) array
let nums = [23,45,67];
let newArr = nums.map((val) => {
  return val * 2;
});
console.log(newArr); 

// Note : for each no use koi normal calculation krbu hoi , kai print krvu hoi & map no use koi new array create krvo

//filter() 
let arr = [1,2,3,4,5,6,7,8,9];
let newArr = arr.filter((val) => {
   // return val % 2 === 0;   // print even number
   //return val % 2 !== 0;      // print odd number
   return val > 3;
});
console.log(newArr); 

// reduce() : input ma value ghani hoi and o/p ma ek val joti hoi tyare use thai - sum , avg , count etc.
let arr = [1,2,3,4] ;
const output = arr.reduce((res,curr) => {
 return res + curr;
});
console.log(output); 

// find out largest number from array.
let arr = [5,6,2,1,3];
const output = arr.reduce((prev , curr) => {
  return prev > curr ? prev : curr;   // print largest number
  //return prev < curr ? prev : curr;      // print smallest number
});
console.log(output); */

// prectical : take a number n as input from user. create an array of numbers from 1 to n.
let n = prompt("Enter a no :");
let arr =[];
for(let i=1; i<=n; i++) {
  arr[i - 1] = i;
}
console.log(arr); 

//use the reduce method to calculate sum of all numbers in the array.
let sum = arr.reduce((res,curr) => {
  return res + curr;
});
console.log("sum" , sum); 

//use the reduce method to calculate product of all numbers in the array. 1*2*3*4*5 - factorial no
let factorial = arr.reduce((res,curr) => {
  return res * curr;
});
console.log("factorial" , factorial);
