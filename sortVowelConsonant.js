// task 1


function sortVowelConsonants(chars) {
    const vowels = 'aiueo';

    let vowelsArr = [];
    let consonantsArr = [];

    for (const char of chars) {
        let normalizeChar = char.toLowerCase();
        if (vowels.includes(normalizeChar)) {
            vowelsArr.push(normalizeChar);
        } else if (normalizeChar >= 'a' && normalizeChar <= 'z') {
            consonantsArr.push(normalizeChar);
        }
    }

    let result = {vowels: '', consonants: ''};

    if (!vowelsArr.length && !consonantsArr.length) {
        return result;
    }

    result.vowels = vowelsArr.join('');
    result.consonants = consonantsArr.join('');
    return result;

}

const testCases = ['Sample Case', 'aAeEiIoOuU', 'zZyYxXwW', 'aBCdeFGHijKL', '123a4@#$%AzbB', '1234@#$%'];

testCases.forEach((str) => {
    const result = sortVowelConsonants(str)
    console.log(`${str}, Vowel: ${result.vowels}, Consonant: ${result.consonants}`);
});