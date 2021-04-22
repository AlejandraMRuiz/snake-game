// TEST CASE:

// EXPECTATION
// game resets after clicking "ok" on game over alert.

// ACTUAL
// game requires reload to continue playing.


const canvas = document.getElementById('canvas');
const canvasContext = canvas.getContext('2d');
const size = 10;
let score = 0;


const snake = {
    direction: 'RIGHT',
    body: [
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


function restartGame()  {
    snake.direction = 'RIGHT';
    snake.body = [
            { x: 20, y: 30 }, 
            { x: 10, y: 30 },
            { x: 0, y: 30 }
        ];
    snake.speed = 10;
};


function endGame()  {
    snake.direction = 'STOP';
    clearInterval(interval);
    alert('game over!');
    restartGame();
};


function checkBorder()  {
    if (snake.body[0].x > canvas.width || 
        snake.body[0].y > canvas.height ||
        snake.body[0].x < 0 ||
        snake.body[0].y < 0)  {
        endGame();
    };
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
    };

    for (var i = 1; i < snake.body.length; i++) {
        snake.body[i] = snakeCopy[i - 1]; 
    };
};


function checkEatsItself()  {
    let bodyToCheck = snake.body.slice();
    bodyToCheck.shift(); 

    let headX = snake.body[0].x
    let headY = snake.body[0].y
    bodyToCheck.map(bodyPart => {
        if (headX == bodyPart.x && headY == bodyPart.y)   {
        endGame();
        };
    });
};


function addApple()    {
    let tempX
    let tempY

    if (food.x == null && food.y == null)   {
        tempX = Math.floor(Math.random() * (canvas.width / size)) * size;
        tempY = Math.floor(Math.random() * (canvas.height / size)) * size;

        snake.body.map(bodyPart => {
            if (tempX == bodyPart.x && tempY == bodyPart.y)   {
                addApple();
            };
        });

    food.x = tempX;
    food.y = tempY;
    };
};


function eatApple() {
    if (snake.body[0].x == food.x && snake.body[0].y == food.y) {
        snake.body.push({ x:food.x, y:food.y })     
        food.x = null;
        food.y = null;
        score++;
        document.getElementById("score-value").textContent = score;
    };
};


function drawEverything() { 
    checkEatsItself();
    checkBorder();
    addApple();
    eatApple();
    moveSnake();
    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(0,0,canvas.width,canvas.height);
    canvasContext.fillStyle = 'red';
    canvasContext.fillRect(food.x, food.y, size, size);
    canvasContext.fillStyle = 'limegreen';

    for (let i = 0; i < snake.body.length; i++)  {
        canvasContext.fillRect(snake.body[i].x, snake.body[i].y, size, size);
    };
};