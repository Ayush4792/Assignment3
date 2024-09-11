function correctfn(sentence, wrong, correct) {
    const regex = new RegExp(`\\b${wrong}\\b`, 'gi');

    const correctedSentence = sentence.replace(regex, correct);

    return correctedSentence;
}

// Example usage:
let sentence = "He is vary good programmer.";
let wrongWord = "vary";
let correctWord = "very";

let correctedSentence = correctfn(sentence, wrongWord, correctWord);
console.log("Original sentence:", sentence);
console.log("Corrected sentence:", correctedSentence);