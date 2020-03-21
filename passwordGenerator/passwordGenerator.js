const inquirer = require("inquirer");

class Generate {
    //take in array of options and length
    constructor(options, length) {
        if (!options || !length) {
            throw new Error("Options and Length is required");
        }
        this._options = options.join("");
        this._length = length;
    }
    getOptions() {
        return this._options;
    }
    getLength() {
        return this._length;
    }

    createPassword() {
        let currWord = "";
        let length = this.getLength();
        let options = this.getOptions();
        for (let i = 1; i <= length; i++) {
            currWord += options[Math.floor(Math.random() * options.length)]
        }
        return currWord;
    }

}


class Password {
    constructor(pass) {
        if (!pass) {
            throw new Error("Password is required");
        }
        this._password = pass;
    }

    getPassword() {
        return this._password;
    }
}

class App {
    constructor() {
        // if (!questions) {
        //     throw new Error("Questions is required");
        // }
        // this._questions = questions;
    }

    getQuestions() {
        return this._questions;
    }

    askQuestions() {
        let questionsToAsk = this.getQuestions();
        inquirer
            .prompt([{
                type: "checkbox",
                name: "options",
                message: "What options in your password would you like?",
                choices: ["Special Characters", "Numbers", "Lowercase Letters", "Uppercase Letters"]
            },
            {
                type: "number",
                name: "length",
                message: "How long do you want your password to be?"
            }])
            .then(responses => {
                let passOptions = [];
                if (responses.options.includes("Special Characters")) {
                    passOptions.push("! $ % ^ & * # @".split(" ").join(""));
                }
                if (responses.options.includes("Numbers")) {
                    passOptions.push("1 2 3 4 5 6 7 8 9".split(" ").join(""));
                }
                if (responses.options.includes("Lowercase Letters")) {
                    passOptions.push("a b c d e f g h i j k l m n o p q r s t u v w x y z".split(" ").join(""));
                }
                if (responses.options.includes("Uppercase Letters")) {
                    passOptions.push("A B C D E F G H I J K L M N O P Q R S T U V W X Y Z".split(" ").join(""));
                }
                console.log(isNaN(responses.length), responses.length);
                const gen = new Generate(passOptions, responses.length);
                let pass = gen.createPassword();
                const freshPassword = new Password(pass);

                const generatedPassword = freshPassword.getPassword();

                console.table([{ Pass: generatedPassword, Length: generatedPassword.length }]);
                return generatedPassword;
            })

    }

}
const runApp = new App();
runApp.askQuestions();