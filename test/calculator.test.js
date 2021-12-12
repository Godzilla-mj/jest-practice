const [sum, subtract, product, quotient] = require('../code/calculator')

test("Add Test 1", () => {
    expect(sum(1, 2)).toBe(3)
})

test("Add Test 2", () => {
    expect(sum(3, 3, 3)).toBe(9)
})


test("Subtract Test 1", () => {
    expect(subtract(5, 2)).toBe(3)
})

test("Subtract Test 2", () => {
    expect(subtract(10, 5, 2)).toBe(3)
})


test("Multiply Test 1", () => {
    expect(product(3, 5)).toBe(15)
})

test("Multiply Test 2", () => {
    expect(product(2, 3, 5)).toBe(30)
})


test("Division Test 1", () => {
    expect(quotient(10, 5)).toBe(2)
})

test("Division Test 2", () => {
    expect(quotient(20, 5, 2)).toBe(2)
})