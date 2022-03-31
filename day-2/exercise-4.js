// Destructure an object
//
// 1. Destructure the following values from the
//    object:
//    - firstName
//    - isAdmin
//    - branchName (nested in location)

const person = {
  firstName: "Michael",
  lastName: "Scott",
  position: "Regional Manager",
  isAdmin: true,
  age: 40,
  location: {
    coordinates: [104, 200],
    branchName: "Scranton",
  },
};
delete person.firstName;
delete person.isAdmin;
delete person.location.branchName;
const result =person;


module.exports = result;