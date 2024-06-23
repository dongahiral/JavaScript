/* let str = "hiral"
let str1 = "123";*/

/* let str = 'ApnaCollege';
console.log(str[1]);*/

// Template Literals 
/*let str = `this is tempalate literals`;
console.log(typeof str);

let obj = {
    item : 'pen',
    price : 10,
};

let output = `the cost of ${obj.item} is ${obj.price} ruppes`;   // 2nd way using tamplate literals 
console.log(output);

console.log("the cost of" , obj.item , "is" , obj.price);     // 1st way 

let str1  = `sum of num ${1+2+3}`;
console.log(str1); */

// Escape character
/* let str = "Hiral \nKinjan \nGinoya" ;
console.log(str);

let str1 = "Hiral\tKinjan\tGinoya" ;
console.log(str1)
console.log(str1.length); */

// Methods  - UpperCase() 
/*let str = "Hiral Kinajan Ginoya"
let newstr = str.toUpperCase();
console.log(str);
console.log(newstr); */

// LowerCase()
/*let str = "Hiral Kinajan Ginoya"
let newstr = str.toLowerCase();
console.log(str);
console.log(newstr); */

// trim() - removes whitespaces from starting and ending 
/*let str = "      Hiral Kinjan Ginoya     ";
console.log(str.trim()); */

// slice() - returns part of strind
/*let str = "0123456789";
console.log(str.slice(1,6));*/

// concate()
/* let str = "Hiral";
let str1 = "Kinjan";
console.log(str + str1);

let res = str.concat(str1);
console.log(res); */

// replace() - new value add kre old value ni jagya 
/*let str = "Hiral";
console.log(str.replace("H","K")); */

/* let str = "Hellololo";    // first value j replace thase
console.log(str.replace("lo","p"));

// replaceAll() - same badhi value replace thase 
let str1 = "Hellololo";
console.log(str1.replaceAll("lo","p")); */

// charAt() 
/*let str = "I love JS";
console.log(str.charAt(7));*/

//  practical 1 : start usernm with  @ , followed by their fullnm & ending with the fullnm length.
 let fullname = prompt("Enter fullname without space :");
let username = "@" + fullname + fullname.length;
console.log(username);
