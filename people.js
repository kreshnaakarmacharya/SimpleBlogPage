const people=['yoshi','ryu', 'chun-li'];
const ages=[20,25,30];
console.log(people);

//exporting signle properties
// module.exports=people; //we are exporting the people array so that we can use it in other files

//exporting multiple properties
module.exports={
    people,ages
}