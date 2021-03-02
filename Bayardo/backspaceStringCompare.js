// Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

// Note that after backspacing an empty text, the text will continue empty.

// Example 1:

// Input: S = "ab#c", T = "ad#c"
// Output: true
// Explanation: Both S and T become "ac".

// Example 2:

// Input: S = "ab##", T = "c#d#"
// Output: true
// Explanation: Both S and T become "".

// Example 3:

// Input: S = "a##c", T = "#a#c"
// Output: true
// Explanation: Both S and T become "c".

// Example 4:

// Input: S = "a#c", T = "b"
// Output: false
// Explanation: S becomes "c" while T becomes "b".

const backspaceCompare = (S, T) => {
  let testStr = (str) => {
    let arr1 = str.split("");
    for (let i = 0; i < arr1.length; i++) {
      if (i === 0 && arr1[0] === "#") {
        arr1.splice(0, 1);
        i = -1;
      } else {
        if (arr1[i] === "#") {
          arr1.splice(i - 1, 2);
          i = i - 2;
        }
      }
    }
    return arr1.join("");
  };
  let str1 = testStr(S);
  let str2 = testStr(T);
  return str1 === str2;
};

let S = "ab#c",
  T = "ad#cassdfsdf";
console.log(backspaceCompare(S, T));
