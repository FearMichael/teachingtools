console.log($);

// $("div.card").append("<p>Some silly text here</p>");

// const removeCard = function() {

//   setTimeout(function() {
//     console.log("emptying!!!");
//     $("div#mycard").empty();
//   }, 3000);
// }

// $("div.card").on("click", function() {
//   $("div#mycard").slideDown()
// });

// const userSettings = {
//   darkMode: false,
// }

// const settings = JSON.parse(localStorage.getItem("settings"));
// console.log(settings);
// if (settings) {
//   // do something with the settings
// }
// else {
//   localStorage.setItem("settings", JSON.stringify(userSettings));
// }

const questions = [
  {
    question: "What is the right answer?",
    answer: "B"
  }
];
let index = 0;

const header = $("h1.header");
const buttons = $("button.clicker");

buttons.on("click", function (event) {

  const value = $(this).data("value").toLowerCase();
  if (questions[index].answer.toLowerCase() === value) header.text(value);
  else header.text("WRONG");
  const next = index++;
  console.log(next);
  if (next >= (questions.length - 1)) alert("Game over man");

})