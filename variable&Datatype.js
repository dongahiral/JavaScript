// let variable 
 let name = "hiral donga"
let age = 25;
let price = 999;
console.log(name);
console.log(age);
console.log(price); 

// Const Variable
const PI = 3.14;
console.log(PI);

// var variable 
var Fname = "hiral donga"
var Fage = 25;
var Fprice = 999;
console.log(Fname);
console.log(Fage);
console.log(Fprice); 

// DataTypes 
 let x = BigInt("123");
let y = Symbol("Hello!");

const student = {
    fullname : 'hiral',
    age : 25,
    cgpa : 9.8,
};

console.log(student['fullname']); // first way to access key from object
console.log(student.age); // second  way to access key from object

// assign new value in object 
student["age"] = student["age"] + 2;
console.log(student["age"])

student["fullname"] = 'Hiral Kinajn Ginoya'
console.log(student["fullname"]); 

// create a const object called "product" to store information shown in the picture.
const product = {
    title : "Ball Pen",
    rating : 4.5,
    offer : 5,
    price : 270
};
console.log(product);

// create a const object called "profile" to store information shown in the picture.
const profile = {
    username : 'Hiral Ginoya',
    isFollow : true,
    Followers : 270,
    Following : 250,
};
console.log(product);
console.log(typeof product);
console.log(typeof profile["username"]);

