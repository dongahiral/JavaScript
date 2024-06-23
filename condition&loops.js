// if condition 
/* let age  = 15;

if(age >= 18){
    console.log("you can vot");
}

if(age < 18){
    console.log("you can not vot");
}*/

// if - else condition 
/* let mode = "blue";
let color;

if(mode === "dark") {
    color = "black";
}else{
    color = "white";
}
console.log(color);*/

// else - if condition 
/*let mode = "pink";
let color;

if(mode === "dark") {
    color = "black";
}else if (mode === "blue"){
    color = "blue";
}else if (mode === "pink"){
    color = "pink"
}else{
    color = "white";
}
console.log(color);*/

// check if the number is a multiple of 5 or not.
/* let num = prompt("Enter a number:");
if (num % 5 === 0){
    console.log(num , " is a multiple of 5");
} else {
    console.log(num , "is Not a multiple of 5");
} */

// write a code which can give grades to students according to their scores.
/*let score = 75;  
let score = prompt("Enter your score (0-100):");    // using prompt
let grade;
if (score >= 90 && score <= 100){
    grade = "A";
} else if (score >= 70 && score <= 89){
    grade = "B";
} else if (score >= 60 && score <= 69){
    grade = "C";
} else if (score >= 50 && score <= 59){
    grade = "D";
} else if (score >= 0 && score <= 49){
    grade = "F";
}
console.log("your grade was :", grade); */

// loops - For loop
/*for (let i = 1; i<=5; i++){
    console.log("Hiral");
}*/

// Calculate sum of 1 to 5
/*let sum = 0;
for (let i = 1; i <= 5; i++){
    sum = sum + i;
}
console.log(sum);

// print 1 to 5
for(let i = 1; i <= 5; i++){
    console.log("i = ", i);
} */

// while loop
/*let i = 1;
while(i<=5){
    console.log("Hiral");
    i++;
}

// do-while loop
let k = 1;
do{
    console.log("Hiral");
    k++
} while(i <= 10);*/

// for - of loop
/*let str = "Hiral";
for (let i of str){
    console.log(i);
}*/

// for - in loop
/* let student = {
    name : 'hiral',
    age : 25,
    no : 12345678,
};
for (let key in student){
    console.log("key=", key , "value =" , student[key]);
} */

//  print all even number from 0 to 100
/* for (let num=0; num<=100; num++){
    if(num % 2 !== 0)         // odd number
    if(num % 2 == 0){         // even number
        console.log(num);
    }
} */

// random game number, guessing the game number until the user enters correct value. 
let gamnum = 25;
let user = prompt("Enter number :");

while (user != gamnum){
    user = prompt("Wrong Number , Guess again");
}
console.log("Congratulation , right number");