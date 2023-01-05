//Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93. 
let ages = [3, 9, 23, 64, 2, 8, 28, 93, 123]; 

/*Programmatically subtract the value of the first element in the array from the 
value in the last element of the array Do not use numbers to reference the last element, 
find it programmatically, ages[7] – ages[0] is not allowed! */
console.log(ages[ages.length-1]- ages[0])


/* Add a new age to your array and repeat the step above to ensure it is dynamic 
(works for arrays of different lengths). */                                                                    

ages.push(78);
console.log(ages);
console.log(ages[ages.length - 1] - ages[0]);

/* Use a loop to iterate through the array and calculate the average age. */

let total = 0;
let avg = 0;
for(let i = 0; i < ages.length; i++) {
    total = total + ages[i];
}
avg = total/ ages.length;

console.log(avg);




/* Create an array called names that contains the following value ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’. */ 
 
let names= ["sam", "Tommy", "Tom", "Sally", "Buck", "Bob"];





/* Use a loop to iterate through the array and calculate the average number of letters per name.  */
let namestotal = 0;
let namesavg = 0;
for(let i = 0; i < names.length; i++) {
    namesTotal = namestotal + names[i].length;
}
namesavg = namestotal/ names.length;

console.log(namesavg);

// Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
let result = "";
for(let i = 0; i < names.length; i++) {
    result = result + names[i] + " ";
}

console.log(result);