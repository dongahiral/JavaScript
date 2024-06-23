// Synchronous - order ma kam kre - one by one 
/* console.log("one");
console.log("two");
console.log("three");

// setTimeout function - 1st way 
function hello(){
    console.log("hello");
}
setTimeout(hello,2000); 

// setTimeout function - 2nd way 
setTimeout(() =>  {
    console.log("hello");
},4000); //timeout  

// Asynchronous
console.log("one");
console.log("two");

setTimeout(() =>  {
    console.log("hello");
},4000);

console.log("three");
console.log("four");
console.log("five");    

// Callbacks 
function sum(a,b){
    console.log(a + b);
}
function calculator(a,b,sumCallbacks){
   sumCallbacks(a,b);
}
calculator(1,2,sum);  

// Callback Hell - nested callbacks - nested if-else
let age = 19;
if(age >=18){
    if(age>=60){
        console.log("senior");
    } else {
        console.log("middler");
    }
} else {
    console.log("child");
}   

// nested loop
for(let i=0; i<5; i++) {
    let str = "";
    for(let j=0; j<5; j++) {
        str = str + j;
    }
    console.log(i , str);
}    

function getDate(dataId,getNextData){
    setTimeout(() => {
        console.log("data",dataId);
        if(getNextData){
            getNextData();
        }
    },2000);
   
}

// callbacks hell
getDate(1, () => {
    console.log("getting data2....");
    getDate(2, () => {
        console.log("getting data3....");
        getDate(3, () => {
            console.log("getting data4....");
        getDate(4);
        });
    });
    
}); 

// Promisses 
let promise = new Promise((resolve,reject) => {
      console.log("hello");
      resolve("sucess");
      reject("Error");
});   

function getData(dataId,getNextData) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("data",dataId);
            resolve("Success");
        },2000);
    });
}
;
// promise chain
console.log("getting data1....");
getData(1).then((res) => {
    console.log("getting data2....");
    return getData(2);
})
.then((res) => {
    console.log("getting data3....");
    return getData(3);
})
.then((res) => {
    console.log(res);
});  

// Async
async function hello(){
    console.log("hello");
} 

// await
function api(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("weather");
            resolve(200);
        },2000);
    });
}

async function getWeatherData(){
    await api();   // 1st time call
    await api();   // 2nd time
}   

// Async-await
function getData(dataId) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("data",dataId);
            resolve("Success");
        },2000);
    });
}

async function getAllData() {
    console.log("getting data1....");
    await getData(1);
    console.log("getting data2....");
    await getData(2);
    console.log("getting data3....");
    await getData(3);
}    */
 
// IIFE - Immediately Invoked Function Expression - automatic call execute thase
function getData(dataId) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("data",dataId);
            resolve("Success");
        },2000);
    });
}

(async function getAllData() {
    console.log("getting data1....");
    await getData(1);
    console.log("getting data2....");
    await getData(2);
    console.log("getting data3....");
    await getData(3); 
})();