/* For each of the exercises below, assume you are starting with the following people array.
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
Write a command that prints out all of the people in the list.
Write the command to remove "Dani" from the array.
Write the command to remove "Juan" from the array.
Write the command to move "Luis" to the front of the array.
Write the command to add your name to the end of the array.
Using a loop, iterate through this array and after console.log "Maria", exit from the loop.
Write the command that gives the indexOf where "Maria" is located.
At the end of the exercise, there should be 4 people in the array.
*/

let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

//print all people
console.log(`All people in the list: ${people.join(", ")}`);

//remove Dani
people.splice(people.indexOf("Dani"), 1);
console.log(`Without Dani, this is the list: ${people.join(", ")}`);

//remove juan
people.splice(people.indexOf("Juan"), 1);
console.log(`Without Juan, this is the list: ${people.join(", ")}`);

//move Luis to the front
people.splice(people.indexOf("Luis"), 1);
people.unshift("Luis");
console.log(`With Luis at the front, this is the list: ${people.join(", ")}`);

//add my name
people.push("Andrea");
console.log(`With my name added, this is the list: ${people.join(", ")}`);

//iterate and exit after Maria
console.log("Iterating through the list and exiting after Maria:"); 
for (let person of people) {
    console.log(person);    
    if (person === "Maria") {
        break;
    }   
}

//indexOf Maria
let indexMaria = people.indexOf("Maria");
console.log(`The index of Maria is: ${indexMaria}`);    

//final length
console.log(`At the end, there are ${people.length} people in the array.`);

