

// const formItem$ = $("div.form-item"); // document.querySelector("div.form-item");
// const actionButton$ = $("button.action-button");
// const form$ = $("form.main-form");
// const input1$ = $("input.input1");
// const input2$ = $("input.input2");
// const textarea$ = $("textarea.text-area");
// const myContainer$ = $("div.container");
// const storageKey = "mySpecialStuff";


// // myContainer$.on("mousemove", function(e) {
// //   console.log(e);
// // })

// // gets local storage .. returns the actual value.. hopefully
// const getStorage = function() {
//   return JSON.parse(localStorage.getItem(storageKey));
// }
// // Sets local storage .. no return value;
// const setStorage = function(value) {
//   localStorage.setItem(storageKey, JSON.stringify(value));
// }

// actionButton$.on("click", function(e) {
//   console.log(e);
//   const payload = {
//     input1: input1$.val(),
//     input2: input2$.val(),
//     text1: textarea$.val(),
//     anotherItem: $(this).parent()
//   }
//   // console.log($(this).parent());

//   setStorage(payload);
// });

// const init = function() {
//   const data = getStorage();
//   if (data) {
//     input1$.val(data.input1).css({color: "red"});
//     input2$.val(data.input2).css({color: "red"});
//     textarea$.val(data.text1).css({color: "red"});
//   }
// }

// setTimeout(init, 3000);

// // throw new Error("MY BAD!");
// // let mypotatoes;

// const getData = function () {
//   return $.get("https://jsonplaceholder.typicode.com/todos/1").then(function (response) {
//     console.log(response);
//     return Promise.resolve(response);
//   }).catch(function (err) {
//     console.log(err);
//     return Promise.reject(err);
//   });
// }
setTimeout(() => {
  console.log("Timeout!");
}, 1000 * 5);

console.log("Running!");
// getData().then(stuff => console.log(stuff)).catch(err => alert(err));
$("body").append($("<h1>").text("LOADING").addClass("loader"));
$.get("https://jsonplaceholder.typicode.com/todos/1")
  .then(function (response) {

    console.log({ response });

  })
  .catch(function (err) {

    console.log(err);

  })
  .then(function () {
    $(".loader").text("Done Loading");
    console.log("Finally Fired")
  });
  
console.log(response);
console.log("Done Running");
// console.log(mypotatoes);
// $.post();
// $.put();
// $.delete();

// const createElement = () => {
//   const header = $("<h1>").addClass("fw-bold my-header").text("Hello World!");
//   const div = $("<div>").addClass("text-center").append(header);
//   $("body").append(div);
// }

// setTimeout(() => {
//   createElement();
// }, 3000)

// setTimeout(() => {
//   $("h1.my-header").text("Goodbye World!");
// }, 6000);