const main = document.querySelector("body");
const defaultRadio = document.querySelector("#default");
const rgbRadio = document.querySelector("#rgb");
const darkenRadio = document.querySelector("#darken");

let opacity = 0;

function buildGrid(size){
    let grid = document.createElement("div");
    grid.id = "grid";
    grid.style = "display: flex; flex-direction: column; justify-content: center; align-items: center; margin: 0; border: solid 2px black;";
    main.append(grid);
    grid.addEventListener('mouseleave', leaveGrid);

    for(let row = 1; row <= size; row++){
        let row = document.createElement("div");
        row.style.display = "flex";
        grid.append(row);
        for(let col = 1; col <= size; col++){
            const gridCell = document.createElement("div");
            gridCell.style = `min-height: ${(1/size) * 100}vh; max-height: ${(1/size) * 100}vh; aspect-ratio: 1/1; margin: 0;`;
            row.append(gridCell); 
            gridCell.addEventListener("mouseenter", hover);
        }
    }
}

function hover(event){
    if(defaultRadio.checked){
        event.target.style.backgroundColor = "black";
    }
    else if(rgbRadio.checked){
        let randColor = randomiseRGB();
        event.target.style.backgroundColor = `rgb(${randColor[0]}, ${randColor[1]}, ${randColor[2]})`;
    }
    else if(darkenRadio.checked){
        event.target.style.backgroundColor = "black";
        event.target.style.opacity = opacity;
        if(opacity < 1){
            opacity += 0.1;
        }
    }
}

buildGrid(16);

const confirmBtn = document.querySelector("#confirm");
const sizeInput = document.querySelector("#new-size");
const infoText = document.querySelector("#info");

confirmBtn.addEventListener("click", newGrid);

function newGrid(){
    let size = sizeInput.value;

    if(size < 1 || size > 100){
        infoText.textContent = "Size invalid; must be between 1 and 100";
        return;
    }
    let currGrid = document.querySelector("#grid");
    grid.remove();
    buildGrid(size);
    infoText.textContent = "Create new grid of size:";
}



function randomiseRGB(){
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    return new Array(r, g, b);
}

function leaveGrid(){
    opacity = 0;
}