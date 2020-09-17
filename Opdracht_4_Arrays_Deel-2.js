// Opdracht: Array methods - deel 2

// _________________________________________________________________

//              A

const superHeroes = [
    { name: "Batman", alter_ego: "Bruce Wayne" },
    { name: "Superman", alter_ego: "Clark Kent" },
    { name: "Spiderman", alter_ego: "Peter Parker" },
];

// Hier komt jouw functie

const findSuperHeroes = superHeroes.find(findNamePerson);

function findNamePerson(item) {
    return item.name === "Spiderman";
}

// console.log(findSuperHeroes);

// Find Spiderman
// result should be: {name: "Spiderman", alter_ego: "Peter Parker"}

// _________________________________________________________________

//              B

//   doubleArrayValues([1, 2, 3])
number = [1, 2, 3];

const numberDouble = number.map(double);

function double(value) {
    return value * 2;
}

// console.log(numberDouble);

// result should be [2, 4, 6]

// _________________________________________________________________

//              C

// Some

const numberBiggerThan10 = [1, 4, 3, 6, 9, 7, 11];

function ifNumberisGreaterthan(item) {
    return item >= 10;
}

const numbersGreaterThan = numberBiggerThan10.some(ifNumberisGreaterthan);

// console.log(numbersGreaterThan);

// result should be true

const containsNumberBiggerThan10 = [1, 2, 1, 2, 1, 2];

function ifNumberisNotGreaterthan(item) {
    return item.age <= 10;
}

const numbersThatAreNotGreaterThan = containsNumberBiggerThan10.every(
    ifNumberisNotGreaterthan
);

// console.log(numbersThatAreNotGreaterThan);

// result should be false

// _________________________________________________________________

//              D

// Includes

const isItalyInTheGreat7 = [
    "Canada",
    "France",
    "Germany",
    "Italy",
    "Japan",
    "United Kingdom",
    "United States",
];

function isCountryInThe7(name) {
    if ((name = isItalyInTheGreat7.includes(name))) {
        console.log("Yes this country is in the top 7");
    } else {
        console.log("Yes this country is not in the top 7");
    }
}

console.log(isCountryInThe7("Italy"));

// result should be true

// _________________________________________________________________

//              E

// forEach

const tenfold = [1, 4, 3, 6, 9, 7, 11];

const numberTimesTen = tenfold.map(double);

function double(value) {
    return value * 10;
}

// console.log(numberTimesTen);

// result should be [10, 40, 30, 60, 90, 70, 110]

// _________________________________________________________________

//              F

// every

const isBelow100 = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98];

const isItBelow100 = isBelow100.every(ifNumberisGreaterthan);

function ifNumberisGreaterthan(item) {
    return item <= 100;
}

// console.log(isItBelow100);

// result should be: false

// _________________________________________________________________

//              G - Bonus

// every

const bigSum = [
    1,
    81,
    4,
    53,
    3,
    6,
    79,
    2,
    43,
    7,
    28,
    11,
    77,
    84,
    98,
    101,
    206,
    234,
];

const totalNumbers = bigSum.reduce(sum, 0);

function sum(accumulator, value) {
    return accumulator + value;
}

console.log(totalNumbers);

// result should be 1118