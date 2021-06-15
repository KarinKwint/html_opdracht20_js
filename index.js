// Function declaration
function add1(number1, number2) {
    const sum = number1 + number2
    return number1 * number2
}
const result = add1(12 * 12, 7 * 7)
console.log(result)

//Function Expression
const add2 = function (number1, number2) {
    const sum = number1 + number2
    return number2 * number2
};
const result = add2(12 * 12, 7 * 7)
console.log(result)

// Arrow function
const add3 = (number1, number2) => {
    const sum = number1 + number2
    return number1 * number2
};
const result = add3(12 * 12, 7 * 7)
console.log(result)