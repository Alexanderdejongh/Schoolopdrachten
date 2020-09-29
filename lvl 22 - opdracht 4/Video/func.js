function sum(foo, ...numbers) {
    return numbers.reduce((prev, current) => {
        return prev + current;
    });
}

// function sum(x, y) {
//     return x + y;

// }

console.log(sum(1, 2, 3));