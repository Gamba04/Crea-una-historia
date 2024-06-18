const buttonID = "generate";
const genreID = "genre";
const epochID = "epoch";
const twistID = "twist";

const genreSize = 10;
const epochSize = 15;
const twistSize = 30;

window.onload = Init;

function Init()
{
    InitBlanks();
    
    let button = document.getElementById(buttonID);
    
    button.addEventListener("click", Generate);
}

function InitBlanks()
{
    let genre = document.getElementById(genreID);
    let epoch = document.getElementById(epochID);
    let twist = document.getElementById(twistID);

    let Blank = (length) => ' '.repeat(length);

    genre.innerHTML = Blank(genreSize);
    epoch.innerHTML = Blank(epochSize);
    twist.innerHTML = Blank(twistSize);
}

function Generate()
{
    let values = GenerateValues();

    genre.innerHTML = values.genre;
    epoch.innerHTML = values.epoch;
    twist.innerHTML = values.twist;
}