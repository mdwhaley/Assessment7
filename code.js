// Sum Zero
let answer = false;
function addToZero(arr) {
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length; j++) {
      if (i !== j) {
        if (arr[i] + arr[j] === 0) {
          answer = true;
        }
      }
    }
  }
  return answer;
}

console.log(addToZero([]));
// -> False

console.log(addToZero([1]));
// // -> False

console.log(addToZero([1, 2, 3]));
// // -> False

console.log(addToZero([1, 2, 3, -2]));
// // -> True

//Runtime is O(n²)

// Unique Characters
function hasUniqueCharacters(str) {
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        return false;
      }
    }
  }
  return true;
}

console.log(hasUniqueCharacters("Monday"));
// -> True

console.log(hasUniqueCharacters("Moonday"));
// -> False

//Runtime is O(n²)

//Pangram sentence
const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
function pangramSentence(sentence) {
  for (let i = 0; i < alphabet.length; ) {
    if (sentence.includes(alphabet[i])) {
      i++;
    } else {
      return false;
    }
  }
  return true;
}

console.log(pangramSentence("The quick brown fox jumps over the lazy dog!"));
console.log(pangramSentence("I like cats, but not mice"));
// Runtime is O(n)

// Longest Word

function longestWord(arr) {
  let longest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (longest.length < arr[i].length) {
      longest = arr[i];
    }
  }
  return longest.length;
}

console.log(longestWord(["hi", "hello"]));
// Runtime is O(n)
