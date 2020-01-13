// const getStuff = require("./objects");

// const axios = require("axios");

// const postCall = require("./objects");
// const calls = require("./")
// const food = require("./objects")

// postCall.getTime();


// const machineLearning = require("./machineLearning");

// postCall().then(data => console.log(data.data));

// axios.get("https://jsonplaceholder.typicode.com/posts").then(data => console.log(data));

// getStuff.fetch().then(items => {
//     // console.log(items)
//     items.data.forEach(elem => {
//         Object.keys(elem).forEach(objectElem => {
//             console.log(`Key: ${objectElem}, Value: ${elem[objectElem]}`);
//         });
//         Object.values(elem).forEach(value => {
//             console.log(value);
//         })
//     });
// });



// getStuff.funLog();
// machineLearning.learn("I am learning!!!!");
// console.log(machineLearning.loopCount);

// const arr = ["angular", "typescript", "potato", "mysql"];

// const search = (item, array) => {
//     array.sort()
//     return array.filter(elem => elem.includes(item))
// };

// console.log(search("ang", arr));

// console.log(search("po", arr));

function Friend(firstName, lastName, favFood) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.favFood = favFood;
    this.favColor = null;
    this.birthday = null;
    this.sayHello = function () {
        console.log(`${this.firstName} says Heeey!!!`);
    };
    this.emotions = ["happy", "sad", "mad"];
};

// console.log(new Friend("Jeremy", "Muniak", "Ice Cream Sandwiches"));

// const jeremy = new Friend("Jeremy", "Muniak", "Ice Cream Sandwiches");

// jeremy.sayHello();

// console.log("jeremy 1", jeremy);
// jeremy.favColor = "turqoise";

console.log("jeremy 2", jeremy);
jeremy.angry = function () {
    console.log("Me mad!");
};

// jeremy.angry();

const promiseTime = () => {
    let fakeData = new Promise(function (res, rej) {
        axios.get("https://jsonplaceholder.typicode.com/todos/1").then(dataReturned => {
            res(dataReturned.data);
        }).catch(err => rej(err))
    })

    return fakeData;
}

const anotherWay = async () => {
    try {
        return await axios.get("https://jsonplaceholder.typicode.com/todos/1").then(data => { return data; }).catch(err => { throw err });
        // console.log(fakeData.data);
        // return fakeData
    }
    catch (err) {
        console.log(err);
    };
};

const aThirdWay = async () => {
    let randomData = await axios.get("https://jsonplaceholder.typicode.com/posts/1")
    let moreData = await axios.get("https://jsonplaceholder.typicode.com/comments/1")
    let evenMoreData = await axios.get("https://jsonplaceholder.typicode.com/albums/1")
    // console.log(randomData, moreData, evenMoreData)
    return [randomData, moreData, evenMoreData];
};

let funData = aThirdWay();

// Promise.all([axios.get("https://jsonplaceholder.typicode.com/posts/1"), axios.get("https://jsonplaceholder.typicode.com/comments/1"), axios.get("https://jsonplaceholder.typicode.com/albums/1")])
//     .then(returned => returned.map(elem => console.log(elem.data))).catch(err => console.log(err));

promiseTime().then(data => console.log("I promised you ... ", data)).catch(err => { throw err });
// promiseTime();
// anotherWay();
// aThirdWay().then(data => data.map(elem => console.log(elem.data)));

console.log(axios.get("https://jsonplaceholder.typicode.com/todos/1"));