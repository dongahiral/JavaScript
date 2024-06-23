// Arithmetic operators
/* let a = 5;
let b = 2;
let c = a+b;

console.log("a = ", a ,  " &  b = " , b);
console.log(a+b);                  // first way
console.log("a + b =",a+b);        // second way 
console.log("a + b =", c );        // third way 
console.log("a - b =",a - b); 
console.log("a * b =",a * b); 
console.log("a / b =",a / b); 
console.log("a % b =",a % b); 
console.log("a ** b =",a ** b);      // Exponentiation  - means 5 ni 2 ghat 5*5 = 25 - 2 ne 5 ni ghat ghanse */

// Unary Operators
/*let a = 5;
let b = 2;

 console.log("a = " , a , "& b = " , b);
a = a + 1;                                            
console.log("a = " , a);
b = b - 1;
console.log("b = " , b);

a++;                              // Increment 
console.log("a = " , a);
a--;                             // Decrement 
console.log("b = " , b);
console.log("++a = " , ++a);     // a++ Post increment 
console.log("a++ = " , a++);     // ++a pre increment 
console.log("--a = " , --a);     // a-- Post increment 
console.log("a-- = " , a--);     // --a pre increment */

// Assignment Operators 
/*let a = 5;
let b = 2;
a += 4;     // a = a + 4
a -= 4;     // a = a - 4
a *= 4;    // a = a * 4
a /= 4;    // a = a / 4
a %= 4;    // a = a % 4
a **= 4;

console.log("a = " , a); */

// Comarison Operators
/* let a = 5;
let b = 2;
 console.log("5 == 2",a == b);
console.log("5 != 2",a != b);
console.log("5 > 2" , a > b);
console.log("5 < 2" , a < b);
console.log("5 >= 2" , a >= b);
console.log("5 <= 2" , a <= b);

 let a = 5;
let b = "5" ;  // Convert string to number then check condition 
console.log("5 === 2" , a === b) ;
console.log("5 !== 2" , a !== b) ; */

// Logical Operators
/*let a = 5;
let b = 2;

let con1 = a < b;
let con2 = a === 5;
//console.log("con1 && con2 =" , con1 && con2);
//console.log("con1 || con2 =" , con1 || con2);
console.log("!(5<2) =", !(a < b));     ///true hase to false and false hase to true...opposite 

//console.log("con1 && con2 = ", a > b && a === 6);*/

// Ternary Operators 
let age = 25;    // 1st way 
let result = age >= 18 ? "vote" : "Not vote";
console.log(result);

let a = 16;    // 2nd way 
a >= 18 ? console.log("Vote") : console.log("Not vote");