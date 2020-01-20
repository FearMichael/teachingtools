const vowels = ['a', 'e', 'i', 'o', 'u'];
const stringArr = ['potatoes', 'beans', 'burritos', 'meatloaf'];
const changedWordArea = document.querySelector(".changedWords");
const form = document.querySelector("form");

function removeVowels(arr) {
    //initialize forEach loop to hit each string in the array that is passed in as an argument
    arr.forEach((word) => {
        //split the string into an array so we can use .filter
        let splitWord = word.split("");
        let vowelsGone = splitWord.filter((letter) => {
            //this will only return the letters that are NOT a vowel (see the bang in front of the vowels.includes())
            return !vowels.includes(letter);
        }).join("");
        console.log(vowelsGone);
        //create element and add text of the now vowel-less word
        let wordElem = document.createElement("p");
        //set the text content then append to the area designated
        wordElem.textContent = vowelsGone;
        changedWordArea.append(wordElem);
    })
};


form.addEventListener("submit", function (e) {
    e.preventDefault(); //dont you dare reload that page!
    //get value of input element
    let newWords = document.querySelector("#addWord").value
    //split on commas or another way you have setup (spaces, semicolons, line-breaks, etc);
    let wordArr = newWords.split(",");
    removeVowels(wordArr);
});

removeVowels(stringArr);