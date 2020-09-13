const array = [
    { name: "N. Armstrong", profession: "spacecowboy", age: 89 },
    { name: "H. de Haan", profession: "kippen hypnotiseur", age: 59 },
    { name: "A. Curry", profession: "kikvorsman", age: 32 },
    { name: "F. Vonk", profession: "slangenmelker", age: 36 },
    { name: "B. Bunny", profession: "konijnen uitlaatservice", age: 27 },
    { name: "Dr.Evil", profession: "digital overlord", age: 56 },
];

for (let person of array) {
    //hier moeten console.logs komen
    console.log("de is de gehele", person);
}

for (let person of array) {
    //hier moeten console.logs komen
    console.log("De naam", person.name);
}

for (let person of array) {
    //hier moeten console.logs komen
    console.log("geboren in", 2020 - person.age);
}

for (let person of array) {
    //hier moeten console.logs komen
    console.log("Hallo, ", person.name, "u bent een", person.profession);
}

for (let person of array) {
    //hier moeten console.logs komen
    console.log("Hallo, ", person.name, "u bent een", person.profession);
}

for (let person of array) {
    //hier moeten console.logs komen
    if (person.age <= "50") {
        console.log(person);
    }
}