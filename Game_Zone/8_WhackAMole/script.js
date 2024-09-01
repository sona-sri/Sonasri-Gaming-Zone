let curMoleTile;
let curPlantTile;
let score = 0;
let gameOver = false;

window.onload = function(){
    setGame();
}

function setGame(){
    for(let i = 0; i< 12; i++){
        let tile = document.createElement("div");  //tile id will be "0-8"
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile);
    }
    setInterval(setMole,1000);
    setInterval(setPlant,2000);
}

function getRandomTile(){
    let num = Math.floor(Math.random()*12);
    return num.toString();
}

function setMole(){
    if(gameOver){
        return;
    }

    if(curMoleTile){
        curMoleTile.innerHTML = "";
    }

    let mole = document.createElement("img");
    mole.src = "image/monty-mole.png";

    let num = getRandomTile();

    if(curMoleTile && curPlantTile.id == num){
        return;
    }

    curMoleTile = document.getElementById(num);
    curMoleTile.appendChild(mole);
}

function setPlant(){
    if(gameOver){
        return;
    }

    if(curPlantTile){
        curPlantTile.innerHTML = "";
    }

    let plant = document.createElement("img");
    plant.src = "image/piranha-plant.png";

    let num = getRandomTile();

    if(curPlantTile && curMoleTile.id == num){
        return;
    }

    curPlantTile = document.getElementById(num);
    curPlantTile.appendChild(plant);
}

function selectTile(){
    if(gameOver){
        return;
    }
    
    if(this == curMoleTile){
        score += 10;
        document.getElementById("score").innerText = score.toString();
    }
    else if(this == curPlantTile){
        document.getElementById("score").innerText = "Game Over" + score.toString();
        gameOver = true;
    }
}