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
        cell.disabled = true;
        checkWinner();
    });
});

const resetGame = () => {
    cells.forEach(cell => {
        cell.innerText = "";
        cell.disabled = false;
    });
};

reset.addEventListener("click", resetGame);
newGame.addEventListener("click", resetGame);

const checkWinner = () => {
    for (let pattern of winPattern){
        let pos1 = cells[pattern[0]].innerText;
        let pos2 = cells[pattern[1]].innerText;
        let pos3 = cells[pattern[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                alert("Winner is "+ pos1)

                for (let box of cells){
                    box.disabled = true;
                }
            }
        }
    }
};