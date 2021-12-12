// import capitalize from "../code/capitalize";
const capitalize = require("../code/capitalize")


test("Capitalize Test 1", () => {
    expect(capitalize("the lazy bear")).toMatch("The lazy bear")
})

test("Capitalize Test 2", () => {
    expect(capitalize("THE LAZY BEAR")).toMatch("The lazy bear")
})

test("Capitalize Test 3", () => {
    expect(capitalize("tHE LAZy BeAr")).toMatch("The lazy bear")
})
