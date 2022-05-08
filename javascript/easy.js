// add two numbers
function addTwoNumbers(num1, num2){
  return (num1+num2);
}
console.log(addTwoNumbers(1,2)); //3

//subtract two numbers
function subtractTwoNumbers(num1, num2){
  return (num2-num1);
}
console.log(subtractTwoNumbers(10, 5)); //-5
console.log(subtractTwoNumbers(5,10)); //5

//multiply two numbers
function multiplyTwoNumbers(num1, num2){
  return (num1 * num2);
}
console.log(multiplyTwoNumbers(2,3)); //6
console.log(multiplyTwoNumbers(-5, 2)); //-10

//divide two numbers
function divideTwoNumber(num1, num2){
  return (num1/num2);
}
console.log(divideTwoNumber(10,5)); //2
console.log(divideTwoNumber(2,10)); //0.2

//Create a function addTwo that accepts a number, and returns the number plus 2
function addTwo(num){
  return (num +2);
}
console.log(addTwo(10)); //12

//Create a function addS that accepts a string, and returns the string with an "s" added to the end
function addS(string){
  return (string+'s');
}
console.log(addS('dog')); //dogs