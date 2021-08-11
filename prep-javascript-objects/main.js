var person = {
  firstName: 'Daniel',
  lastName: 'Pham',
  hobby: 'coding'
};
console.log(person);

var fullName = "The person's name is: " + person.firstName + ' ' + person.lastName + '.';
console.log(fullName);

person.job = 'Code Student';
console.log("The person's current job is: " + person.job + '.');

person.previousJob = 'Surf Instructor';
console.log("The person's previous job is: " + person.previousJob + '.');

console.log(person);
