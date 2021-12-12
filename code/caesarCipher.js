
function caesarCipher(string, shift) {
    if (shift < 0) {
        shift = shift + 26
    }

    let output = ''

    for (let i = 0; i < string.length; i++) {
        let c = string[i];

        if (c.match(/[a-z]/i)) {
            let code = string.charCodeAt(i);

            if (code >= 65 && code <= 90) {
                c = String.fromCharCode(((code - 65 + shift) % 26) + 65)
            }

            else if (code >= 97 && code <= 122) {
                c = String.fromCharCode(((code - 97 + shift) % 26) + 97)
            }
        }
        output += c
    }
    return output
}

module.exports = caesarCipher