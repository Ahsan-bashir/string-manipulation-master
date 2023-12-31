//count the number of Characters in the given String and return the value
const countCharacters = (str) => {
  return str.length
}
//count the number of vowels in the given String and return the value
const countVowels = (str) => {

  
return  str.split('').filter(string=>string=='a'||string=='A'||string=='e'||string=='E'||string=='i'||string=='I'||string=='o'||string=='O'||string=='u'||string=='U').length
 
}

//Check the existence of the given String in the Specified String and return the value
const checkExistenceOfStr = (str, checkStr) => {
return  str.includes(checkStr)
}

//replace a word and return the value
const replaceWord = (str, wordToBeReplaced, replaceWord) => {
  return str.replace(wordToBeReplaced, replaceWord);
}

//convert the specified string into Title Case and return the value
const titleCaseConversion = (str) => {
return  str.split(' ')
  .map(word=>word.charAt(0).toUpperCase()+ word.slice(1).toLowerCase())
  .join(' ');
}

// find the largest word (in terms of length) in the specified string and return the value
const findLongestWord = (str) => {
 return  str.split(' ')
 .reduce((longest,current)=>{
 return current.length>longest.length?current:longest;
 },'')

}


module.exports = {
  countCharacters,
  countVowels,
  checkExistenceOfStr,
  replaceWord,
  titleCaseConversion,
  findLongestWord
}