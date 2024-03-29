'use strict';

const Database = {
  store: {
    heroes: [
      { id: 1, name: 'Captain America', squad: 'Avengers' },
      { id: 2, name: 'Iron Man', squad: 'Avengers' },
      { id: 3, name: 'Spiderman', squad: 'Avengers' },
      { id: 4, name: 'Superman', squad: 'Justice League' },
      { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
      { id: 6, name: 'Aquaman', squad: 'Justice League' },
      { id: 7, name: 'Hulk', squad: 'Avengers' },
    ]
  },
  findOne: function(query){
    for (let i = 0; i < this.store.heroes.length; i++){
      for (let prop in query){
        if (query[prop] === this.store.heroes[i][prop]){
          return this.store.heroes[i];
        } 
        // else return null; < doesn't work for some reason
      } 
    }
  }
};


console.log(Database.findOne({ id: 6 }));
