//console.log("Hello World");

function getComputerChoice(){
    let choice = Math.floor(Math.random()*100);
    if (choice <= 33){
        return "Rock"
    }
    else if (choice <= 66){
        return "Paper"
    }
    else{
        return "Scissor"
    }
}


function getHumanChoice(){
    let a = prompt("Rock, Paper, or Scissor?");
    let choice = a.charAt(0).toUpperCase() + a.slice(1).toLowerCase();
    if(choice === "Rock" || choice === "Paper" || choice === "Scissor"){
        return choice;
    }
    else {
        alert("Incorrect input, please try again");
        return getHumanChoice();
    }
}


let humanScore = 0;
let computerScore = 0;
let rounds = 0;

function playRound(humanChoice,computerChoice){
    let hScore = 0;
    let cScore = 0;
    let roundCount = 1;

    if (humanChoice === computerChoice){
        roundCount++;
    }
    else if (humanChoice === "Rock" && computerChoice === "Paper"){
    }
    else if (humanChoice === "Rock" && computerChoice === "Scissor"){
        hScore++;
    }
    else if (humanChoice === "Paper" && computerChoice === "Rock"){
        hScore++;
    }
    else if (humanChoice === "Paper" && computerChoice === "Scissor"){
        cScore++;
    }
    else if (humanChoice === "Scissor" && computerChoice === "Rock"){
        cScore++;
    }
    else if (humanChoice === "Scissor" && computerChoice === "Paper"){
        hScore++;
    }
    
    return{
        humanScore: hScore,
        computerScore: cScore,
        rounds: roundCount,
    };
}

const rock = document.querySelector("#Rock");
rock.value = "Rock";
const paper = document.querySelector("#Paper");
paper.value = "Paper"
const scissor = document.querySelector("#Scissor")
scissor.value ="Scissor"

rock.addEventListener(('click'), () => {
    let comp = getComputerChoice();
    const roundResult = playRound("Rock",comp);
    humanScore += roundResult.humanScore;
    computerScore += roundResult.computerScore;
    rounds += roundResult.rounds;

    console.log("Round: " + rounds);
    console.log("Human says " + rock.value);
    console.log("Computer says " + comp);
    console.log("Human score: " + humanScore);
    console.log("Computer score: " + computerScore);
    });

paper.addEventListener(('click'), () => {
    let comp = getComputerChoice();
    const roundResult = playRound("Paper",comp);
    humanScore += roundResult.humanScore;
    computerScore += roundResult.computerScore;
    rounds += roundResult.rounds;

    console.log("Round: " + rounds);
    console.log("Human says " + paper.value);
    console.log("Computer says " + comp);
    console.log("Human score: " + humanScore);
    console.log("Computer score: " + computerScore);
    });

scissor.addEventListener(('click'), () => {
    let comp = getComputerChoice();
    const roundResult = playRound("Scissor",comp);
    humanScore += roundResult.humanScore;
    computerScore += roundResult.computerScore;
    rounds += roundResult.rounds;

    console.log("Round: " + rounds);
    console.log("Human says " + scissor.value);
    console.log("Computer says " + comp);
    console.log("Human score: " + humanScore);
    console.log("Computer score: " + computerScore);
    });
            

/*
function playGame(){
    const human = getHumanChoice();    
    const comp = getComputerChoice();
    const roundResult = playRound(human,comp)
    humanScore += roundResult.humanScore;
    computerScore += roundResult.computerScore;
    rounds += roundResult.rounds;
    console.log("Round: " + rounds);
    console.log("Human says " + human);
    console.log("Computer says " + comp);
    console.log("Human score: " + humanScore);
    console.log("Computer score: " + computerScore);
    playGame();
    //console.log("Gameover");
}
playGame();
*/