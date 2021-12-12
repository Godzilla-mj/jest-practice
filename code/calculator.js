
function sum(...args) {
    return args.reduce( (a,b) => a+b)
}

function subtract(...args) {
    return args.reduce( (a,b) => a-b)
}

function product(...args) {
    return args.reduce( (a,b) => a*b)
}

function quotient(...args) {
    return args.reduce( (a,b) => a / b)
}

module.exports = [sum, subtract, product, quotient]