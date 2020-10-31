const {
    // verifyPassword,
    hasRightLength,
    isNotNull,
    hasUpperCaseCharacter,
    hasLowerCaseCharacter,
    hasDigit,
    minimumConditionsReached,
} = require("./functions.js");


// Password dat korter is dan 9 karakters 
test("If password is less than 9 characters", () => {
    expect(hasRightLength('123jaja')).toBe(true)
})

// If password is not Null
test('If password is not Null', () => {
    expect(isNotNull('')).toBe(true)
})

// If password has 1 of meer uppercase karakters
test('If password had UpperCase characters ', () => {
    expect(hasUpperCaseCharacter('Bhaha')).toBe(true)
})

//  If password has 1 of meer loweCase karakters
test('If password has LoweCase characters', () => {
    expect(hasLowerCaseCharacter('wBaha')).toBe(true)
})

//  If password has 1 of meer cijfers
test('If password has LoweCase characters', () => {
    expect(hasDigit('wBaha123')).toBe(true)
})

// Een wachtwoord wordt alléén goedgekeurd als:
// tenminste 3 van de bovenstaande condities true zijn
test('At least 3 conditions are true', () => {
    expect(minimumConditionsReached([true, true, true])).toBe(true)
})

// conditie 4 true is (die moet dus altijd true zijn)
test('At least 4 conditions are true', () => {
    expect(minimumConditionsReached([true, true, true, true])).toBe(true)
})