/*
Description:
Find the solution so that it splits the string into pairs of two characters. 
If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore("_"). 

Examples:
'abc' => ['ab', 'c_']
'abcdef' => ['ab', 'cd', 'ef']

Reflection:
I add an underscore to the string and then slice the string into pairs of two characters.

The indexEnd in the 'slice' method is set to i and i is defaulted to 2 so that the 'for' iteration terminates when 

i is bigger than the length of the string. This promises the result array will not include the '_' as a pair when 

the string contains an even number of characters. 
*/

function solution(str){
  const strToSplit = str + "_";
  let arrSplit = [];
  
  for(let i = 2; i <= strToSplit.length; i += 2){
    subStr = strToSplit.slice(i - 2, i);
    arrSplit.push(subStr);
  }
  
  return arrSplit;
}
