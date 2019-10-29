require("dotenv").config();
const express = require("express");
// const path = require("path");
const nodemailer = require("nodemailer");
const app = express();
const PORT = process.env.PORT || 8080;
// const pug = require("pug");
const Email = require("email-templates");
const mongojs = require("mongojs");
// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const mongoose = require("mongoose");
const db = mongojs("");
const collection = db.collection("countries");
// mongoose.connect("",
//     {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     });
// console.log(mongoose.connection)

// const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

// const BlogPost = new Schema({
//     author: ObjectId,
//     title: String,
//     body: String,
//     date: Date
// });

// BlogPost.add({
//     title: "Crappy Blog",
//     body: "Just a bunch of total awfulness",
//     date: Date.now()
// });

// BlogPost.find({}, function (err, docs) {
//     console.log(docs);
// });



// collection.find(function (err, docs) {
//     console.log(docs);
// });

// console.log(collection);

// const MongoClient = require('mongodb').MongoClient;
// const uri = "";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//     const collection = client.db("places").collection("countries");
//     // perform actions on the collection object
//     collection.find(function (err, docs) {
//         console.log(docs)
//     })
//     client.close();
// });

// let emailTransport = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 587,
//     secure: false,
//     auth: {
//         user: "noreply8697@gmail.com",
//         pass: "omrjldtesyudcgkv"
//     }
// });

// let message = {
//     from: 'noreply8697@gmail.com',
//     to: 'noreply8697@gmail.com',
//     subject: 'Trial Email!',
//     text: 'Testing nodemailer',
// };

// let email = new Email();

// let compiledEmail = email.render("welcome.pug", { userName: "Michael" }).then;

const capitalize = (str) => {
    return `${str[0].toUpperCase()}${str.slice(1)}`
}

// app.use("/sendemail/:userName", async function (req, res) {

//     try {
//         let compiled = await email.render("welcome.pug", { userName: capitalize(req.params.userName) });
//         console.log(compiled);
//         message.html = compiled;
//         emailTransport.sendMail(message, function (err, info) {
//             err ? res.send(err) : res.send(info);
//         });
//         res.send(compiled)
//     } catch (err) {
//         console.error(err);
//         res.status(500).end();
//     }
// });

// app.use("/sendemail/:userName", function (req, res) {
//     let compiled;

//     email.render("welcome.pug", { userName: capitalize(req.params.userName) })
//         .then(compiledEmail => {
//             console.log(data);
//             compiled = compiledEmail;
//             res.send(compiled);
//         })
//         .catch(err => {
//             res.status(500).end();
//             console.error(err)
//         });

// });

app.listen(PORT, function () {
    console.log("Server listening on " + PORT);
    collection.find(function (err, docs) {
        console.log(docs)
    })
});

module.exports = app;