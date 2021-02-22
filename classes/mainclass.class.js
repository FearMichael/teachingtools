const TemplaterClass = require("./baseclass.class");

class MainPage extends TemplaterClass {

    static generateMainPage() {
        // return this.generateHTML({ title: "My Dumb Page", header: "The Main Heading!" });
        const card1 = this.generateCard({ title: "MY CARD", body: "Really cool stuff!", imageUrl: "www.google.com" });
        const card2 = this.generateCard({ title: "MY CARD", body: "Really cool stuff!", imageUrl: "www.google.com" });
        const card3 = this.generateCard({ title: "MY CARD", body: "Really cool stuff!", imageUrl: "www.google.com" });
        const card4 = this.generateCard({ title: "MY CARD", body: "Really cool stuff!", imageUrl: "www.google.com" });
        const pageContent = card1 + card2 + card3 + card4;
        return this.generateHTML({ title: "Title", header: "Something", jsSrc: "", pageContent })
    }

    alertMainPage(message) {
        console.error(this.escapeCharacters(message));
    }

}

const mainPage = new MainPage();

console.log(mainPage.generateMainPage());
mainPage.alertMainPage("Doggie");