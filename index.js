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