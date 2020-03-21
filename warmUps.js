// Write a function that takes in an array of numbers and outputs the maximum number.

const globalNumbers = [1, 4, 6, 7, 3, 1, 10, 34, 2];
const globalNumbers2 = [1, 4, 6, 7, 3, 1, 2];
const globalNumbers3 = [3, 1, 10, 34, 2];


//write a function that tells if a string is a palendrome or not
const paleindromer = (funWord) => {
    let reverse = funWord.split("").reverse().join("");
    return reverse.toLowerCase() === funWord.toLowerCase();
}

//concatenate a string and camelcase the words
const camelCaser = (regString) => {

    let split = regString.split(" ");
    let camelString = "";

    split.forEach((word, i) => {
        if (i === 0) {
            word = `${word[0].toLowerCase()}${word.substr(1)}`;
        } else {
            word = `${word[0].toUpperCase()}${word.substr(1)}`;
        }
        camelString += word;
    });
    return camelString;

};

const camelCaser2 = (regString) => {
    return regString.split(" ").map((word, i) => {
        if (i === 0) {
            return word = `${word[0].toLowerCase()}${word.substr(1)}`;
        } else {
            return word = `${word[0].toUpperCase()}${word.substr(1)}`;
        }
    }).join("");
};

console.log(camelCaser("All potatoes are yum"));


//determine the max value of an array of numbers
const maxCalcer = () => {

};












// console.log(calcMax(globalNumbers))
// console.log(calcMax(globalNumbers2))
// console.log(calcMax(globalNumbers3))






















const calcMax = (numbers) => {
    let maxNum = numbers[0];
    numbers.forEach((num) => {
        if (num > maxNum) {
            maxNum = num;
        }
    });
    return maxNum;
}




// OOP
// let total = null;
// globalNumbers.forEach(num => {
//     total += num;
// });
// console.log(total);

// const calculator = {
//     totalCount: null,
//     maxNum: null,
//     arraySum: function (numArr) {
//         this.totalCount = numArr.reduce((total, num) => {
//             return total + num;
//         })
//         return this.totalCount;
//     },
//     maxNum: function (numArr) {
//         let max = null;
//         numArr.forEach(num => {
//             if (num > max || max === null) {
//                 max = num
//             }
//         });
//         return maxNum = max;
//     }
// }

// console.log(calculator.arraySum([3, 6, 4, 5, 2, 1]));
// console.log(calculator.totalCount);
// console.log(calculator.maxNum(globalNumbers));
// console.log(calculator.maxNum(globalNumbers2));
// console.log(calculator.maxNum(globalNumbers3));


