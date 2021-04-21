const formItem$ = $("div.form-item");
const actionButton$ = $("button.action-button");
const form$ = $("form.main-form");
const input1$ = $("input.input1");
const input2$ = $("input.input2");
const textarea$ = $("textarea.text-area");

const storageKey = "mySpecialStuff";

// gets local storage .. returns the actual value.. hopefully
const getStorage = function() {
  return JSON.parse(localStorage.getItem(storageKey));
}
// Sets local storage .. no return value;
const setStorage = function(value) {
  localStorage.setItem(storageKey, JSON.stringify(value));
}

actionButton$.on("click", function(e) {
  const payload = {
    input1: input1$.val(),
    input2: input2$.val(),
    text1: textarea$.val(),
    anotherItem: $(this).parent()
  }
  console.log($(this).parent());

  setStorage(payload);
});

const init = function() {
  const data = getStorage();
  if (data) {
    input1$.val(data.input1).css({color: "red"});
    input2$.val(data.input2).css({color: "red"});
    textarea$.val(data.text1).css({color: "red"});
  }
}

setTimeout(init, 3000);

// throw new Error("MY BAD!");
// let mypotatoes;

const getData = function() {
  $.get("https://jsonplaceholder.typicode.com/todos/1").then(function(potatoes) {
    // console.log(potatoes);
    return Promise.resolve(potatoes);
    console.log(mypotatoes);
  }).catch(function(err) {
    return Promise.reject(err);
    console.log(err);
  });
}

getData().then(stuff => console.log(stuff)).catch(err => alert(err));

// console.log(mypotatoes);
// $.post();
// $.put();
// $.delete();