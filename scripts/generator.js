const genres =
[
    "acción",
    "drama",
    "comedia",
    "suspenso",
    "terror",
    "fantasía",
    "ciencia ficción",
    "misterio",
];

const epochs =
[
    "de la Edad de Piedra",
    "del Imperio Otomano",
    "de la Revolución Industrial",
    "de la Primera Guerra Mundial",
    "de la Colonización Espacial",
];

const twists =
[
    "el protagonista es el villano",
    "no hay comida",
    "es el fin del mundo",
    "es en un sueño",
    "la tierra esta congelada",
];

let lastValues;

function GenerateValues()
{
    let genre = GetRandomValue(genres, lastValues?.genre);
    let epoch = GetRandomValue(epochs, lastValues?.epoch);
    let twist = GetRandomValue(twists, lastValues?.twist);

    let values =
    {
        genre,
        epoch,
        twist
    };

    lastValues = values;

    return values;
}

function GetRandomValue(list, lastValue)
{
    let trim = [...list];
    trim.splice(trim.indexOf(lastValue), 1);

    let index = GetRandomIndex(trim.length);

    return trim[index];
}

function GetRandomIndex(length)
{
    let random = Math.random();
    let value = random * length;

    return Math.floor(value);
}