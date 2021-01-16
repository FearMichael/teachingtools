
// const todos = [
//     {
//         completed: false,
//         title: "learn to type"
//     },
//     {
//         completed: false,
//         title: "learn to type"
//     }
// ]
// todos[0]

const obj = {
    name: "Mike",
    number: 12321,
    todos: [
        {
            completed: false,
            title: "learn to type"
        },
        {
            completed: false,
            title: "learn to type"
        }
    ]
}

obj.todos.forEach(function (e) {
    console.log(e);
})

obj.todos[1]

const loopMe = function (data) {
    data.forEach(function (e) {
        // console.log(e);
        console.log(e.name)
        console.log(e.phone);
    })
}
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
        console.log(json);
        loopMe(json)
    });

fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(response => response.json())
    .then(json => console.log(json));

const heath = {
    name: "Heath",
    favoriteFood: "Tacos",
    role: "Student"
};

const mike = {
    name: "Mike",
    favoriteFood: "Pizza",
    role: "TA"
};

const myArr = [];
const stringArr = [];

// arr = []
// obj = {}

// stringArr.push("Hello", "how", "are", "you", heath.name, "?");
// console.log(stringArr);
// const string = stringArr.join(" - ").toUpperCase();
// console.log(string);

// console.log(myArr.push(heath, mike));



// console.log(myArr);