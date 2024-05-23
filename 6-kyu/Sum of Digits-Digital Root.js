/*
Description:
Digital root is the recursive sum of all digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a 
single-digit number is produced. The input will be a non-negative integer.

Examples:
16 --> 1 + 6 = 7
942 --> 9 + 4 + 2 = 15 --> 1 + 5 = 6
132189 --> 1 + 3 + 2 + 1 + 8 + 9 = 24 --> 2 + 4 = 6
493193 --> 4 + 9 + 3 + 1 + 9 + 3 = 29 --> 2 + 9 = 11 --> 1 + 1 = 2

Reflection:
Type conversion and Type coercion i.e. Number(value), String(value)
Retrieving characters from a string. string[i] or string.charAt(i)?
Recursion algorithm version from Codewars:

function digital_root(n) {
  if (n < 10)
    return n;

  for (var sum = 0, i = 0, n = String(n); i < n.length; i++)
    sum += Number(n[i]);
   
  return digital_root(sum);
}

*/

function digitalRoot(n) {
  let numInStr = n.toString(); // using toString() method to convert a number to a string.
  
  while (numInStr.length > 1){
    let result = 0;
    for(let i = 0; i < numInStr.length; i++){
      result += +numInStr.charAt(i); // Adding the + sign before a string would convert it to a number.
    }
    numInStr = result.toString();
  }
  
  return +numInStr;
}
