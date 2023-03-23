function GetComputerchoice() {
    let choices = ["Rock", "Paper", "Scissors"]
    return choices[Math.floor(Math.random()*choices.length)]
}

function GetPlayerchoice(){
    let player_answer = prompt("What's Your choice Rock, Paper, or Scissors??")
    return player_answer


}


function Playgame() {

    let Score = 0
    let comp_score = 0
    let player = GetComputerchoice()
    let comp = GetPlayerchoice()

if (player == comp) {

    return console.log("Draw :p"), console.log( "Your Score: " + Score), console.log( "Computer Score: " + comp_score);

}

else if ((player == "Rock" && comp == "Scissors") || (player == "Paper" && comp == "Rock") || (player == "Scissors" && comp == "Paper") ) {
    Score += 1 
    return console.log("You win"), console.log( "Your Score: " + Score), console.log( "Computer Score: " + comp_score);

}
else {
    comp_score += 1 
    return console.log("You Lose"), console.log( "Your Score: " + Score), console.log( "Computer Score: " + comp_score);

}
}

let number_of_rounds = prompt("How many rounds")

for (let i = 0; i < number_of_rounds; i++)
{
    let final_score = Playgame();
}
