let board = ["","","","","","","","",""];
move = 'X';
const cells = document.querySelectorAll(".css-board div");
console.log(cells)

let winningPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

// for (let i = 0; i < cells.length; i++) {
//     cells[i].onclick = function () {
//         handleClick(i);
//     };
// }

function winner() {
    for (let pattern of winningPattern)
    {
        let pos0 = cells[pattern[0]].innerText;
        let pos1 = cells[pattern[1]].innerText;
        let pos2 = cells[pattern[2]].innerText;
        // console.log(pos0,pos1,pos2);
        if(pos0 != "" && pos1!= "" && pos2 != "")
        {
            if(pos0 === pos1 && pos1 === pos2)
            {
                // console.log("Winner");
                document.querySelector(".score-board").innerText = `${pos0}'s Win`;
                for (let cell of cells) {
                    cell.onclick = null; 
                    cell.classList.add("disabled"); 
                }
            break;
            }
        }
    }
}



function handleClick(index) {
    if(move === 'X')
    {
        document.querySelector(".player-turn").innerHTML = `Player X's turn`;
    }
    else
    {
        document.querySelector(".player-turn").innerHTML = `Player 0's turn`
    }
    if (cells[index].innerHTML === '') {  
        cells[index].innerHTML = move;    
        move = move === 'X' ? 'O' : 'X';  
        cells[index].onclick = null;
    }
    winner();
}

function button_reset() {
    for(let i = 0; i <cells.length; i++)
    {
        cells[i].innerHTML = '';
        board[i] = '';
        document.querySelector(".score-board").innerText = 'ScoreBoard';
        cells[i].onclick = function() { handleClick(i); };
    }
    move = 'X'
}




