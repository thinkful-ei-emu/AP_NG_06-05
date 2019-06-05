let cipher = {
  a:2,
  b:3,
  c:4,
  d:5
};


function decode(word, cipher){
  if(cipher.hasOwnProperty(word[0])){

    return word[cipher[word[0]]-1];
  }
  else
  {
    return ' ';
  }

}

function decodeWords(code){
  let result = '';
  let words = code.split(' ');
  words.forEach(word=> {
    result += decode(word, cipher);
  });

  return result;
}

console.log(decodeWords('craft block argon meter bells brown croon droop'));
