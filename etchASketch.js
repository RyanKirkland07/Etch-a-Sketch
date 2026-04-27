const main = document.querySelector("body");

function buildGrid(size){
    let grid = document.createElement("div");
    grid.style = "display: flex; flex-direction: column; justify-content: center; align-items: center; margin: 0; border: solid 2px black;";
    main.append(grid);

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
    event.target.style.backgroundColor = "black";
}

buildGrid(16);