// A

const addTheWordCool = ["nice", "awesome", "tof"];

addTheWordCool.push("cool");

console.log(addTheWordCool);

// B

const amountOfElementsInArray = ["appels", "peren", "citroenen"];

const indexof = amountOfElementsInArray.map((item, index, array) => {
    return array.length;
});

console.log(indexof);

// C

const BeneluxArray = ["Belgie", "Nederland", "Luxemburg"];

console.log(BeneluxArray[0]);

//D
const lastElement = ["Haas", "Cavia", "Kip", "Schildpad"];

console.log(lastElement[3]);

// E

const presidents = ["Trump", "Obama", "Bush", "Clinton"];

const impeachObama = presidents.slice(1, 2);

const impeachObamaSplice = presidents.splice(1, 1);

console.log(presidents);
//F

const stringsTogether = ["Winc", "Academy", "is", "leuk", ";-}"];

console.log(stringsTogether.join(" "));

//G
const combineArray1 = [1, 2, 3];
const combineArray2 = [4, 5, 6];

console.log(combineArray1.concat(combineArray2));