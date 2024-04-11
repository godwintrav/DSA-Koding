const fs = require('fs');

function followTheWhiteRabbit(){
    const hintPhrase = "poultryoutwitsants";

    let hintPhraseCharCount = getCharCount(hintPhrase);
    console.log(hintPhraseCharCount);

    // for(let i = 0; i < hintPhrase.length; i++){
    //     charCount[hintPhrase[i]] ? charCount[hintPhrase[i]]++ : charCount[hintPhrase[i]] = 1;
    // }

    let filteredWord = [];
    let possibleWords = [];
    let matchedWords = [];
    const filePath = 'followthewhiterabbit/wordlist'; // Specify your file path here
    const words = readTextFromFile(filePath);

    for(let i = 0; i < words.length; i++){
        let fine = true
        const replacedWord = words[i].toLowerCase().replace(/[^a-zA-Z]/g, '');
        let replacedWordCharCount = getCharCount(replacedWord);
        
        let replacedWordCharCountKeys = Object.keys(replacedWordCharCount);
        for(let char of replacedWordCharCountKeys){
            if(!hintPhrase.includes(char)){
                fine = false;
                break;
            }
        }
        if(fine){
            possibleWords.push(words[i]);
        }
    }

    for(let i = 0; i < possibleWords.length; i++){
        let fine = true;
        const replacedWord = possibleWords[i].toLowerCase().replace(/[^a-zA-Z]/g, '');
        let replacedWordCharCount = getCharCount(replacedWord);
        
        let replacedWordCharCountKeys = Object.keys(replacedWordCharCount);
        for(let char of replacedWordCharCountKeys){
            if(hintPhraseCharCount[char]){
                hintPhraseCharCount[char] <= replacedWordCharCount[char] ? fine = true : fine = false;
                break;
            }
        }
        if(fine){
            filteredWord.push(possibleWords[i]);
        }
    }

    console.log(filteredWord);

}



function readTextFromFile(filePath) {
    try {
        // Read the file synchronously
        const data = fs.readFileSync(filePath, 'utf8');
        // Split the text by new lines
        const lines = data.split('\n');
        return lines;
    } catch (err) {
        console.error('Error reading the file:', err);
        return null;
    }
}

function objectsAreEqual(obj1, obj2) {
    // Get the keys of the objects
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    // Check if the number of keys is the same
    if (keys1.length !== keys2.length) {
        return false;
    }

    // Check if all keys and their corresponding values are equal
    for (let key of keys1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }

    // If all properties and values are equal, return true
    return true;
}



function getCharCount(string){
    let charCount = {};

    for(let i = 0; i < string.length; i++){
        charCount[string[i]] ? charCount[string[i]]++ : charCount[string[i]] = 1;
    }

    return charCount;
}

const obj1 = { t: 1, u: 1, d: 1, e: 1, s: 1 };
const obj2 = { t: 1, u: 1, d: 1, e: 1, s: 1 };

followTheWhiteRabbit();
//console.log(objectsAreEqual(obj1, obj2));

// Example usage:

    // console.log('Lines read from the file:');
    // console.log(lines);