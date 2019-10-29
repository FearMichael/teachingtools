// const portfolioInfo = [
//     {
//         name: "Bench Strength",
//         picture: "./images/benchstrength.png",
//         description: "The app that provides Team Leaders the ability to assess employee skills and interests to build smarter, more invested teams.",
//         tools: ["Angular 7","Typescript","Bootstrap", "Sequelize", "Auth0","AWS"],
//         deployedLink: "http://ec2-3-80-218-219.compute-1.amazonaws.com:3000/",

//     },
//     {
//         name: "Daily Dash",
//         picture: "./images/dailydash.png",
//         description: "Ever been annoyed at needing to go several different apps/websites to get some basic info? DailyDash consolidates all of that information into a personalized experience for you.",
//         tools: ["Sequelize","Heroku", "Materialize", "Node.js","Passportjs"],
//         deployedLink: "http://dailydashboardproject2.herokuapp.com/",

//     },
//     {
//         name: "A Night In",
//         picture: "./images/aNightIn.jpg",
//         description: "This app is designed to provide an easy user experience for finding a movie to watch and food to eat for entertainment.",
//         tools: ["Movie and Food API's","Github", "Materialize", "Firebase"],
//         deployedLink: "https://anightout-1548896687179.firebaseapp.com/",

//     },
//     {
//         name: "Giftastic",
//         picture: "./images/gifTastic.png",
//         description: "This fun web app will provide the user with 10 gifs as well as creating a button for easy re-use.",
//         tools: ["Giphy API","Github", "Materialize","jQuery"],
//         deployedLink: "https://fearmichael.github.io/giftastic/",

//     },
//     {
//         name: "Train Tracker",
//         picture: "./images/trainTracker.png",
//         description: "This is a prototype for tracking train schedules. This utilizes a NoSQL database (Firebase) along with authentication.",
//         tools: ["Firebase","Moment JS", "Materialize", "User input validation"],
//         deployedLink: "https://traintracker-e3faf.firebaseapp.com/",

//     },
//     {
//         name: "Word Guess Game",
//         picture: "./images/wordGuess.png",
//         description: "A fun photography themed word guess game.",
//         tools: ["Input validation","Github Version Control","Bootstrap","jQuery"],
//         deployedLink: "https://fearmichael.github.io/word-guess-game/",

//     },
// {
//     name: "",
//     picture: "",
//     description: "",
//     tools: "",
//     deployedLink: "",

// },
// ]

// portfolioInfo.forEach(elem => {
//     let image = $("<img>").attr("src", elem.picture).addClass("picClick");
//     $(".portfolio").append(image);
// })

// $("img.picClick").on("click", function(event) {
//     console.log(this);
//     console.log(event.currentTarget);
//     $(this).addClass("smallPic")
//     // event.currentTarget
// })

// let seconds = 30;

// // function update()

// function countdown() {

//     seconds--
//     console.log(seconds);

//     $(".countdownArea").text(`${portfolioInfo[0].tools.join(" ")}`);

//     if (seconds === 0){
//         clearTimeout(timer)
//         return false;
//     }

//     setTimeout(countdown, 1000);

// }

// const timer = setTimeout(countdown, 1000);

// const timer = setTimeout(timer);


// const countdown= () => {
//     seconds--
//     console.log(seconds);

//     $(".countdownArea").text(`Time Left: ${seconds}`);

//     if (seconds === 0) {
//         clearInterval(timer)
//     }
// }

// for (i=0; i<100; i++) {
//     if (i === 50) {
//         break;
//     }
//     console.log(i);
// }
// const timer = setInterval(countdown, 1000);

// $.ajax({
//     url: "https://api.giphy.com/v1/gifs/search?q=cats&api_key=IzBmA6Dpos0EdfXIav4LTX8PYpp03Nj6",
//     method: "GET"
// }).then(response => {
//     console.log(response);
// })


