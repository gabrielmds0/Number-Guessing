const min = 1;
const max = 100;
const answer = Math.floor(Math.random() * (max - min + 1) + min);
const guess = document.getElementById("guess");
const submit = document.getElementById("submit");
let tempGuess;
let temperature;

submit.onclick = function () {
    tempGuess = Number(guess.value)
    temperature = Math.abs(answer - tempGuess);
    console.log(tempGuess);
    console.log(answer);
    console.log(temperature);
    switch (true) {
        case temperature >= 50:
            window.prompt("Está frio!");
            break;
        case temperature >= 30:
            window.prompt("Está esquentando!");
            break;
        case temperature >= 10:
            window.prompt("Está quente!");
            break;
        case temperature >= 5:
            window.prompt("Está fervendo!");
            break;
        case temperature === 0:
            window.prompt("Acertou!");
            break;

    }

}


