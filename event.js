
//onClick method
/* let btn1 = document.querySelector("#btn1");
btn1.onclick = () => {
    console.log("btn1 was cilcked");
    let a = 25;
    a++;
    console.log(a);
}; 

//onmouseover method
let div = document.querySelector("div");
div.onmouseover = () => {
    console.log("you are inside div");
} 

// Event Object - for onclick method
btn1.onclick = (e) => {
 console.log(e);
 console.log(e.type);
 console.log(e.target);
 console.log(e.clientX , e.clientY);
}

// Event Object - for onmouseover method
let div = document.querySelector("div");
div.onmouseover = (e) => {
 console.log(e);
 console.log(e.type);
 console.log(e.target);
 console.log(e.clientX , e.clientY);
} 

// addEventListener - same event pr multiple task perform krva mate use thai
let btn1 = document.querySelector("#btn1");
btn1.addEventListener("click",(e) => {
 console.log("button was clicked");
 console.log(e);
 console.log(e.type);
}); 

// removEventListener
let btn1 = document.querySelector("#btn1");
btn1.addEventListener("click",() => {
    console.log("btn was clicked - habdler1");
});

btn1.addEventListener("click",() => {
    console.log("btn was clicked - habdler2");
});
const handler3 = () => {
};
btn1.addEventListener("click",handler3);

btn1.addEventListener("click",() => {
    console.log("btn was clicked - habdler4");
});

btn1.removeEventListener("click",handler3); */

// create a toggle btn that changes the screen to dark-mode when clicked & light-mode when clicked again.
let modebtn = document.querySelector("#mode");
let curmod = "light";
modebtn.addEventListener("click",() => {
    if(curmod === 'light'){
        curmod = "dark";
        document.querySelector("body").style.backgroundColor = "black";
    } else {
        curmod = "light";
        document.querySelector("body").style.backgroundColor = "white";
    }
 console.log(curmod);
});
