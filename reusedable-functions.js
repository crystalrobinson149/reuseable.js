// ALAB 308.5.1: Creating Reusable Functions

// Part 1: Thinking Functionally

// 1. Take an array of numbers and return the sum
function sumArray(numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}
// Example for sumArray
console.log(sumArray([1, 2, 3, 4])); // Should output 10

// 2. Take an array of numbers and return the average
function moyenneArray(numbers) {
    return sumArray(numbers) / numbers.length;
}
// Example for moyenneArray
console.log(moyenneArray([1, 2, 3, 4])); // Should output 2.5

// 3. Take an array of strings and return the longest string
function findLongestString(strings) {
    return strings.reduce((longest, current) =>
        current.length > longest.length ? current : longest
    );
}
// Example for findLongestString
console.log(findLongestString(['say', 'hello', 'morning'])); // Should output 'morning'

// 4. Take an array of strings, and a number and return an array of the strings that are longer than the given number
function stringsLongerThan(strings, length) {
    return strings.filter(str => str.length > length);
}
// Example for stringsLongerThan
console.log(stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3)); // Should output ['hello', 'morning']

// 5. Take a number, n, and print every number between 1 and n without using loops
function printNumbersRecursive(n, current = 1) {
    if (current > n) return;
    console.log(current);
    printNumbersRecursive(n, current + 1);
}
// Example for printNumbersRecursive
printNumbersRecursive(5); // Should print numbers 1-5

// Part 2: Thinking Methodically
const peopleArray = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }
];

// 1. Sort the array by age
function sortByAge(arr) {
    return [...arr].sort((a, b) => Number(a.age) - Number(b.age));
}
// Example for sortByAge
console.log(sortByAge(peopleArray));

// 2. Filter the array to remove entries with an age greater than 50
function filterYoungerThan50(arr) {
    return arr.filter(person => Number(person.age) <= 50);
}
// Example for filterYoungerThan50
console.log(filterYoungerThan50(peopleArray));

// 3. Map the array to change the “occupation” key to “job” and increment every age by 1
function mapPeopleData(arr) {
    return arr.map(person => ({
        ...person,
        job: person.occupation,
        age: String(Number(person.age) + 1)
    }));
}
// Example for mapPeopleData
console.log(mapPeopleData(peopleArray));

// 4. Use the reduce method to calculate the sum of the ages
function calculateAgeSum(arr) {
    return arr.reduce((sum, person) => sum + Number(person.age), 0);
}
// Example for calculateAgeSum
console.log(calculateAgeSum(peopleArray));

// Then use the result to calculate the average age
function calculateAverageAge(arr) {
    return calculateAgeSum(arr) / arr.length;
}
// Example for calculateAverageAge
console.log(calculateAverageAge(peopleArray));

// Part 3: Thinking Critically

// 1. Take an object and increment its age field
function incrementAge(obj) {
    if (!obj.age) obj.age = 0;
    obj.age = Number(obj.age) + 1;
    obj.updated_at = new Date();
    return obj;
}
// Example for incrementAge
const testObj = { name: "Test" };
console.log(incrementAge(testObj));

// 2. Take an object, make a copy, and increment the age field of the copy. Return the copy
function incrementAgeCopy(obj) {
    const copyObj = { ...obj };
    if (!copyObj.age) copyObj.age = 0;
    copyObj.age = Number(copyObj.age) + 1;
    copyObj.updated_at = new Date();
    return copyObj;
}
// Example for incrementAgeCopy
console.log(incrementAgeCopy(testObj));
