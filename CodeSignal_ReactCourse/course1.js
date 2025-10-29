// 1. Advanced Objects and Arrays

// create an object, a collection of properties: it contains key - value pairs

const car = {
    wheels: 4,
    color: 'red',
};

// array with a list of values

const fruits = ['apple', 'orange', 'grapes'];

// Destructing in JS and property shorthand 

let { wheels, color} = car;
let [fruit1, fruit2, fruit3] = fruits;

console.log(wheels); // 4
console.log(fruit1) // apple

// Here, wheels and color are extracted from car, and fruit1, fruit2, and fruit3 from fruits. 
// This method is known as Destructuring.


// Property Value Shorthand is advantageous when you intend to assign properties 
// to variables of the same name:

let type = 'SUV';
let brand = 'Audi';

let car1 = { type, brand };

console.log(car1); // {type: 'SUV', brand: 'Audi'}

// JS provides the convenience of using a variable as a property name in an object 
// initializer syntax. Let's create a new object, take a property name from a variable, 
// and add a value to it:

let key = 'frontend';
let value = 'React';

let preference = { [key]: value}; 

console.log(preference); // {frontend: 'React'}

const house = {
    habitat: 'Elm Street',
    type: 'Detached',
    habitants: ['John', 'Anna', 'Tom']
};

// use push to add a new habitant 

house.habitants.push('Lisa');

// with spread operator we have a more elegant solution: 

// house = { ...house, habitants: [...house.habitants, 'Lisa'] };

// In this case, you're forming a new house object by merging the current house object 
// and a freshly created habitants array, which includes the old residents plus 'Lisa'.


// Let's take an array arr, and you want to destructure it such that you store the first 
// and second elements in a and b variables and the rest in others. The spread operator can do just that:

const arr = [1, 2, 3, 4, 5];
const [a, b, ...others] = arr;

console.log(arr);

// After this, a and b are 1 and 2, respectively, while others is an array containing the remaining 
// elements: [3, 4, 5].

// Rest parameters: Rest Parameters meet the need to represent an indefinite number of arguments as 
// an array. With rest parameters, you can gather as many arguments as needed into an array and apply 
// array methods to them.

// Consider the following function that calculates the sum of all its arguments:

function sumAll(...args) {
    return args.reduce((sum, current) => sum + current);
}

console.log(sumAll(1, 2, 3, 4)); // Output: 10

// The function call sumAll(1, 2, 3, 4) makes the args array equal to [1, 2, 3, 4]. 
// Then, the reduce method computes their sum, yielding the output 10.











