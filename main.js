function doubleAll(arr) {
  let newArray = [];

  for(let i = 0; i < arr.length; i++){
    newArray.push(arr[i] * 2)
  }
  return newArray;
}

function absoluteValues(arr) {
  let newArray = [];

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === arr[i]){
      newArray.push(arr[i]);
    } else if(arr[i] < 0){
      newArray.push(arr[i] * -1)
    }
  }
  return newArray;
}

function yelledGreetings(arr) {
  let newArray = [];

  for(let i = 0; i < arr.length; i++) {
    newArray.push(arr[i] + "!")
  }
  return newArray
}


function changeToInitials(arr) {
  let newArray = [];

  for(let i = 0; i < arr.length; i++) {
    const currentInitials = arr[i];
    const firstIndex = currentInitials[0];
    // const lastIndex = 
    // const lastIndex = currentInitials[0].length - 1;
    newArray.push(firstIndex)
  }

  return newArray;
}


function doubleOdd(arr) {
  let newArray = [];

  for(let i = 0; i < arr.length; i++){
    if((arr[i] % 2) !== 1){
      newArray.push(arr[i])
    } else {
      newArray.push(arr[i] * 2)
    }
  }

  return newArray;
}

function upperCaseFirstLetters(arr) {
  let newArray = [];

  for(let i = 0; i < arr.length; i++){
    const currentWord = arr[i];
    const firstInitials = currentWord[0];
    const restOfWord = currentWord.slice(1, currentWord.length);
    newArray.push(firstInitials.toUpperCase() + restOfWord.toLowerCase())
    }

  return newArray;
}


function add1ToLeft(arr) {
  let newArray = [];

  for(let i = 0; i < arr.length; i++){
    const toString = arr[i].toString();
    const 
  }

}


module.exports = {
  doubleAll,
  absoluteValues,
  yelledGreetings,
  changeToInitials,
  doubleOdd,
  upperCaseFirstLetters,
  add1ToLeft,
}