/*
Description:
Find the solution so that it splits the string into pairs of two characters. 
If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore("_"). 

Examples:
'abc' => ['ab', 'c_']
'abcdef' => ['ab', 'cd', 'ef']
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
