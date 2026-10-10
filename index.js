function calcWordFrequencies(words) {
    const wordList = words.split("");
    const frequencies = new Map();

    for (const word of wordList) {
        const count = frequencies.get(word) || 0;
        frequencies.set(word, count + 1);
    }

    for (const [word,count] of frequencies) {
        console.log(word + " " + count);
    }
}


export default calcWordFrequencies;
