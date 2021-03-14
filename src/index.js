module.exports = function reverse (n) {
    let num = Math.abs(n);
    let result = (String(num)).split('').reverse().join('');
    return +result;
}
