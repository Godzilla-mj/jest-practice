
function capitalize(str) {
    let lower = str.toLowerCase()
    return lower[0].toUpperCase() + lower.substr(1)
}
// export default capitalize;
module.exports = capitalize