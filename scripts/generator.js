const genres =
[
    "comedia",
    "romance",
    "ciencia ficción",
    "acción",
    "fantasía",
    "drama",
    "vaqueros",
    "misterio",
    "suspenso",
];

const epochs =
[
    "de la prehistoria",
    "de la Antigua Grecia",
    "vikinga",
    "medieval",
    "pre-hispánica",
    "victoriana",
    "de las Cruzadas",
    "de la Edad Moderna",
    "de la Segunda Guerra Mundial",
    "de la Generación X",
    "de la Colonización Espacial",
];

const twists =
[
    "es el fin del mundo",
    "el protagonista es el villano",
    "no hay comida",
    "la trama es caleidoscópica",
    "el protagonista viaja en el tiempo",
    "el protagonista esta muerto",
    "Eva no se comió la manzana",
    "llegan los extraterrestres",
    "la luna se cae",
    "se descubre un mundo desconocido",
    "es una distopía",
    "todo es un reality show",
    "hay un virus letal",
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