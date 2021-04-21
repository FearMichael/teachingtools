const inquirer = require("inquirer");


class Prompter {

  #questions = [
    {
      type: "input",
      name: "name",
      messages: "Whats my name?"
    }
  ];

  async ask() {
    try {
      const answers = await inquirer.prompt(this.#questions);
      return answers;
    } catch (exc) {
      return exc;
    }
  }

};


const prompt = new Prompter();

prompt.ask().then((potatoes) => console.log(potatoes)).catch((exc) => console.log(exc));