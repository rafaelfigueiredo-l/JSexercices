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

console.log('%c Reverse String', 'color: green; font-weight: bold');
reverse1('rafael');
reverse2('rafael');
reverse3('rafael');
reverse4('rafael');

console.log('%c Palindrome', 'color: green; font-weight: bold');
palindrome('rafael');
palindrome('renner');
palindrome2('rafael');
palindrome2('renner');
palindrome3('rafael');
palindrome3('renner');
