let board = ["","","","","","","","",""];
move = 'X';
const cells = document.querySelectorAll(".css-board div");
console.log(cells)

// for (let i = 0; i < cells.length; i++) {
//     cells[i].onclick = function () {
//         handleClick(i);
//     };
// }

function handleClick(index) {
    if (cells[index].innerHTML === '') {  
        cells[index].innerHTML = move;    
        move = move === 'X' ? 'O' : 'X';  
    }
}

function button_reset() {
    for(let i = 0; i <cells.length; i++)
    {
        cells[i].innerHTML = '';
        board[i] = '';
    }
    move = 'X'
}


