let computerScore = 0
let humanScore = 0


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function getComputerChoice(){
    return getRandomInt(3)
}

function getHumanChoice(){
    let humanChoice = prompt("Your score: " + humanScore + "\nComputer score: " + computerScore + "\nRock / Papers / Scissors?")
    if(humanChoice === "Rock" || humanChoice === "rock"){
        humanChoice = 0
    }else if(humanChoice === "Papers" || humanChoice === "papers"){
        humanChoice = 1
    }else if(humanChoice === "scissors" || humanChoice === "scissors"){
        humanChoice = 2
    }else{
        alert("Try again.")
        return getHumanChoice()
    }
    return humanChoice
}

function playRound(){
    let humanChoice = getHumanChoice()
    let computerChoice = getComputerChoice()

    let result = 0

    if(humanChoice === computerChoice){
        alert("Nobody won.")
        return 0
    }else if((humanChoice === 0 && computerChoice === 2) || 
             (humanChoice === 1 && computerChoice === 0) || 
             (humanChoice === 2 && computerChoice === 1)){
        alert("YOU WON! :D")
        humanScore++
        return 1
    }else{
        alert("You lost. :(")
        computerScore++
        return 1
    }

}

function playGame(){
    computerScore = 0
    humanScore = 0
    for(let i=0; i<5; i+=playRound()){
        if(humanScore > 2 || computerScore > 2){
            break
        }
    }
    if(humanScore > computerScore){
        alert("NICE! YOU WON THE COMPUTER!")
    }else{
        alert("damn, you lost")
    }
}

playGame()