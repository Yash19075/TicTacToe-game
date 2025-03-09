let board = ["","","","","","","","",""];
move = 'X';
const cells = document.querySelectorAll(".css-board div");
function handleClick(index) {
    if (cells[index].innerHTML === '') { 
        cells[index].innerHTML = move;
    }
}


