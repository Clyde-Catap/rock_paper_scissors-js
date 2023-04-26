function GetComputerchoice() {
    const choices = ["Rock", "Paper", "Scissors"]
    return choices[Math.floor(Math.random()*choices.length)]
}


let Score = 0;
let comp_score = 0;

const div = document.querySelector('#container');
const p = document.createElement('p');
const c = document.createElement('p');
const w = document.createElement('h2');



document.querySelectorAll('button').forEach(x =>{
    let player = x.getAttribute('id');
    x.addEventListener('click', function() {
        let comp = GetComputerchoice();

        if (Score == 5) {
            w.textContent = 'YOU WIN!!!';
            div.appendChild(w);
        }

        else if (comp_score == 5) {
            w.textContent = 'YOU LOSE!!!';
            div.appendChild(w);
        }


        else if (player == comp) {
            p.textContent = 'Your Score: ' + Score;
            c.textContent = 'Comp Score: ' + comp_score;
            div.appendChild(p);
            div.appendChild(c);

            return console.log("Draw :p"), console.log( "Your Score: " + Score), console.log( "Computer Score: " + comp_score);
        }
        

        else if ((player == "Rock" && comp == "Scissors") || (player == "Paper" && comp == "Rock") || (player == "Scissors" && comp == "Paper") ) {
            Score += 1 
            
            p.textContent = 'Your Score: ' + Score;
            c.textContent = 'Comp Score: ' + comp_score;
            div.appendChild(p);
            div.appendChild(c);


            return console.log("You win"), console.log( "Your Score: " + Score), console.log( "Computer Score: " + comp_score);
        }


        else {
            comp_score += 1 
            
            p.textContent = 'Your Score: ' + Score;
            c.textContent = 'Comp Score: ' + comp_score;
            div.appendChild(p);
            div.appendChild(c);


            return console.log("You Lose"), console.log( "Your Score: " + Score), console.log( "Computer Score: " + comp_score);
        
        }


    } 
    );
}
);


