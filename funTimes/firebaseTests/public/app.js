$(document).ready(function () {

    const config = {
        apiKey: "AIzaSyAgzyceslMjBs9C8x4qRgAxBnaYYB6_LxE",
        authDomain: "coolsatthing.firebaseapp.com",
        databaseURL: "https://coolsatthing.firebaseio.com",
        projectId: "coolsatthing",
        storageBucket: "coolsatthing.appspot.com",
        messagingSenderId: "107211193051",
        appId: "1:107211193051:web:711767d6ef17b152"
    };
    // Initialize Firebase
    firebase.initializeApp(config);

    const database = firebase.firestore();

    $("button.sendForm").on("click", function (event) {

        let formData = {
            name: $("#first_name").val(),
            favTvShow: $("#tvShow").val(),
            favMovie: $("#movie").val(),
            favDessert: $("#dessert").val()
        };

        // console.log(formData);
        database.collection("/users").add(formData).then(data => {
            // console.log(data)
        }).catch(err => {
            if (err) {
                console.log(err)
            }
        })
    })

    database.collection("/users").onSnapshot(snapshot => {
        $(".tableInfo").empty();
        let users = [];

        // console.log(snapshot);
        snapshot.forEach(function (snapData) {
            users.push(snapData.data())

        });

        users.forEach(data => {
            // console.log(data);
            let newRow = $("<tr>");
            let nameData = $("<td>").text(data.name);
            let movieData = $("<td>").text(data.favMovie);
            let tvData = $("<td>").text(data.favTvShow);
            let dessertData = $("<td>").text(data.favDessert);

            newRow.append(nameData, movieData, tvData, dessertData);
            $(".tableInfo").append(newRow);
            // console.log(data);
        })



    });




    let now = moment();

    console.log(moment(3600 * 5, "X").format("MM/DD/YYYY H:s"));
    console.log(now.format("hh:ss"));
    console.log(now.format("dddd"));
    console.log(now.format("dddd, MMMM Do YYYY"));




})