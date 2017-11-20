// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//const reverse = str => str.split('').reverse().join('');

// function reverse(str) {
//   let reversed = '';
//   for ( let i of str) {
//     reversed = i + reversed;
//   }
//   return reversed;
// }

const reverse = str => str.split('').reduce( (rev, char) => char + rev,'');

module.exports = reverse;