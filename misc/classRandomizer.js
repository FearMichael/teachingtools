const students = ["hannah", "matt", "abby", "ana", "brian", "brendan", "danielle", "emily", "jen", "letty", "nathan", "olivia", "ryan", "sam", "tania", "travis", "walter"];
const randomizer = (arr, divideCount) => {
    const cycleCount = Math.round(Math.random() * (divideCount * 2));
    for (let i = 1; i <= cycleCount; i++) {
        arr.sort(() => Math.random() - 0.5);
    }
    return arr;
};

const divideArr = (arr, size) => {

    const randomArr = randomizer(arr, size);
    const count = Math.floor(randomArr.length / size);
    const divided = [];

    for (let i = 0; i <= count; i++) {
        divided.push(randomArr.splice(0, size))
    }

    const lastItem = divided[divided.length - 1];
    if (lastItem.length < (size / 2)) {
        divided.splice(-1);
        for (let i = 0; i < lastItem.length; i++) {
            divided[i].push(lastItem.slice(0, 1)[0])
        }
    }
    return divided;
}

console.log(divideArr(students, parseInt(process.argv[2])));