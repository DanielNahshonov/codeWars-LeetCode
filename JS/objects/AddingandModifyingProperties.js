// Create an object 'person' with properties 'name', 'age', and 'gender'
const person = {
    name: 'Daniel',
    age: 29,
    gender: 'Male',
};
console.log(person);
// Add a new property 'city' with the value 'Rishon' to the 'person' object
person.city = 'Rishon';
console.log(person);
// Modify the value of the 'age' property by incrementing it by 1
person.age += 1;
console.log(person);

// Iterate through the properties of the 'person' object using a for...in loop
for (const property in person) {
    // Check if the property belongs directly to the object (not inherited)
    if (person.hasOwnProperty(property)) {
        // Log each property and its value to the console
        console.log(`${property}: ${person[property]}`);
    }
}
