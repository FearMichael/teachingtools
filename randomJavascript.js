let favFoods = ["spring roll", "pizza", "tacos", "sushi", "i don't know", "potatoes"];


function countVowels(stringArr) {

    let vowelArr = ["a", "e", "i", "o", "u"];
    let vowelCount = 0;

    stringArr.forEach(function (word) {
        vowelCount += word.split("").filter(function (letter) {
            return vowelArr.includes(letter);
        }).length;
    });

    return vowelCount;
}
let allTheVowels = countVowels(favFoods);
console.log(allTheVowels);