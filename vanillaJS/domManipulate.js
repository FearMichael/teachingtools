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


$(".todoButton").on("click", function (e) {
    console.log(e.target);
    console.log($(this).val());
    console.log($(this).text());
    let secret = $(this).attr("data-secret");
    console.log(this);
    console.log(secret);
});

$("form").on("submit", function (e) {
    // e.preventDefault();
    console.log($("#addWord").val());
})

$(".btn").on("click", function (e) {
    // e.preventDefault();
    // let val = $("#addWord").val();
    // let para = $("<p>").text(val);
    // $(".changedWords").append(para);
    $(".changedWords").append($("<p>").text($("#addWord").val()));
})

// $("#potatoes").on("click", function (e) {
//     console.log(e)
// })

// form.addEventListener("submit", function (e) {
//     e.preventDefault(); //dont you dare reload that page!
//     //get value of input element
//     let newWords = document.querySelector("#addWord").value
//     //split on commas or another way you have setup (spaces, semicolons, line-breaks, etc);
//     let wordArr = newWords.split(",");
//     removeVowels(wordArr);
// });


// removeVowels(stringArr);


//timer counts time and subtracts on wrong answer

//go through questions one by one - need var to track question number

//put questions on the page

//clear previous question from the page

//if time is less than 0 or all Q's answered - game over

$.get("http://dataservice.accuweather.com/locations/v1/postalcodes/search?apikey=yD2AOALJjsPFwnMjt2FozOWwzEp0jG72&q=03801", function (weather) {
    console.log(weather);
});

const elems = document.querySelectorAll("select");
const instances = M.FormSelect.init(elems);
const instance = M.FormSelect.getInstance(elems);

$(".test").on("click", function () {
    const data = instances.getSelectedValues();

    console.log(data);
})

console.log(instances);
console.log(instance);
