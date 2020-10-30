const { TestScheduler } = require('jest')
const functions = require('./functions')

test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4)
})

test('Adds 2 + 2 to NOT equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5)
})

// Check for truthy & falsy values
// toBeNull matches only null
// toBeUndefined is the opposite of to boBeUndifined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false

// toBeNull
test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
})

// toBeFalsy
test('Should be Falsy', () => {
    expect(functions.checkValue(undefined)).toBeFalsy();
})

// toEqual
test('User should be Sander de Jongh object', () => {
    expect(functions.createUser()).toEqual({
        firstName: "Sander",
        lastName: "de Jongh"
    });
})

// Array
test('Johan should be in usernames', () => {
    expect(functions.usernames).toContain("Johan")
})

// working with async data
// test('User fetching name should be Leanne Graham', () => {
//     // belangrijk voor een async
//     expect.assertions(1);
//     return functions.fetchUser()
//         .then(data =>
//             expect(data.name).toEqual('Leanne Graham'))
// })

// Async await
test('User fetching name should be Leanne Graham', async() => {
    // belangrijk voor een async
    expect.assertions(1);
    const data = await functions.fetchUser();
    expect(data.name).toEqual('Leanne Graham')
})