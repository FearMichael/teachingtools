const palindromer = (funWord) => {
    let reverse = funWord.split("").reverse().join("");
    return reverse.toLowerCase() === funWord.toLowerCase();
}

//concatenate a string and camelcase the words
const camelCaser = (regString) => {

    let split = regString.split(" ");
    let camelString = "";

    split.forEach((word, i) => {
        if (i === 0) {
            word = `${word[0].toLowerCase()}${word.substr(1)}`;
        } else {
            word = `${word[0].toUpperCase()}${word.substr(1)}`;
        }
        camelString += word;
    });
    return camelString;

};

const camelCaser2 = (regString) => {
    return regString.split(" ").map((word, i) => {
        if (i === 0) {
            return word = `${word[0].toLowerCase()}${word.substr(1)}`;
        } else {
            return word = `${word[0].toUpperCase()}${word.substr(1)}`;
        }
    }).join("");
};