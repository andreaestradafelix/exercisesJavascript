/* Exercise #2 (sugerencia map())
Write a function that:
Takes in an array of numbers.
Doubles the value of each number in the array.
Prints out the new updated array.
Example: Given an array [1, 2, 4, 5]. The output should be [2, 4, 8, 10]
*/


let numbers = [15, 6, 90, .5];
function doubleNumbers(arr){
  let doubled = arr.map(numbers => numbers * 2); //map es para recorrer el array
  return doubled;
}
console.log("Original array:", numbers);
console.log(`Modificaded array with double" ${doubleNumbers(numbers).join(", ")}`); //