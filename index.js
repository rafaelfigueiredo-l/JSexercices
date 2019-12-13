// Import stylesheets
import './style.css';

function reverse1(string){
  const result = string.split('').reverse().join('');
  console.log('reverse1', string,result);
}

function reverse2(string){
  const chars = string.split('');
  let reversed = [];
  for( let i = 0 ; i < chars.length; i++){
    reversed.unshift(string[i]);
  }
  console.log('reverse2', string, reversed.join(''));
}

function reverse3(string){
  let acc = [];

  for (let char of string ){
    acc = char + acc;
  }
  console.log('reverse3', string, acc);
}

function reverse4(string){
  const reversed = string.split('').reduce(function(acc, currentValue){
    return currentValue + acc;
  });

  console.log(reversed);
}

function palindrome(str){
  let result = false;

  const reversed = str.split('').reduce(function(acc, currentValue){
    return currentValue + acc;
  });

  if(reversed === str) result = true;

  console.log('palindrome1', str, result);

}

function palindrome2(str){

  const result = str.split('').reverse().join('');
  console.log('palindrome2', str,  result === str);
}

function palindrome3(str){
  
  const result = str.split('').every((char, i) => {
    return char === str[str.length - i - 1];
  });

  console.log('palindrome3', str, result);

}

function reverseInt(int){
  const signNumber = Math.sign( int );
  const convertedToString = int.toString().split('').reverse().join('');
  const number = parseInt(convertedToString, 10);

  console.log(int, number * signNumber);
}

function maxChar(str){
  const strArr = str.toString().split('');
  let charMap = {};
  let maxValue = 0;
  let maxKey = '';

 strArr.map((currentValue, index) => {
   if(!charMap[currentValue]){
     charMap[currentValue] = 1;
   } else {
     charMap[currentValue]++;
   }
 });

  for( let item in charMap){
    if(maxValue < charMap[item]){
      maxValue = charMap[item];
      maxKey = item;
    }
  }

  console.log(str, maxKey, maxValue);
}

function fizzBuzz(int){
  console.log(int);
  for(let i = 0; i < int; i++){
    if(i % 3 === 0 && i % 5 === 0 && i !== 0){
      console.log('fizzbuzz');
    } else {
      if(i % 3 === 0) console.log('fizz');
      if(i % 5 === 0) console.log('buzz');
    }
  }
}

function fizzBuzz(int){
  console.log(int);
  for(let i = 0; i < int; i++){
    if(i % 3 === 0 && i % 5 === 0 && i !== 0){
      console.log('fizzbuzz');
    } else {
      if(i % 3 === 0) console.log('fizz');
      if(i % 5 === 0) console.log('buzz');
    }
  }
}

function chunkArray(chunk, size){
  let subArrays = [];
  let arrayWithSize = [];

  chunk.map((currentValue, i) => {
     arrayWithSize.push(currentValue);

      if( (i + 1) % size === 0){
        subArrays.push(arrayWithSize);
        arrayWithSize = [];
      }

      if( (i + 1) === chunk.length && arrayWithSize.length > 0){
          subArrays.push(arrayWithSize);
      }

  });

  console.log('chunArray: ', subArrays);


}

function chunkArray2(chunk, size){
  const subArray = [];
  let index = 0;

  while( index < chunk.length){
    subArray.push(chunk.slice(index, index + size));
    index += size;
  }

  console.log('chunkArray2', subArray);
}

function chunkArray3(chunk, size){
  let subArray = [];
  for(let element of chunk){
    const last = subArray[subArray.length - 1];

    if(!last || last.length === size){
      subArray.push([element]);
    } else {
      last.push(element);
    }
  }
  console.log('chunkArray3', subArray);
}

