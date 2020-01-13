require("dotenv").config();
const express = require("express");
// const path = require("path");
const nodemailer = require("nodemailer");
const app = express();
const PORT = process.env.PORT || 8080;
// const pug = require("pug");
const Email = require("email-templates");
// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());



let emailTransport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: "youinfo@email.com",
        pass: "apassword"
    }
});

let message = {
    from: 'noreply8697@gmail.com',
    to: 'noreply8697@gmail.com',
    subject: 'Trial Email!',
    text: 'Testing nodemailer',
};

let email = new Email();

let compiledEmail = email.render("welcome.pug", { userName: "Michael" }).then;

const capitalize = (str) => {
    return `${str[0].toUpperCase()}${str.slice(1)}`
}

app.use("/sendemail/:userName", async function (req, res) {

    try {
        let compiled = await email.render("welcome.pug", { userName: capitalize(req.params.userName) });
        console.log(compiled);
        message.html = compiled;
        emailTransport.sendMail(message, function (err, info) {
            err ? res.send(err) : res.send(info);
        });
        res.send(compiled)
    } catch (err) {
        console.error(err);
        res.status(500).end();
    }
});

app.use("/sendemail/:userName", function (req, res) {
    let compiled;

    email.render("welcome.pug", { userName: capitalize(req.params.userName) })
        .then(compiledEmail => {
            console.log(data);
            compiled = compiledEmail;
            res.send(compiled);
        })
        .catch(err => {
            res.status(500).end();
            console.error(err)
        });

});

app.listen(PORT, function () {
    console.log("Server listening on " + PORT);
    collection.find(function (err, docs) {
        console.log(docs)
    })
});

module.exports = app;