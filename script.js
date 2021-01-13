
// change 'var'
var canvas;
var canvasContext;
var ballX = 50;


window.onload = function()  {
    canvas = document.getElementById('canvas');
    canvasContext = canvas.getContext('2d');
    setInterval(drawEverything, 500);
}

function drawEverything() {
    ballX = ballX + 20;

    console.log(ballX);
    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(0,0,canvas.width,canvas.height);
    canvasContext.fillStyle = 'limegreen';
    canvasContext.fillRect(ballX,300,75,25);
}






// Requirements
// Project will be written in:
// HTML
// CSS
// Javascript
// No Javascript libraries, frameworks, etc.
// No following tutorials of snake game apps/projects
// No copying code of other existing snake game apps/projects
// Deliverables
// Snake game ends when:
// Snake touches itself
// Snake touches the outside border
// When the game ends, the gameplay should stop and the user should be notified that the game is over
// The snake should grow one length whenever it eats the apple
// The apple should randomly place itself on the board after snake consumes the apple
// The snake should be controlled by the arrow keys on the keyboard
// The game will  show a score of how many apples have been eaten
