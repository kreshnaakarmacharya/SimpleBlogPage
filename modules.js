// const xyz= require('./people'); //we can access the people.js file using require method

// console.log(xyz.people,xyz.ages); //here we can see the exported array from people.js file


//if we dont want to use the object destructuring we can directly access the properties using the object name
const {people}= require('./people');
console.log(people);

const os=require('os'); //built in module
console.log(os.platform(),os.homedir());