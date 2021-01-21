// TEST CASE
// Description: Get snake to appear on canvas but by using an object. 

// 1. Load page
// EXPECTATION: Snake appears on screen (inmobile)
// ACTUAL: nothing happens




const canvas = document.getElementById('canvas');
const canvasContext = canvas.getContext('2d');
// let snakeBody = 50;

// 
let snakeBody = [
    { x: 20, y: 30 },
    { x: 10, y: 30 },
    { x: 0, y: 30 },
]

// let snakeBody = [
//     { x: 30, y: 30 },
//     { x: 20, y: 30 },
//     { x: 10, y: 30 },
// ]

// let snakeBody = [
//     { x: 40, y: 30 },
//     { x: 30, y: 30 },
//     { x: 20, y: 30 },
// ]

// let snakeBody = [
//     { x: 40, y: 30 },
//     { x: 30, y: 30 },
//     { x: 20, y: 30 },
// ]

// let snakeBody = [
//     { x: 40, y: 40 },
//     { x: 40, y: 30 },
//     { x: 30, y: 30 },
// ]

// let snakeBody = [
//     { x: 40, y: 50 },
//     { x: 40, y: 40 },
//     { x: 40, y: 30 },
// ]



// add 10 to x to go right each time right arrow pressed
// subtract 10 to x to go left each time left arrow pressed
// add 10 to y to go down each time down arrow pressed (consider x position will also move for rest of body not head)
// subtract 10 to y to go up each time up arrow pressed (consider x position will also move for rest of body not head)



window.onload = function()  {
    setInterval(function()  {
        moveSnake();
        drawEverything();} 
        ,500)
}


function drawEverything() {
    snakeBody = snakeBody + 20;

    console.log(snakeBody);
    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(0,0,canvas.width,canvas.height);
    canvasContext.fillStyle = 'limegreen';
    canvasContext.fillRect(snakeBody,300,75,25);
}

// function moveSnake()    {
//     snakeBody = snakeBody + 5;
// }


// function moveSnakeUp()    {
//    event listener on each arrow button
//    on click let snakeBody = [x here y there]
//    buuuuut you need to have a for OR while loop 
//    so you wouldn't have to manually increment by 10 each time
// (you may have to take this out of a function)
// }



// TEST CASE
// Description: Move snake up 

// 1. Push "up" arrow button
// EXPECTATION: Snake moves in upward direction (no stopping)
// ACTUAL: nothing happens















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
