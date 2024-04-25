let newGame = document.querySelector(".newGame");
let reset = document.querySelector(".reset");
let cells = document.querySelectorAll(".cell");

const winPattern = [
    [0,1,2,], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
];

let turnX = true;

cells.forEach((cell) => {
    cell.addEventListener("click", () => {
        if (turnX === true){
            cell.innerText = "X";
            turnX = false;
        }
        else{
            cell.innerText = "O";
            turnX = true;
        }
    });
});