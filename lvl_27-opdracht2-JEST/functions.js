// const addOne = function(numbers) {
//     const count = [];
//     numbers.forEach(num => {
//         count.push(num + 1)
//     })
//     console.log(count)
//     return count
// }

// console.log(addOne(myArray2))

// const getWordLengths = function(someWords) {
//     const count = [];
//     someWords.forEach(word => {
//         count.push(word.length)
//     })
//     console.log(count)
//     return count
// }
// getWordLengths(words);


const findNeedle = function(words, word) {
    return words.indexOf(word);
};

// module.exports = addOne;
// module.exports = getWordLengths;
module.exports = findNeedle;