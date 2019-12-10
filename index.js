// Import stylesheets
import './style.css';

function reverse1(string){
  const result = string.split('').reverse().join('');
  console.log(result);
}

function reverse2(string){
  const chars = string.split('');
  let reversed = [];
  for( let i = 0 ; i < chars.length; i++){
    reversed.unshift(string[i]);
  }
  console.log(reversed.join(''));
}

function reverse3(string){
  let acc = [];

  for (let char of string ){
    acc = char + acc;
  }
  console.log(acc);
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

  console.log(result);

}

function palindrome2(str){

  const result = str.split('').reverse().join('');
  console.log( result === str);
}

function palindrome3(str){
  
  const result = str.split('').every((char, i) => {
    return char === str[str.length - i - 1];
  });

  console.log(result);

}

function reverseInt(int){
  const signNumber = Math.sign( int );
  const convertedToString = int.toString().split('').reverse().join('');
  const number = parseInt(convertedToString, 10);

  console.log(number * signNumber);
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
