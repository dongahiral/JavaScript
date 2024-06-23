// create function - 1st way 
/*function myFun(){
    console.log('hgfds');
    console.log('wertyuiop');
}
myFun(); 

// create function - 2nd way 
function argFun(msg){
    console.log(msg);
}
argFun('hello'); */

// sum, - ,* ,  / of two numbers - 1st way
/*function sum(x,y){
    console.log(x+y);
}

// sum, - ,* ,  / of numbers -  2nd way 
function sum(x,y){
    s = x + y;
    return s;
}
let val = sum(4,6);
console.log(val); */

// Arrow function
/*function sum(a,b){
    return a + b;
}
const arrowSum = (a,b) => {
    console.log(a+b);
};

const printhello = () => {
    console.log("hello");
} */

//create function that takes a string as argument & returns the number of vowels in the string. Vowels = a,e,i,o,u
/*function countVowels(str){
for(const char of str){
    console.log(char);
} 
} 

function countVowels(str){

    let count = 0;
    for(const char of str){
        if(char === 'a' || 
           char === 'e' ||
           char === 'i' ||
           char === 'o' ||
           char === 'u') {
            count++;
           }
    }
    console.log(count);
} 

// create arrow function and perform the same task.
const countVow = (str) => {

    let count = 0;
    for(const char of str){
        if(char === 'a' || 
           char === 'e' ||
           char === 'i' ||
           char === 'o' ||
           char === 'u') {
            count++;
           }
    }
    console.log(count);
} */

// FOr-each 

/*let arr = ['we','df','qwer','zxcv'];
arr.forEach((val) => {
  console.log(val);
});

// toUppercase()
let arr1 = ['we','df','qwer','zxcv'];
arr1 .forEach((val) => {
  console.log(val.toUpperCase());
});

// Higher Order Function/Method : koi function ne as parameter use kre or koi function ne return kre that's called
let arr2 = ['we','df','qwer','zxcv'];
arr2 .forEach((val,idx,arr2) => {
  console.log(val,idx,arr2);
}); */

// for a given array of numbers, print the square of each value using the foreach loop - 1st way
let nums = [1,2,3,4,5];
nums.forEach((num) => {
    console.log(num * num);   // console.log(num**2);
}); 

//2nd way 
let nums1 = [12,25,98,1234567890];
let calcSquare = (num) => {
 console.log(num * num);
};
nums1.forEach(calcSquare);

