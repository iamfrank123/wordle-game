// Container for words of different lengths.
// Manually insert words into the respective arrays.
// Format: Strings in uppercase.

const WORDS = {
    5: [
        "ALBER", "CASSA", "MONDO", "FIORE", "GATTO", "MENTE", "CUORE", "PIANO"
    ],
    6: [
        "ALBERO", "STRADA", "PAGINA", "VIAGGIO", "CHIAVE", "GIORNO", "BIANCO"
    ],
    7: [
        "ABITARE", "MEMORIA", "DOMANDA", "SCATOLA", "FINSTRA", "SEGRETO", "MOMENTO"
    ],
    8: [
        "ABITUDINE", "MONTAGNA", "CHITARRA", "ELEFANTE", "SPECCHIO", "GIARDINO", "ORIZZONTE"
    ]
};

// Helper function to get random word of specific length
function getRandomWord(length) {
    const list = WORDS[length];
    if (!list || list.length === 0) return null;
    return list[Math.floor(Math.random() * list.length)];
}

// Check if word is valid (now allows ANY word)
function isValidWord(word) {
    return true;
}

module.exports = { WORDS, getRandomWord, isValidWord };
