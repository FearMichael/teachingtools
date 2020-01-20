// Write a function that takes in an array of numbers and outputs the maximum number.

let globalNumbers = [1, 4, 6, 7, 3, 1, 10, 34, 2];
let globalNumbers2 = [1, 4, 6, 7, 3, 1, 2];
let globalNumbers3 = [3, 1, 10, 34, 2];


const calcMax = (numbers) => {
    let maxNum = numbers[0];
    numbers.forEach((num) => {
        if (num > maxNum) {
            maxNum = num;
        }
    });
    return maxNum;
}
// console.log(calcMax(globalNumbers))
// console.log(calcMax(globalNumbers2))
// console.log(calcMax(globalNumbers3))



























// OOP
// let total = null;
// globalNumbers.forEach(num => {
//     total += num;
// });
// console.log(total);

const calculator = {
    totalCount: null,
    maxNum: null,
    arraySum: function (numArr) {
        this.totalCount = numArr.reduce((total, num) => {
            return total + num;
        })
        return this.totalCount;
    },
    maxNum: function (numArr) {
        let max = null;
        numArr.forEach(num => {
            if (num > max || max === null) {
                max = num
            }
        });
        return maxNum = max;
    }
}

console.log(calculator.arraySum([3, 6, 4, 5, 2, 1]));
console.log(calculator.totalCount);
// console.log(calculator.maxNum(globalNumbers));
// console.log(calculator.maxNum(globalNumbers2));
// console.log(calculator.maxNum(globalNumbers3));


