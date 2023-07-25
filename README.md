# rock-paper-scissor

A simple JavaScript game

Points to be covered

[OK] Start a new Git repo for your project.
[OK] Create a blank HTML document with a script tag (Hint: it is best practice to link an external .js file).
[OK] Create getComputerChoice function that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
[OK] Create a function playerSelection to ask the user for rock, paper or scissor, so he can select his option.
[OK] Make your function’s playerSelection parameter case-insensitive.
[OK] Write a function playRound that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
[OK] Write a NEW function called game(). Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.
[OK] At this point you should be using console.log() to display the results of each round and the winner at the end.

Second part:
[OK]Set up a new branch rps-ui on your previous Rock Paper Scissors repo
[OK]In our UI, the player should be able to play the game by clicking on buttons rather than typing their answer in a prompt.
[OK]For now, remove the logic that plays exactly five rounds.
[OK]Create three buttons, one for each selection. Add an event listener to the buttons that call your playRound function with the correct playerSelection every time a button is clicked. (you can keep the console.logs for this step)
[OK]Add a div for displaying results and change all of your console.logs into DOM methods.
[OK]Display the running score, and announce a winner of the game once one player reaches 5 points.
[OK] Upload the changes to the main branch
