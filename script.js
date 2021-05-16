const btnGenerador = document.querySelector(".btn-generator");
const colores = ["blue", "brown", "pink", "purple", "yellow", "gray", "white", "green", "red"]; 
const actualGraph = document.querySelector(".actual-color-graph");
const actualColor = document.querySelector(".actual-color-code");
const previousGraph = document.querySelector(".previous-color-graph");
const prevColor = document.querySelector(".previous-color-code")
const previousColors = [];
let positionPrevious = -1;



btnGenerador.addEventListener("click", colorActual)

function colorActual() {

    let randomSelection = randomNumber();
    let positionColor = colores[randomSelection];
    actualGraph.style.backgroundColor = positionColor;
    actualColor.style.backgroundColor = positionColor;
    actualColor.textContent = positionColor;
    previousColors.push(randomSelection);
    positionPrevious++;
    previousGraph.style.backgroundColor = colores[previousColors[positionPrevious - 1]];
    prevColor.textContent = colores[previousColors[positionPrevious - 1]];
    prevColor.style.backgroundColor = colores[previousColors[positionPrevious - 1]]; 
}


function randomNumber() {
    let number = Math.floor(Math.random() * 7);
    return number;
}