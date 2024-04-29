const dictionary = {
    "hello": "hola",
    "goodbye": "adiós",
    "please": "por favor",
    "thank you": "gracias",
    "yes": "sí",
    "no": "no",
    "friend": "amigo",
    // Add more words as needed
};

function toSpanish(){
    // Get the English input value
    const englishInput = document.getElementById("englishInput").value.toLowerCase();

    // Get the Spanish translation from the dictionary
    const spanishTranslation = dictionary[englishInput];

    // Display the Spanish translation in the Spanish output box
    const spanishOutput = document.getElementById("spanishOutput");

    if (spanishTranslation) {
        spanishOutput.value = spanishTranslation;
    } else {
        // If the word is not found in the dictionary, display a message
        spanishOutput.value = "Word not found in dictionary.";
    }
}
