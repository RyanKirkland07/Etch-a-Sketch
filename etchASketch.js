const grid = document.querySelector("#grid");
grid.style = "flex: 1; display: flex; flex-direction: column; justify-content: center; align-items: center; margin: 0; border: solid 2px black;";

function buildGrid(size){
    for(let row = 1; row <= size; row++){
        let row = document.createElement("div");
        row.style.display = "flex";
        grid.append(row);
        for(let col = 1; col <= size; col++){
            const gridCell = document.createElement("div");
            gridCell.style = `min-height: ${(1/size) * 100}vh; max-height: ${(1/size) * 100}vh; aspect-ratio: 1/1; margin: 0;`;
            row.append(gridCell); 
        }
    }
}

buildGrid(80);