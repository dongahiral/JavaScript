let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

// generate computer choice
const gencompchoice = () => {
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

// draw gane 
const drawGame = () => {
   msg.innerText = "Game was Draw. Play again";
   msg.style.backgroundColor = "#081b31";
};

// showWinner
const showWinner = (userwin,userchoice,comchoice) => {
    if(userwin) {
        userScore++;
        userScorepara.innerText = userScore;
        msg.innerText = `You Win! Your ${userchoice} beats ${comchoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorepara.innerText = compScore;
        msg.innerText = `You Lose. ${comchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
}

// generate user choice
const playGame = (userchoice) => {
    // Generate computer choice
    const comchoice = gencompchoice();
    if(userchoice === comchoice){
        drawGame();
    } else{
        let userwin = true;
        if(userchoice === "rock"){
            // scissors , paper
            userwin = comchoice === "paper" ? false : true;
        } else if(userchoice === "paper"){
            // rock , scissors
            userwin = comchoice === "scissors" ? false : true;
        } else {
            // rock , paper
            userwin = comchoice === "rock" ? false : true;
        }
        showWinner(userwin,userchoice,comchoice);;
    }
     
};

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userchoice = choice.getAttribute("id");
        playGame(userchoice);
    });
});
