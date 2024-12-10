// const findString = (word, char) => {
//   let count = 0;
//   for (let i = 0; i < word.length; i++) {
//     if (word[i] === char) {
//       count++;
//     }
//   }
//   return count;
// };
const findString = (word, char) => {
  return word.split("").filter((currentChar) => currentChar === char).length;
};

console.log(findString("hellllo", "l"));
console.log(findString("hellllo", "l"));

const minMax = (arr) => {
  let max = arr[1];
  let min = arr[1];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  let result = `the max and min are ${max} ${min}`;
  return result;
};
let arr = [91, 5, 9, 2, 4, 73, 21];
console.log(minMax(arr));

const isTen = (num1, num2) => {
  if (num1 === 10 || num2 === 10) {
    return true;
  } else if (num1 + num2 === 10) {
    return true;
  } else {
    return false;
  }
};
console.log(isTen(1));
