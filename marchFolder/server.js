const express = require('express');
const app = express();
const port = 3000;
const axios = require('axios');

app.use(express.static("public"));

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));

app.get("/api/allcomments", (req, res) => {
    axios.get("https://jsonplaceholder.typicode.com/comments").then((comments) => {
        res.send(comments.data);
    })
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));