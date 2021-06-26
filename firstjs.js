const data = {
    id: "5b3907e2-348a-4159-8222-46209c2a643b",
    firstName: "Mike",
    lastName: "Fearnley",
    todos: [
        {
            completed: false,
            title: "learn to type"
        },
        {
            completed: false,
            title: "learn to type"
        },
    ],
    meta: {
        isActive: true,
        location: "US"
    },
}

const todos = [
    {
        completed: false,
        title: "learn to type"
    },
    {
        completed: false,
        title: "learn to type"
    },
]

// console.log(todos[0]);

// console.log(data.meta.isActive);

// console.log(data.todos[0]);

// todos.forEach(function (e) {
//     console.log(e);
// });

// data.todos[1]

// const loopMe = function (data) {
//     data.forEach(function (e) {
//         // console.log(e);
//         console.log(e.name)
//         console.log(e.phone);
//     })
// }

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(json => {
//         console.log(json);
//         loopMe(json)
//     });

// fetch('https://jsonplaceholder.typicode.com/users/1')
//     .then(response => response.json())
//     .then(json => console.log(json));

// const heath = {
//     name: "Heath",
//     favoriteFood: "Tacos",
//     role: "Student"
// };

// const mike = {
//     name: "Mike",
//     favoriteFood: "Pizza",
//     role: "TA"
// };

// const myArr = [];
// const stringArr = [];

// arr = []
// obj = {}

// stringArr.push("Hello", "how", "are", "you", heath.name, "?");
// console.log(stringArr);
// const string = stringArr.join(" - ").toUpperCase();
// console.log(string);

// console.log(myArr.push(heath, mike));



// console.log(myArr);

// function someFunc() {
//     return "hey";
// }

const fullName = (firstName, lastName) => {
    // return firstName + " " + lastName;
    const name = `${firstName} ${lastName}`;

    return name;
}

const myName = fullName("Marco", "Polo");
const anotherName = fullName("Alpha", "Romeo");

console.log(myName);
console.log(anotherName);