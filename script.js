let gridSize;
let cell;
let hoverFirst = true;
let num = 2;
let lala = "brightness" + ` ${100 - num}`;

const button = document.createElement("button");
button.classList.add("button");
button.textContent = "Set grid size";
document.body.appendChild(button);

const grid = document.createElement("div");
grid.classList.add("grid");
document.body.appendChild(grid);

let cell1 = document.getElementsByClassName("cell cell1");

button.addEventListener("click", function(gridSizing){
    gridSize = prompt ("Please input number of squares per side.");
    if (gridSize != null && !isNaN(gridSize)){
        if (gridSize == Math.floor(gridSize)){
            if (gridSize <= 100){
                while (document.querySelector(".grid").firstChild){
                    grid.removeChild(grid.lastChild);
                }
                for (let i = 1; i <= (gridSize * gridSize); i++ ){
                    cell = document.createElement("div");
                    cell.classList.add("cell");
                    cell.classList.add(`cell${i}`);
                    grid.appendChild(cell);
                }
                grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
                grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
                document.querySelectorAll(".cell").forEach(function (cellSelect) {
                    cellSelect.addEventListener("mouseenter", function (cellHover) {
                        if (window.getComputedStyle(cellSelect).backgroundColor === "rgb(255, 255, 255)"){
                            cellSelect.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
                            cellSelect.style.filter = "brightness(1)";
                            console.log(window.getComputedStyle(cellSelect).filter);
                        }   else
                            if (window.getComputedStyle(cellSelect).filter === "brightness(1)"){
                                cellSelect.style.filter = "brightness(0.8)";
                            }   else
                                if (window.getComputedStyle(cellSelect).filter === "brightness(0.8)"){
                                    cellSelect.style.filter = "brightness(0.6)";
                                }   else
                                    if (window.getComputedStyle(cellSelect).filter === "brightness(0.6)"){
                                        cellSelect.style.filter = "brightness(0.4)";
                                    }   else
                                        if (window.getComputedStyle(cellSelect).filter === "brightness(0.4)"){
                                            cellSelect.style.filter = "brightness(0.2)";
                                        }   else
                                            if (window.getComputedStyle(cellSelect).filter === "brightness(0.2)"){
                                                cellSelect.style.filter = "brightness(0)";
                                            }
                    });
                });
            }   else
                alert("Please input a number lower than 100.");
        }   else
            alert("Please use only integers.");
    }   else
        alert("Wrong input.");
})








