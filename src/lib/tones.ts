import toneMapJson from "./tones.json";

/**
 * Returns an array containing all the vowels in the given string,
 *
 * @param {string} str - the input string to find the vowels from
 * @return {string[]} an array of strings containing all the vowels in the input string
 */
const findVowels = (str: string, ignoredVowel = ""): string[] => (
  Object.entries(toneMapJson)
    .filter(([vowel]) => vowel !== ignoredVowel && str.includes(vowel))
    .map(([vowel]) => vowel)
);

/**
 * Replaces the given vowel in a string with a tone mark corresponding to the number at the end of the string.
 *
 * @param {string} str - the input string to replace the vowel in
 * @param {string} vowel - the vowel to be replaced
 * @return {string} the input string with vowel replaced by its corresponding tone mark
 */
const getReplacedVowelString = (str: string, vowel: string): string => (
    str.replace(vowel, (toneMapJson as any)[vowel][str.slice(-1)]).slice(0,-1)
);

/**
 * Returns a string with the appropriate tone mark over the proper vowel found in the input string.
 *
 * @param {string} str - the input string
 * @returns {(string | boolean)} the modified string with the tone mark or false if a vowel is not found or the input string does not end in a number between 1 and 4
 */
export const toneMap = (str: string): string | boolean => {
    const vowels: string[] = findVowels(str);

    if (!vowels) return false;
    if (!/^.*[1-4]$/.test(str)) return false; // if str does not end in a number between 1 and 4, throw error 500

    // in the case of one vowel only being found in the str, map and replace that vowel and return the new string
    if (vowels.length === 1) {
        return String(getReplacedVowelString(str, vowels[0])); 
    }

    // otherwise, in cases where where i and u both exist in the str, map and replace the second of the two vowels
    if (vowels.length === 2 && (vowels[0] === "i" && vowels[1] === "u") || (vowels[0] === "u" && vowels[1] === "i")) {
        return String(getReplacedVowelString(str, str.charAt(2)));
    }

    // if all else fails, find the proper position of the vowel to be accented
    let pos = -1;
    for (let i = 0; i < vowels.length; i += 1) {
        // if the position of this vowel is greater than the value of pos and it's not the first loop
        // *or* if the position of this vowel is less than the value of pos *but* it's u, i, or ü
        // go to the next vowel
        if (
            (pos !== -1 && str.indexOf(vowels[i]) > pos) 
            || 
            (str.indexOf(vowels[i]) < pos && (vowels[i] === "u" || vowels[i] === "i" || vowels[i] === "ü"))
            ) continue;
            
        pos = str.indexOf(vowels[i]);
    }

    return String(getReplacedVowelString(str, str.charAt(pos)));
}
