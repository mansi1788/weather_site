//userchoice
//compchoice
//scoreboard +1 +2
//if diagnol horizontal vertical same
let userScore = 0;
let compScore = 0;

let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']       
];


const msg = document.getElementById('msg');
const userScoreDisplay = document.getElementById('user-score');
const compScoreDisplay = document.getElementById('comp-score');
const buttons = document.querySelectorAll('.btn');

let currentPlayer = 'X'; 

const switchPlayer = () => {
    if (currentPlayer === 'X') {
        currentPlayer = 'O';
    } else if (currentPlayer === 'O') {
        currentPlayer = 'X';

        
    }
    msg.innerText=`Player ${currentPlayer}'s turn`;
}

const mainlogic = (player) =>{
    //const board="";
//row
        if((board[0][0] ==player&& board[0][1] == player && board[0][2] == player) ||
        (board[1][0] == player && board[1][1] == player && board[1][2] == player) ||
        (board[2][0] == player && board[2][1] == player && board[2][2] == player)||

//coloum
        (board[0][0] == player && board[1][0] == player && board[2][0] == player) ||
        (board[0][1] == player && board[1][1] == player && board[2][1] == player) ||
        (board[0][2] == player && board[1][2] == player && board[2][2] == player)||

//diagnol
       (board[0][0] == player && board[1][1] == player && board[2][2] == player) ||
        (board[0][2] == player && board[1][1] == player && board[2][0] == player))
        {
            return true;
        }            
            return false;
};

const handleClick = (rowIndex ,colIndex) =>{
    if(board[rowIndex][colIndex] === '')
    {
        board[rowIndex][colIndex] = currentPlayer; 
        buttons[rowIndex*3 + colIndex].innerText = currentPlayer;
    

    if(mainlogic(currentPlayer))
    {
        msg.innerText = `player ${currentPlayer} wins!!`
        if(currentPlayer === 'X')
        {
            userScore++;
            userScoreDisplay.innerText = userScore;
        }else{
            compScore++;
            compScoreDisplay.innerText = compScore;

        }
    }
    else{
        switchPlayer();
        if (currentPlayer === 'O') {
            setTimeout(computerMove, 100); // Delay for computer move
        }
    }
   }
};


const computerMove = () => {
    // Simple AI to choose the first available spot
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] === '') {
                handleClick(i, j);
                return;
            }
        }
    }
};

buttons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        //console.log("djj");
        const rowIndex = Math.floor(index / 3); // Determine row index from button index
        const colIndex = index % 3; // Determine column index from button index
        handleClick(rowIndex, colIndex);
        
    });
});

// Initial message
msg.innerText = `Player ${currentPlayer}'s turn`;