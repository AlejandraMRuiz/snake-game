// TEST CASE
// Description: Get entire snake body moving down together, seamlessly. 

// 1. press right arrow btn.
// EXPECTATION: 
// entire snake moves right.
// ACTUAL: works.

// 2. press down arrown btn.
// EXPECTATION: 
// head moves down, 
// midsection goes to head's prior position
// and tail goes to midsection's original position.
// ACTUAL: all 3 snake parts move down, but not in a chain.




const canvas = document.getElementById('canvas');
const canvasContext = canvas.getContext('2d');
const size = 10;


const snake = {
    direction: 'RIGHT',
    body: [
        { x: 110, y: 30 },
        { x: 100, y: 30 },
        { x: 90, y: 30 },
        { x: 80, y: 30 },
        { x: 70, y: 30 },
        { x: 60, y: 30 }, 
        { x: 50, y: 30 },
        { x: 40, y: 30 },
        { x: 30, y: 30 },
        { x: 20, y: 30 }, 
        { x: 10, y: 30 },
        { x: 0, y: 30 }
    ],
    speed: 10
};

let food = { x: null, y: null };


let interval;

window.onload = function()  {
    interval = setInterval(function()  {
        drawEverything(snake.direction);} 
        ,150)
};


document.onkeydown = function (e) { 
    e.preventDefault(); 

    if (e.key == ' ') {        
        snake.direction = 'STOP';    
    }
    else if (e.key == 'ArrowUp' && snake.direction !== 'DOWN') {
        snake.direction = 'UP';   
    }    
    else if (e.key == 'ArrowDown' && snake.direction !== 'UP') {        
        snake.direction = 'DOWN';    
    }
    else if (e.key == 'ArrowLeft' && snake.direction !== 'RIGHT') {
        snake.direction = 'LEFT';    
    }
    else if (e.key == 'ArrowRight' && snake.direction !== 'LEFT') {        
        snake.direction = 'RIGHT';    
    }    
};

function endGame()  {
    snake.direction = 'STOP';
    clearInterval(interval);
    alert('game over!');
}

function checkBorder()  {
    if (snake.body[0].x > canvas.width || 
        snake.body[0].y > canvas.height ||
        snake.body[0].x < 0 ||
        snake.body[0].y < 0)  {
        endGame();
    }
};

function moveSnake()    {
    const snakeCopy = snake.body.map(snakePart => Object.assign({}, snakePart));

    switch(snake.direction) {
        case 'RIGHT':  snake.body[0].x = snake.body[0].x + snake.speed;
        break;

        case 'LEFT':  snake.body[0].x = snake.body[0].x - snake.speed;
        break;

        case 'UP':  snake.body[0].y = snake.body[0].y - snake.speed;
        break;

        case 'DOWN':  snake.body[0].y = snake.body[0].y + snake.speed;
        break;
    }

    for (var i = 1; i < snake.body.length; i++) {
        snake.body[i] = snakeCopy[i - 1]; 
    }
}

function checkEatsItself()  {
    let bodyToCheck = snake.body.slice();
    bodyToCheck.shift(); 

    let headX = snake.body[0].x
    let headY = snake.body[0].y
    console.log("heads ", headX, headY)
    bodyToCheck.map(bodyPart => {
        console.log("x&y ", bodyPart.x, bodyPart.y)
        if (headX == bodyPart.x && headY == bodyPart.y)   {
        endGame();
        }
    })
}

function addApple()    {
    let tempX
    let tempY

    if (food.x == null && food.y == null)   {
        tempX = Math.floor(Math.random() * (canvas.width / size)) * size;
        tempY = Math.floor(Math.random() * (canvas.height / size)) * size;

        snake.body.map(bodyPart => {
            if (tempX == bodyPart.x && tempY == bodyPart.y)   {
                addApple();
        }
    })

    food.x = tempX;
    food.y = tempY;
    }
}

function eatApple() {
    if (snake.body[0].x == food.x && snake.body[0].y == food.y) {
        snake.body.push({ x:food.x, y:food.y })     
        food.x = null;
        food.y = null;
    }
}

function drawEverything() { 
    moveSnake();
    addApple();
    eatApple();
    checkBorder();
    checkEatsItself();
    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(0,0,canvas.width,canvas.height);
    canvasContext.fillStyle = 'red';
    canvasContext.fillRect(food.x, food.y, size, size);
    canvasContext.fillStyle = 'limegreen';

    for (let i = 0; i < snake.body.length; i++)  {
        canvasContext.fillRect(snake.body[i].x, snake.body[i].y, size, size);
    }
};




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