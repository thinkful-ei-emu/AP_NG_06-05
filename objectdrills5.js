'use strict';

let myArray = 
[ {
  name: 'Arpan',
  jobTitle: 'Developer'
},
{
  name: 'Nick',
  jobTitle: 'homeless',
  boss:'Arpan'
},
{
  name: 'John',
  jobTitle: 'carpenter',
  boss: 'Arpan'
},
];

for (let i = 0; i < myArray.length; i++){
    if (!myArray[i].boss){
        console.log(`${myArray[i].jobTitle} ${myArray[i].name} doesn't report to anybody.`);
    }
    else{
        console.log(`${myArray[i].jobTitle} ${myArray[i].name} reports to ${myArray[i].boss}`);
    }
}

