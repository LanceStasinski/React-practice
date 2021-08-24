// Primitives: number, string, boolean
// Complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number = 24;
let userName: string;
let isInstructor: boolean;

// Complex

let hobbies: string[]; // works the same with the other primitives

let person: {
  name: string;
  age: number;
};

person = {
  name: 'Lance',
  age: 25
}


let people: {
  name: string;
  age: number;
}[];

// Type inference - TypeScript will try to infer which type is being used

let course = 'React' //infers string

// union type

let newCourse: string | number;

// type alias

type Cat = {
  name: string;
  age: number;
}

let cat: Cat;
let cats: Cat[];

// functions and types
function sub(a: number, b: number):number  { //don't usually need to set return value type
  return a + b;
}

function printOutput(value: any) {
  console.log(value)
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) { //the type of the output array will be determined by the values input
  const newArray = [value,...array];
  return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1); //[-1, 1, 2, 3]