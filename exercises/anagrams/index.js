// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


const anagrams = (stringA, stringB) => cleanString(stringA) === cleanString(stringB);

const cleanString = str => str.replace(/\W/gi, '').toLowerCase().split('').sort().join('');


module.exports = anagrams;
// function anagrams(stringA, stringB) {
//   const aCharMap = buildCharMap(stringA);
//   const bCharMap = buildCharMap(stringB);
  
//   for (let char in aCharMap) {
//     if(aCharMap[char] !== bCharMap[char]) { return false };
//   }

//   return (Object.keys(aCharMap).length == Object.keys(bCharMap).length) ?  true : false; 
// }

// function buildCharMap(str) {
//   const charMap = {};

//   for (let char of str.replace(/\W/gi, '').toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }
//   return charMap;
// }

