// Funcite 1
function sum(...numbers) {
    return numbers.reduce((prev, current) => prev + current);
}

// console.log(sum(1, 2, 3, 4, 5, 6));

// Functie 2

const optellen = (num1, num2, num3) => {
    return num1 + num2 + num3;
};

const numbs = [1, 2, 3];

console.log(optellen(...numbs));