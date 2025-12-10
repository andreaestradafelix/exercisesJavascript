/* Write a program to compute the sum and product (multiplication) of an array of numbers. Print out the sum and the product.
Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.*/

const numeros = [1, 2, 3, 4];

//sum
const suma = numeros.reduce((counter, current) => {
  return counter + current;
}, 0);

//mul
const producto = numeros.reduce((counter, current) => {
  return counter * current;
}, 1);

console.log(`The sum is: ${suma}`); 
console.log(`The multiplication is: ${producto}`);
