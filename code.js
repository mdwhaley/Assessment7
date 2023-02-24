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
function pangramSentence(sentence) {}
