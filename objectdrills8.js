'use strict';

const HEROES = [
  { id: 1, name: 'Captain America', squad: 'Avengers' },
  { id: 2, name: 'Iron Man', squad: 'Avengers' },
  { id: 3, name: 'Spiderman', squad: 'Avengers' },
  { id: 4, name: 'Superman', squad: 'Justice League' },
  { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
  { id: 6, name: 'Aquaman', squad: 'Justice League' },
  { id: 7, name: 'Hulk', squad: 'Avengers' },
];

function findOne(arr, query){
  for (let i = 0; i < arr.length; i++){
    for (let prop in query){
      if (arr[i][prop] === query[prop]){
        return arr[i];
      }else return null;
    }
  }
}

console.log(findOne(HEROES, { id: 8 }));

  

// console.log(findOne(HEROES, { id:1 }));