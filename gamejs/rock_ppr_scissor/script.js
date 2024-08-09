let userScore = 0;
let compScore = 0;

const choices=document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice = () => {
//rock,ppr,scissor
const options=["rock","paper","scissor"];
const randIdx = Math.floor(Math.random()*3);
return options[randIdx];
};


const showWinner = (userWin , userChoice , compChoice) =>
{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;

        //console.log("you win!");
        msg.innerText = `You Win!! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;

        
       // console.log("you lose!");
        msg.innerText = `You Lose!! ${compChoice} beats your ${userChoice} `;
      //  msg.innerText = "You Lose!!";
        msg.style.backgroundColor = "red";
    }
}

const drawGame = () =>{
    console.log("game was draw");
    msg.innerText = "Draw!!";
}



const playGame = (userChoice) =>{

    //console.log("user choice = ", userChoice);
    //generate comp choice-> modular way of programming (to break code into chunks)
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);
    if(userChoice === compChoice)
    {
        drawGame();
    }
    else{
        let userWin = true;
        //rock ppr
        if(userChoice === "rock")
        {
            userWin = compChoice === "paper"?false:true;
            
        }
        else if(userChoice === "paper"){
            //sciossor rock
            
            userWin = compChoice === "scissor"?false:true;

        }
        else{
            //rock,ppr
            userWin = compChoice === "rock"?false:true;
        }
        showWinner(userWin , userChoice , compChoice);
    }
    
};


choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");//to get indiviual choice of each element
        playGame(userChoice);
    })
});