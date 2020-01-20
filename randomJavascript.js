'use strict'
let favFoods = ["spring roll", "pizza", "tacos", "sushi", "i don't know", "potatoes"];


function countVowels(stringArr) {

    let vowelArr = ["a", "e", "i", "o", "u"];
    let vowelCount = 0;

    stringArr.forEach((word) => vowelCount += word.split("").filter((letter) => vowelArr.includes(letter)).length);

    return vowelCount;
}
let allTheVowels = countVowels(favFoods);
console.log(allTheVowels);


// let tikTok = setTimeout(function () {
//     timer();
// }, 1000);


// function timer() {
//     clearTimeout(tikTok);

//     console.log("Pop Pop!");
// }
let count = 1;

function repeatingFunc() {
    console.log(`It's been ${count} seconds. Execute the function again.`);
    count++;
    let timing = setTimeout(repeatingFunc, (Math.random() * 500));
    if (count > 10) {
        clearTimeout(timing);
    }
}

// setTimeout(repeatingFunc, 1000);

function myFunc() {

}

let scott = {
    name: "Scott",
    activities: ["EMT", "Crossfit"],
    yell: function (words) {
        console.log(words);
    }
}
scott.yell("HEEEEYYY!!!");
console.log(scott.name);
console.dir(scott.activities);
scott.name = "Mike";
console.log(scott.name);

// repeatingFunc();