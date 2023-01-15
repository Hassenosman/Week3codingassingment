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
let namesTotal = 0;
let namesAvg = 0;
for(let i = 0; i < names.length; i++) {
    namesTotal = namesTotal + names[i].length;
}
namesAvg = namesTotal/ names.length;

console.log(namesAvg);

// Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
let result = "";
for(let i = 0; i < names.length; i++) {
    result = result + names[i] + " ";
}

console.log(result);

// How do you access the last element of any array?
// arr[arr.length - 1] -> counting starts at 0

// How do you access the first element of any array?
//arr[0];
//arr[can do math here]


/* Create a new array called nameLengths. Write a loop to iterate over the previously created names array 
and add the length of each name to the nameLengths array. */
let newNames = ["Carol", "Roger", "Rob", "Colin"];
let nameLength = [];

for(let i = 0; i < newNames.length; i++) {
    nameLength.push(newNames[i].length);
}
console.log(nameLength); 


/* Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array */
let sum = 0;
for(let x = nameLength.length; x >= 0; x--){
    sum += nameLength[x];
}
 console.log(sum);

/* Write a function that takes two parameters, word and n, as 
arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, 
I would expect the function to return ‘HelloHelloHello’). */

function wordRepeat(word, n){
    let count = 1;
    let result = "";
    while(count <= n){
        result += word;
        count++;
    }
    return result;
}
console.log(wordRepeat('hello', 4));

/* Write a function that takes two parameters, firstName and lastName, and returns a full name. */

function fullName(firstName, lastName){
    return firstName + " " + lastName;
}




