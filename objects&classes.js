// direct way to create object
/*const stud = {
    fullname : "hiral",
    marks : 99.95,
    printmarks : function() {
        console.log("marks :" , this.marks);  // this means je te object (this - stud)
    },
};

// create prototype
const employee = {
    calTax() {
        console.log("tax rate is 10%");
    },
}; 

const hiral = {
    salary : 50000,
};

hiral.__proto__ = employee;   

// Create class
class ToyotaCar {
   start(){
    console.log("start");
   }
   stop(){
    console.log("stop");
   }
   // define variable
setBrand(brand){
    this.brandName = brand
}
}

// same template ma multiple object banavva class no use thai.
// class mathi create object
let Odi = new ToyotaCar();
Odi.setBrand("Odi");
let fortuner = new ToyotaCar();
fortuner.setBrand("fortuner");  

// create constructor 
class ToyotaCar {
    constructor(brand , mileage){
        console.log("create new object");
        this.brand = brand;
        this.mileage = mileage;

    }
    start(){
     console.log("start");
    }
    stop(){
     console.log("stop");
    }
}
let Odi = new ToyotaCar("odi",10);
console.log(Odi);
let fortuner = new ToyotaCar("fortuner",12);
console.log(fortuner);  

// Inheritance
class parent {
    hello() {
        console.log("Hello");
    }
}

class child extends parent {}

let obj = new child();  

class person {
    constructor() {
        this.species = "homo sapiens";
    }
    eat() {
        console.log("eat");
    }

    sleep(){
        console.log("sleep");
    }
 }

 class Engineer extends person{
    work() {
        console.log("Slove problems, build something");
    }
 }
 let obj = new Engineer(); 

 // Super key
 class person {
    constructor(name) {
        this.species = "homo sapiens";
        this.name = name;
    }

    eat() {
        console.log("eat");
    }
 }

 class Engineer extends person {
    constructor(name){
        super(name);
    }

    work() {
        super.eat();
        console.log("solve problems");
    }
 }

 let obj = new Engineer("hiral"); 

 // prectical : create a class user with 2 properties name & email. it also has a method called viewdata() that allows user to view website data.
 let Data = "Inforamation";
 class User {
    constructor(name , email){
        this.name = name;
        this.email = email;
    }
    viewData() {
        console.log("Data = " , Data);
    }
 }

 class Admin extends User {
    constructor(name,email){
        super(name,email);
    }
    editData() {
        Data = "new value";
    }
 }

 let admin1 = new Admin("admin", "admin@gamil.com");

 let stud1 = new User("Hiral","abc@gmail.com");
 let stud2 = new User("Kinjan","xyz@gmail.com");   */

 // Error Handling - try...catch
 let a = 5;
 let b = 10;
 console.log("a =" , a);
 console.log("b =" , b);
 console.log("a+b = ", a+b);
 try{
    console.log("a+b = ", a+c);
 } catch(err){
    console.log(err);
 }
 console.log("a+b = ", a+b);
 console.log("a+b = ", a+b);
 console.log("a+b = ", a+b);
 console.log("a+b = ", a+b);
 console.log("a+b = ", a+b);