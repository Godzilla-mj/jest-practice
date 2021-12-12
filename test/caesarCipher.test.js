const caesarCipher = require('../code/caesarCipher')

test("Caesar Cipher Test 1", () => {
    expect(caesarCipher("ajz", 2)).toMatch("clb")
})

test("Caesar Cipher Test 2", () => {
    expect(caesarCipher("Lorem ipsum dolor sit amet consectetur adipicsing elit", -4)).toMatch("Hknai eloqi zkhkn oep wiap ykjoaypapqn wzeleyoejc ahep")
})