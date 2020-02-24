// Write a function that returns the product of 2 numbers
function product(x, y) {
  let result = x * y;
  return result;
}
console.log(product(2,3));

// Write a function that returns whether a given number is even
function isEven(num) {
if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isEven(4));

// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
console.log(maxOfTwoNumbers(2,7))

// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c;
  }
}
console.log(maxOfThreeNumbers(4,9,2));

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  let sum = 0;
  for (let i=0; i< numbers.length; i++) {
    sum = sum + numbers[i];
  }
  return sum
}
console.log(sumArray([3,6,8]));

// Return the largest number of a non-empty array
function maxOfArray(numbers) {
  let bigger = 0;
  for (let i=0; i< numbers.length; i++){
    if(numbers[i] > bigger) {
      bigger = numbers[i];
    }
  }
  return bigger;
}
console.log(maxOfArray([2,7,9]))

// Return the longest string in an array
function longestString(strings) {
  let longest = "";
  for (let i=0; i< strings.length; i++){
    if (strings[i].length > longest.length) {
      longest = strings[i];
    }
  }
  return longest;
}
console.log(longestString(["Ring", "Love", "Heart"]));

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  for(let i=0; i<wordsArr.length; i++) {
   if(wordsArr[i].toLowerCase() === word) {
      return true;
    }
  }
  return false;
}
console.log(doesWordExist(["Ring", "Love", "Heart"], "love"));

// Finding the first non-duplicate (non-repeating) word in an array
/*function findUnique(wordsArr) {
  if (wordsArr.length === 0) {
    return null;
  }
  let newArray = [];
  for (let i=0; i < wordsArr.length; i++) {
    if (newArray.indexOf(wordsArr[i]) === -1){ //arr.indexOf(arr[i]) === i)
      newArray.push(wordsArr[i]);
    }
  }
  return let firstString = newArray(0);
}
*/ //-----> no terminado

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  return `${personObj.firstName} ${personObj.lastName}`;
}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
  //-----> no realizado
}
