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

function GenerateValues()
{
    let genre = GetRandomValue(genres);
    let epoch = GetRandomValue(epochs);
    let twist = GetRandomValue(twists);

    let values =
    {
        genre,
        epoch,
        twist
    };

    return values;
}

function GetRandomValue(list)
{
    let index = GetRandomIndex(list.length);

    return list[index];
}

function GetRandomIndex(length)
{
    let random = Math.random();
    let value = random * length;

    return Math.floor(value);
}