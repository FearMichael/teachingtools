const machineLearning = {
    loopCount: 0,
    phrase: "",
    learn: function (string) {
        console.log(this);
        this.phrase += string;
        let reLearn = (words) => {
            for (let i = 0; i <= 100; i++) {
                console.log(words);
            };
        }
        reLearn(this.phrase)
        this.loopCount++;
        if (this.loopCount < 10) {
            this.learn(this.phrase);
        };
    }
};

module.exports = machineLearning;