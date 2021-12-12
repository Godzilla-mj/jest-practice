const analyzeArray = require('../code/analyze')

const testObject = analyzeArray([1,8,3,4,2,6])

test('Analyze Test Min', () => {
    expect(testObject.min).toBe(1)
})

test('Analyze Test Max', () => {
    expect(testObject.max).toBe(8)
})

test('Analyze Test Average', () => {
    expect(testObject.average).toBe(4)
})

test("Analyze Test Length", () => {
    expect(testObject.length).toBe(6)
})
