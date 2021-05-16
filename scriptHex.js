const btnGenerador = document.querySelector(".btn-generator");
const hexColors = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]
const actualGraph = document.querySelector(".actual-color-graph");
const actualColor = document.querySelector(".actual-color-code");
const previousGraph = document.querySelector(".previous-color-graph");
const prevColor = document.querySelector(".previous-color-code")
let hexCodes = [];
let positionHex = -1;


btnGenerador.addEventListener("click", cambioColor)

function cambioColor() {

    let hexNumber = "#";

    for (let i = 0; i < 6; i++) {
        hexNumber += hexColors[randomNumber()];
    };

    actualGraph.style.backgroundColor = hexNumber;
    actualColor.style.backgroundColor = hexNumber;
    actualColor.textContent = hexNumber;
    hexCodes.push(hexNumber);
    positionHex++;
    let previousColor = hexCodes[positionHex -1]
    previousGraph.style.backgroundColor = previousColor;
    prevColor.textContent = previousColor;
    prevColor.style.backgroundColor = previousColor;
}

function randomNumber() {
    let number = Math.floor(Math.random() * 16);
    return number;
}