function anagrams1(strA, strB){
  let result = '';
  let error = '';
  const cleanStrA = strA.replace(/[^A-Z0-9]/ig, "").toLowerCase().split('');
  const cleanStrB = strB.replace(/[^A-Z0-9]/ig, "").toLowerCase().split('');

  if(cleanStrA.length !== cleanStrB.length) error = true;

  let charMapA = {};
  let charMapB = {};

  if(!error){
    for(let element of cleanStrA ){
      if(!charMapA[element]){
        charMapA[element] = 1;
      } else {
        charMapA[element]++;
      }
    }

    for(let element of cleanStrB ){
      if(!charMapB[element]){
        charMapB[element] = 1;
      } else {
        charMapB[element]++;
      }
    }

    for(let element in charMapA){
      if(charMapA[element] !== charMapB[element]){
        error = true;
      }
    }

  }

  if( !error ){
    console.log('anagrams1:', true);
  } else {
    console.log('anagrams1:', false);
  }

}

function anagrams2(aStr, bStr){
  let error = null;
  let result = '';

  const aCharMap = anagrams2_buildCharMap(aStr);
  const bCharMap = anagrams2_buildCharMap(bStr);

  if(Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    error = true; 
  }

  for(let element in aCharMap){
    if(aCharMap[element] !== bCharMap[element]){
      error = true;
    }
  }


  if(!error){
    result = true;
  } else {
    result = false;
  }

  console.log('anagrams2:', result);

  //console.log(result, error, aCharMap, bCharMap);

}

