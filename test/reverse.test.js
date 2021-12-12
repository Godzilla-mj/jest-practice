const reverseString = require('../code/reverse')

test("Reverse Test 1", () => {
    expect(reverseString("lazy bear")).toMatch("raeb yzal")
})

test("Reverse Test 2", () => {
    expect(reverseString("reVerse")).toMatch("esreVer")
})