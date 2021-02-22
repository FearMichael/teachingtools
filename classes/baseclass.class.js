class TemplaterClass {
    compute(x, y) {
        return x * y;
    }

    escapeCharacters(characters) {
        const regex = /Dog/i;
        return characters.replace(regex, "");
    }

    generateHTML(params) {
        const { title = "No Title", header = "Nothing Provided", jsSrc = "", pageContent } = params;
        return `
        <!doctype html>

        <html lang="en">
        <head>
          <meta charset="utf-8">
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
          <title> ${this.escapeCharacters(title)} </title>
        
        </head>
        
        <body>
        <h1> ${this.escapeCharacters(header)} </h1>
            ${pageContent}
          <script src="${jsSrc}"/>
        </body>
        </html>
        `
    }

    generateCard({ title, body, imageUrl }) {
        return `
        <div class="card"">
            <img src="${imageUrl}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">${body}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        `
    }

}

module.exports = TemplaterClass;