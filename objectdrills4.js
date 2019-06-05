'use strict';

let myArray = 
[ {
  name: 'Arpan',
  jobTitle: 'Developer'
},
{
  name: 'Nick',
  jobTitle: 'homeless'
},
{
  name: 'John',
  jobTitle: 'carpenter'
},
];

for (let i = 0; i < myArray.length; i++){
  console.log(`Jobtitle: ${myArray[i].jobTitle}, Name: ${myArray[i].name}`);
}

