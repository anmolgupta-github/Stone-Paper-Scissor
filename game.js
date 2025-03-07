let userScore=0;
let compScore=0;

let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");

let userScorePara=document.querySelector("#user-score");
let compScorePara=document.querySelector("#com-score");

const genCompScore=()=>{
    const options=["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}
const gameD=()=>{
    msg.innerText = "Game was draw! ,Play again";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin,userChoice, compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame=(userChoice)=>{
    const compChoice=genCompScore();
    if(userChoice === compChoice){
        gameD();
    }
    else{
        let userWin=true;
        if(userChoice==="rock")
            {
               userWin = compChoice === "paper" ? false : true;
            }
            else if(userChoice==="paper"){
              userWin =  compChoice === "scissors" ? false : true;
            }
            else{
                userWin = compChoice==="rock" ? false : true;
            }
            showWinner(userWin,userChoice, compChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
})