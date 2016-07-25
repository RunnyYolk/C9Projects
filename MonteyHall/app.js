// MONTY HALL PROBLEM

// Two contestants are playing a game. There are three boxes, two empty and one containing £100,000.
// The contestants chose a box, the quizmaster removes an empty box from the remaining two boxes.
// The contestants are then given a choice to either stick with their first choise or switch to the other box.
// In this example, one contestant always sticks and the other always switches. Who wins more games?

// Variables for win / lose tallies

var stickWin = 0
var stickLose = 0

var switchWin = 0
var switchLose = 0

var numGames = 0

for (var i = 0; i < 1000000000000; i++){
    // For the contestant who sticks
    
      // Randomly assign car to box
    var carSt = Math.ceil(Math.random()*3)
      // Randomly choose a box
    var guessSt = Math.ceil(Math.random()*3)
      // Quizmaster removes one of the remaining empty boxes. If contestant initially guessed correctly,
      // the contestant keeps his original choise and therefore wins. If contestant initially guessed incorrectly,
      // S/he keeps their original choise and therefore loses. 
      
      // Return result
      // Add result to tally
    if (carSt === guessSt){
      // console.log("The Player who sticks won!");
      stickWin++;
    } else {
      // console.log("The Player who sticks lost!");
      stickLose++;
    }
    
    // Go to switch contest
    // For the contestant who switches
    
    // Randomly assign car to box
    var carSw = Math.ceil(Math.random()*3)
    // Randomly choose a box
    var guessSw = Math.ceil(Math.random()*3)
    // If contestant guesses correctly, quizmaster removes one of the remaining empty boxes,
    // the contestant switches box to the remaining empty box and therefor loses.
     
    // Return result
    // Add result to tally
    if (carSw === guessSw){
      //console.log("The Player who switches lost!");
      switchLose++
    } else {
      //console.log("The Player who switches won!");
      switchWin++  
    }
    numGames++
}

console.log("Both players played " + numGames + " games each.")

console.log("The player who always sticks won " + (stickWin / numGames * 100) + "% of their games")
console.log("The player who always switches won " + (switchWin / numGames * 100) + "% of their games")

//console.log("The Player Who Always Sticks Won " + stickWin + " Times.");
// console.log("The Player Who Always Sticks Lost " + stickLose + " Times.");

//console.log("The Player Who Always Switches Won " + switchWin + " Times.");
//console.log("The Player Who Always Switches Lost " + switchLose + " Times.");