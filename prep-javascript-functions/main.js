function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

var sum = addTwoNumbers(2, 2);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var hoursToMinutes = convertHoursToMinutes(2);
console.log(hoursToMinutes + ' ' + 'minutes');

function getGreeting(name) {
  return 'Hello ' + name + '!';
}

var greeting = getGreeting('Danny');
console.log(greeting);

function addAndMultiplyBy5(num1, num2) {
  return ((num1 + num2) * 5);
}

var sumTimesFive = addAndMultiplyBy5(10, 5);
console.log(sumTimesFive);

function multiplyAndDivideBy5(num1, num2) {
  return num1 * num2 / 5;
}

var productDividedByFive = multiplyAndDivideBy5(35, 10);
console.log(productDividedByFive);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var difference = subtractTwoNumbers(22, 7);
console.log('difference ' + difference);

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

var circumference = getCircleCircumference(5);
console.log(circumference);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

var fullName = getFullName('Daniel', 'Pham');
console.log(fullName);

function cube(number) {
  return number * number * number;
}

var numberCubed = cube(5);
console.log(numberCubed);
