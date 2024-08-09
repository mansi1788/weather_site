// alert game over and stop the game 
// score
//const maxi=0; 
//if (score > maxi)
// {
//     maxi=score
// }
// max-score 
// food random 
// 

const direction = {x:0, y:0};
const foodSound = new Audio('food.mp3');
const gameoverSound = new Audio('gameover.mp3');
const moveSound = new Audio('move.mp3');
const musicSound = new Audio('music.mp3');
let speed = 2; 
let lastpainttime=0;
let snakeArr = [
    {x:13,y:15}
]
food = {x:13 , y:15};


// const board = document.querySelector(".board");
// const score = document.querySelector(".score");
// const highscore = document.querySelector(".hi-score");


function main(ctime){
window.requestAnimationFrame(main);
console.log(ctime)


if((ctime-lastpainttime)/1000 <1/speed) {
    return;
}


lastpainttime = ctime;


gameEngine();



}

function gameEngine(){
board.innerHTML = "";
snakeArr .forEach((e,index) =>{
    snakeElement = document.createElement('div');
    snakeElement.style.gridRowStart = e.y;
    snakeElement.style.gridColumnStart = e.x;
    snakeElement.classList.add('food')
    board.appendChild(snakeElement);
});

//Display the food

foodElement = document.createElement()

}