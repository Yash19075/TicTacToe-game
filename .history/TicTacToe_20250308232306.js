let board = ["","","","","","","","",""];
move = 'X';
const cells = document.querySelectorAll(".css-board div");

function handleClick(index) {
    if (cells[index].innerHTML === '') {  // Ensure the cell is empty before marking
        cells[index].innerHTML = move;    // Place 'X' or 'O' in the cell
        move = move === 'X' ? 'O' : 'X';  // Switch turns
    }
}



