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
        console.log(cells[pattern[0]].innerText,cells[pattern[1]].innerText,cells[pattern[2]].innerText);
    }
}

function handleClick(index) {
    if (cells[index].innerHTML === '') {  
        cells[index].innerHTML = move;    
        move = move === 'X' ? 'O' : 'X';  
    }
    winner();
}

function button_reset() {
    for(let i = 0; i <cells.length; i++)
    {
        cells[i].innerHTML = '';
        board[i] = '';
    }
    move = 'X'
}




