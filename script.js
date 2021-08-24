let order = [];
let clickedOrder = [];
let score = 0;

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const green = document.querySelector('.green');

let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

let lightColor = (Element, Number) => {
    Number = Number * 500;
    setTimeout(() => {
        Element.classList.add('selected');
    }, Number - 250);
    setTimeout(() => {
        Element.classList.remove('selected');
    });
}

let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length) {
        alert(`Score: ${score}\nVocê acertou! Iniciando próximo nível!`)
        nextLevel();
    }
}

let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },250);
}

let createColorElement = (color) => {
    if(color == 0) {
        return green;
    } else if (color == 1) {
        return red;
    } else if (color == 2) {
        return yellow;
    } else if (color == 3) {
        return blue;
    }
}

let nextLevel = () => {
    score++;
    shuffleOrder();
}

let gameOver = () => {
    alert(`Score: ${score}!\nVocê perdeu o jogo!\n Clique em OK para iniciar um novo jogo`);
    order = [];
    clickedOrder = [];

    playGame();
}

let playGame = () => {
    alert('Bem-Vindo ao Genius, Iniciando novo jogo!');
    score = 0;

    nextLevel();
}

//green.addEventLsistener('click', click(0))
//red.addEventListener('click', click(1))
//yellow.addEventListener('click', click(2))
//blue.addEventListener('click', click(3))

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

playGame();