$(document).ready(function () {

    // $.ajax({
    //     url: "https://api.giphy.com/v1/gifs/search?q=cats&api_key=IzBmA6Dpos0EdfXIav4LTX8PYpp03Nj6",
    //     method: "GET"
    // }).then(function(gifs) {
    //     console.log(gifs)
    //     gifs.data.forEach(elem => {
    //         let img = $("<img>").attr("src", elem.images.original.url);
    //         $(".gifs").append(img);
    //     });
    // });

    // function apiCall(route) {
    //     return $.get(route).then(function(data) {
    //         Promise.resolve(data);
    //     });
    // };

    // let pics = apiCall("https://api.giphy.com/v1/gifs/trending?api_key=IzBmA6Dpos0EdfXIav4LTX8PYpp03Nj6");

    // console.log(pics); 

    // function grabPictures() {
    //     $.get("https://api.giphy.com/v1/gifs/trending?api_key=IzBmA6Dpos0EdfXIav4LTX8PYpp03Nj6").then(function(pics) {

    //     })
    // }

    // async function getStuff() {
    //     let gifs = await $.get("https://api.giphy.com/v1/gifs/trending?api_key=IzBmA6Dpos0EdfXIav4LTX8PYpp03Nj6")
    //     .then(function(pics) {
    //         // console.log(gifs)
    //         return pics        
    //         // pics.data.forEach(elem => {
    //         //     let img = $("<img>").attr("src", elem.images.original.url);
    //         //     $(".gifs").append(img);
    //         // });
    //     });
    //     console.log(gifs);
    // return gifs;

    // }

    // let questions;

    // function getQuestions() {

    //     $.get("https://api.giphy.com/v1/gifs/trending?api_key=IzBmA6Dpos0EdfXIav4LTX8PYpp03Nj6")
    //     .then(function(pics) {
    //         questions = pics
    //         console.log(questions);       
    //     });
    // }

    // getQuestions();

    // console.log(questions);

    // async function getEverything(url) {
    //     return $.get(url);
    // };

    // getEverything("https://api.giphy.com/v1/gifs/trending?api_key=IzBmA6Dpos0EdfXIav4LTX8PYpp03Nj6").then(response => console.log(response));

    // $("#button1").on("click", function(event) {
    //     data = getStuff();

    //     console.log(data);
    // });

    // console.log(getStuff());

    // const isPangram = function (str) {
    //     str = str.toLowerCase();
    //     let alphabet = "abcdefghijklmnopqrstuvwxyz";
    //     for (let i = 0; i < alphabet.length; i++) {
    //         if (!str.includes(alphabet[i])){
    //             return false;
    //         }
    //     }
    //     return true;
    //   }

    // isPangram("Watch Jeopardy, Alex Trebek’s fun TV quiz game");

    console.log("Naaaiiiillleeedddd it!!")
    // Your web app's Firebase configuration
    // const firebaseConfig = {
    //     apiKey: "AIzaSyAgzyceslMjBs9C8x4qRgAxBnaYYB6_LxE",
    //     authDomain: "coolsatthing.firebaseapp.com",
    //     databaseURL: "https://coolsatthing.firebaseio.com",
    //     projectId: "coolsatthing",
    //     storageBucket: "",
    //     messagingSenderId: "107211193051",
    //     appId: "1:107211193051:web:711767d6ef17b152"
    // };
    // // Initialize Firebase
    // firebase.initializeApp(firebaseConfig);
    // const database = firebase.database();

    // M.AutoInit();

    $(".dropdownTest").on("click", function (event) {
        $.get("https://jsonplaceholder.typicode.com/posts").then(function (posts) {
            posts.forEach(elem => {
                let newDropper = $("<a>").attr("data-target", elem.id).text("Drop Me!").addClass("dropdown-trigger");
                let newUl = $("<ul>").attr("id", elem.id).addClass("dropdown-content");
                let newLi = $("<li>").text(elem.title.slice(0, 7));
                let secondLi = $("<li>").text(elem.body.slice(0, 4));

                let newList = newUl.append(newLi, secondLi);

                $(".dropdownArea").append(newDropper, newList);


            });
            // var elems = document.querySelectorAll('.dropdown-trigger');
            // var instances = M.Dropdown.init(elems);
            // console.log(instances);
            // $('.dropdown-trigger').dropdown();
            M.AutoInit();
        })

    });

});