function anagrams2_buildCharMap(str){
  let charMap = {};

  for(let char of str.replace(/[^A-Z0-9]/ig, "").toLowerCase()){
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;
}

function anagrams3(str1, str2){
  if(anagrams3_cleanString(str1) === anagrams3_cleanString(str2)){
    console.log('anagram3:', true, anagrams3_cleanString(str1), anagrams3_cleanString(str2) );
  } else {
    console.log('anagram3:', false, anagrams3_cleanString(str1), anagrams3_cleanString(str2));
  }

}

function anagrams3_cleanString(str){
  return str.replace(/[^A-Z0-9]/ig, "").toLowerCase().split('').sort().join('');
}

function capitalize1(str){
  const strMap = str.split('').map((element, i) => {
    if(i === 0){
      return element.toUpperCase();
    }
    if(str[i - 1] === ' '){
      return element.toUpperCase();
    }
    return element;
  }).join('');

  console.log('capitalize:', strMap);
}

function capitalize2(str){
  let words = [];
  for(let word of str.split(' ')){
    words.push(word[0].toUpperCase() + word.slice(1));
  }

  const result = words.join(' ');

  console.log('capitalize2:', result);
}

function capitalize3(str){
  let words = [];
  for(let word of str.split(' ')){
    words.push(word.toString().substring(0, 1).toUpperCase() + word.substring(1));
  }

  console.log('capitalize3:', words);
}

function capitalize4(str){
  let words = [];
  let arrStr = str.split(' ');

  for(let i = 0; i < arrStr.length ; i++){
    words.push(arrStr[i].substring(0, 1).toUpperCase() + arrStr[i].substring(1));
  }

  console.log('capitalize4:', words);
}
function steps1(n){
  let arrBlank = [];
  let mapBlank = {};

  for( let i = 0; i < n ; i++){
    arrBlank.push('#');
    mapBlank[i] = arrBlank.join('');
  }


  for ( let i = 0; i < n ; i++){
    if(mapBlank[i].length < n){
      let x = n - i - 1;
      let char = '.';
      char = char.repeat(x);
      mapBlank[i] = mapBlank[i] + char;
      mapBlank[i] = mapBlank[i];
      //console.log(char);

      console.log(mapBlank[i]);
    }
  }

  console.log('Steps1:', mapBlank);
}

function steps2(n){
  let arrWords = [];

  for(let rows = 0; rows < n ; rows++) {
    let stash = '';

    for(let columns = 0; columns < n ; columns ++){
      if(columns <= rows){
        stash += '#';
      } else {
        stash += '.';
      }
    }

    arrWords.push(stash);
  }

  console.log('steps2:', arrWords);
}

function steps3_recursion(n, row = 0, stair = ''){
  if( n === row ){
    return;
  }

  if( stair.length === n){
    console.log('steps3_recursion:' ,stair); 
    return steps3_recursion(n, row + 1);
  }

  if( stair.length <= row){
    stair += '#';
  } else {
    stair += '.';
  }

  steps3_recursion(n, row, stair);

}
console.log('%c Reverse String | Given a string, return a new string with the reversed order of characters', 'color: green; font-weight: bold');
reverse1('rafael');
reverse2('rafael');
reverse3('rafael');
reverse4('rafael');

console.log('%c Palindrome | Given a string, return true if the string is a palindrome or false if it is not. Palindromes are strings that form the same word if it is reversed. *do* include spaces and punctuation in determining if the string is a palindrome.', 'color: green; font-weight: bold');
palindrome('rafael');
palindrome('renner');
palindrome2('rafael');
palindrome2('renner');
palindrome3('rafael');
palindrome3('renner');

console.log('%c Reverse Int | Given an integer, return an integer that is the reverse ordering of numbers.', 'color: green; font-weight: bold');
reverseInt(51);
reverseInt(-189);
reverseInt(-5);
reverseInt(-51);
reverseInt(-90);

console.log('%c Max Chars | Given a string, return the characther that is most commonly used in the string.', 'color: green; font-weight: bold');

maxChar('abccccccccccd');
maxChar('apple 13039301093000000000');
maxChar('rafafafafafaffafafafafafafaafafaff');

console.log('%c FizzBuzz | Write a program that console logs the numbers from 1 to n. But for multiples of three print "fizz" instead of the number and for the multiples of five print "buzz". For numbers which are multiples of both three and five print "fizzbuzz".', 'color: green; font-weight: bold');

fizzBuzz(20);
fizzBuzz(10);


console.log('%c Array Chunking | Given an array and chunk size, divide the array into many subarrays where each subarray is of length size.', 'color: green; font-weight: bold');



chunkArray([1,2,3,4], 2);
chunkArray([1,2,3,4,5,6,7,8,9,10], 3);

chunkArray2([1,2,3,4], 2);
chunkArray2([1,2,3,4,5,6,7,8,9,10], 3);

chunkArray3([1,2,3,4], 2);
chunkArray3([1,2,3,4,5,6,7,8,9,10], 3);

console.log('%c Anagrams | Check to se if two provided strings are anagrams of eachother. One string is an anagram of another if it uses the same characters in the quantity. Only consider characters, not spaces or punctuation. Consider capital letters to be the same as lower case.', 'color: green; font-weight: bold');

anagrams1('rail safety', 'fairy tales');
anagrams1('rail! SAFETY!', 'fairy tales');
anagrams1('hi there', 'bye there');

anagrams2('rail safety', 'fairy tales');
anagrams2('rail! SAFETY!', 'fairy tales');
anagrams2('hi there', 'bye there');

anagrams3('rail safety', 'fairy tales');
anagrams3('rail! SAFETY!', 'fairy tales');
anagrams3('hi there', 'bye there');


console.log('%c Capitalize | Write a function that accepts a string. The function should capitalize the first letter of each word in the string then return the capitalized string.', 'color: green; font-weight: bold');


capitalize1('a short sentence');
capitalize1('a lazy fox');
capitalize1('look, it is working!');


capitalize2('a short sentence');
capitalize2('a lazy fox');
capitalize2('look, it is working!');

capitalize3('a short sentence');
capitalize3('a lazy fox');
capitalize3('look, it is working!');





console.log("%c Steps | Write a function that accepts a positive number N. The function should console log a step shape with N levels using the # character. Make sure the step has spaces on the right hand side!",
  "color: green; font-weight: bold"
);

steps1(5);
steps2(5);
steps3_recursion(5);



capitalize4('a short sentence');
capitalize4('a lazy fox');
capitalize4('look, it is working!');