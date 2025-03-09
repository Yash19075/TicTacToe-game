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
    if (cells[index].innerHTML === '') {  // Ensure the cell is empty before marking
        cells[index].innerHTML = move;    // Place 'X' or 'O' in the cell
        move = move === 'X' ? 'O' : 'X';  // Switch turns
    }
}

function button_reset() {
    for(let i = 0; i <cells.length; i++)
    {
        cells[i].innerHTML = '';
        board[i] = '';
    }
}
