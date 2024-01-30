let userScore =0;
let compScore =0;

const choices = document.querySelectorAll(".choice");
const msg = document.getElementById("msg");
const userScoreP = document.getElementById("user-score");
const compScoreP = document.getElementById("Compu-score");

//getting user choice
const getCompuChoice = () => {
    const option = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return option[randIdx];
};

//draw Game

const drawGame = () => {
    //console.log("Game Is drawn");
    msg.innerHTML = "Match is drawn";
    msg.style.backgroundColor ="olive"
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        //console.log("You win!");
        userScore++;
        userScoreP.innerText = userScore;
        msg.innerHTML = `You win! your ${userChoice} bits ${compChoice}`;
        msg.style.backgroundColor ="green";
    }else{
        //console.log("You lose!");
        compScore++;
        compScoreP.innerText = compScore;
        msg.innerHTML = `You lose! ${compChoice} bits your ${userChoice}`;    
        msg.style.backgroundColor ="red";
    }
};

const playGame = (userChoice) => {
    //console.log("User choice is  " + userChoice);
    //Ganerate the user choice
    const compChoice = getCompuChoice();
    //console.log("Computer choice is  " + compChoice);
    if(userChoice === compChoice){
        //Draw the game
        drawGame();
    }else {
        let userWin = true;
        if (userChoice === "rock"){
            // scissor , paper computer choise asel
            userWin = compChoice === "paper" ? false : true;
        }else if (userChoice === "paper"){
            // rock , scissor computer choise asel
            userWin = compChoice === "scissors" ? false : true;
        }else {
            // rock, paper computer choise asel
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        //console.log("choice was clicked :"+userChoice);
        playGame(userChoice);
    });
});