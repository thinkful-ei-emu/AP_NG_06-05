function createCharacter(Name, Nickname, Race, Origin, Attack, Defense, Weapon){
   return {
       Name,
       Nickname,
       Race,
       Origin, 
       Attack,
       Defense,
       Weapon,
       Describe: function(){
           console.log(`${this.Name} is a ${this.Race} from ${this.Origin} who uses a ${this.Weapon}`);
       },
       evaluateFight: function(character){
           if(this.Defense > character.Attack){
               return `Your opponent takes ${this.Attack - character.Defense} damage and you receive 0 damage`;
           }
           else if (character.Defense > this.Attack){
                return `Your opponent takes 0 damage and you receive ${character.Attack - this.Defense} damage`;
           }

           else {
            return `Your opponent takes ${this.Attack - character.Defense} damage and you receive ${character.Attack - this.Defense} damage`;
           }

   }
}
}

let Gandalf = createCharacter("Gandalf the White", "gandalf", "Wizard", "Middle Earth", 10, 6, "Wizard Staff");
let bilboBaggins = createCharacter("Bilbo Baggins", "bilbo", "Hobbit", "The Shire", 2, 1, "Ring");
let frodoBaggins = createCharacter("Frodo Baggins", "frodo", "Hobbit", "The Shire", 3, 2, "String and Barrow Blade");
let Aragorn = createCharacter("Aragorn son of Arathorn", "aragorn", "Man", "Dunnedain", 6, 8, "Anduril");
let Legolas = createCharacter("Legolas", "legolas", "elf", "Woodland Realm", 8, 5, "Bow and Arrow");

let characters = [Gandalf, bilboBaggins, frodoBaggins, Aragorn, Legolas];

let Arwen = new createCharacter("Arwen Undomiel", "Arwen", "Half-Elf", "Rivendell", 5,5, "Hadhafang");
characters.push(Arwen);

let find = characters.find(function(element){
    if( element.Nickname === "aragorn"){
        return element.Describe();
    }
    });

/*     let hobs = [];
characters.filter(function(element){
    if(element.Race === "Hobbit"){
    hobs.push(element);
    }
})

let strong = [];

characters.filter(function(element){
    if(element.Attack >= 5){
        strong.push(element);
    }
}) */



//console.log(strong);

console.log(characters);

//console.log(createCharacter());