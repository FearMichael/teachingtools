const axios = require("axios");
const time = require("moment");

const apiCalls = {
    grabData: function () {
        return axios.get("https://jsonplaceholder.typicode.com/posts");
    },
    funLog: () => {
        console.log("Fun Times!")
    },
    getTime: function () {
        console.log(time().format("hh:mm A"));
    }
};

const potatoes = "Baked Potatoes";

// module.exports = potatoes;
module.exports = apiCalls;