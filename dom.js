/* console.log("hello");
window.console.log("hiral");

console.dir(document.body);
console.log(document.body);

console.dir(document.body.childNodes);
console.dir(document.body.childNodes[1]);

document.body.childNodes[1].innerText = 'abcd'; // change heading name
document.body.style.background = 'green';      // change backgroun color */

// print heading - Access element using id 
/*let heading = document.getElementById("heading");
console.log(heading);
console.dir(heading);

//Access element using Class
let heading = document.getElementsByClassName("heading");
console.log(heading);
console.dir(heading); 

//Access element using tag
let pgraph = document.getElementsByTagName("p");
console.dir(pgraph);

// Query Selector - pass id , class & tag
let firstele = document.querySelector("p");  // paragraph mathi 1st elements return krse
console.log(firstele);

// returns all elements - return node list
let element = document.querySelectorAll("p");
console.log(element);  

// print firstchild
console.dir(document.body.firstChild);

console.log(document.querySelector("div"));

console.log(document.querySelector("div").children); 

let div = document.querySelector("div");
console.log(div);

//create h2 heading. append 'h' to this text using js
let h2 = document.querySelector("h2");
console.dir(h2);
console.dir(h2.innerText);

h2.innerText = h2.innerText + " from Apna Clg Stud"; 

//create 3 divs with common class name - 'box'. access them & add someunique text to each of them.
let divs = document.querySelectorAll(".box");
console.log(divs[0]);
console.log(divs[1]);
console.log(divs[2]);

let divs1 = document.querySelectorAll(".box");
divs1[0].innerText = 'new unique value 1';
divs1[1].innerText = 'new unique value 2';

let divs = document.querySelectorAll(".box");
let idx = 1;
for(div of divs){
 div.innerText = `new unique value ${idx}`;
 idx++; 
}  

// getAttributes - to get the attribute value
let div = document.createElement("div");
console.log(div);
let id = div.getAttribute("id");
console.log(id);

let para = document.querySelector("p");
console.log(para.getAttribute("class"));

// setAttribute
let para1= document.querySelector("p");
console.log(para1.getAttribute("class","newClass")); */

// create btn , set background color & text color. insert the btn as the first element inside the body tag.
let btn = document.createElement("button");
btn.innerText = "Click me!";
btn.style.color = "white";
btn.style.backgroundColor = "red";
document.querySelector("body").prepend(btn);



