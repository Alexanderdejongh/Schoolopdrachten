// zet de functie om naar een arrow functie
// const ikRockArrowFunctions = function() {
//     console.log("Joe, ik rock de arrow functions!");
// };

// const ikRockArrowFunctions = () =>
//     console.log("Joe, ik rock de arrow functions!");

// ikRockArrowFunctions();

const fivePlusSeven = () => 5 + 7;
console.log(fivePlusSeven());

(getal) => getal + 2;

const myFunction = (a, b) => a + b;
const myCalkFunction = (a, b) => a * b;

console.log(myFunction(10, 10));
console.log(myCalkFunction(10, 10));

// Prittier zet zelf weer haakjes om de de 'a'
const addFive = (a) => a + 5;

console.log(addFive(100));

const createObject = (name) => {
    return { greeting: "hoi " + name };
};
console.log(createObject("Sander"));