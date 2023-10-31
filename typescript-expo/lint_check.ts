/* eslint-disable */
// Strict Null Checks

declare const loggedInUsername: string;

const users = [
  { name: "Oby", age: 12 },
  { name: "Heera", age: 32 },
];

const loggedInUser = users.find((u) => u.name === loggedInUsername);
console.log(loggedInUser.age); // Object is possibly 'undefined'.(2532)

// strictBindCallApply

function fn(x: string) {
  return parseInt(x);
}

const n1 = fn.call(undefined, "10");

const n2 = fn.call(undefined, false); // Argument of type 'boolean' is not assignable to parameter of type 'string'.(2345)

// strictFunctionTypes

function logSubstring(x: string) {
  console.log("Hello, " + x.toLowerCase());
}

type StringOrNumberFunc = (ns: string | number) => void;

let func: StringOrNumberFunc = logSubstring; // Type '{ (x: string): number; (x: string): void; }' is not assignable to type 'StringOrNumberFunc'.
// Types of parameters 'x' and 'ns' are incompatible.
// Type 'string | number' is not assignable to type 'string'.
// Type 'number' is not assignable to type 'string'.(2322)
func(10);

// strictPropertyInitialization

class UserAccount {
  name: string;
  accountType = "user";

  email: string; // Property 'email' has no initializer and is not definitely assigned in the constructor.(2564)
  address: string | undefined;

  constructor(name: string) {
    this.name = name;
  }
}

// noImplicitAny

function logString(s) {
  // Parameter 's' implicitly has an 'any' type.(7006)
  console.log(s.subtr(3));
}
logString(42);

// noImplicitThis

class Rectangle {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  getAreaFunction() {
    return function () {
      return this.width * this.height; // 'this' implicitly has type 'any' because it does not have a type annotation.(2683)
    };
  }
}

// noUncheckedIndexedAccess

type MyMap = Record<string, number>;
const myMap: MyMap = {};
const myItem = myMap["toto"];
myItem.toFixed(); // Error: Object is possibly 'undefined'.

type MyArray = number[];
const myArray: MyArray = [];
const myArrayItem = myArray[0];
myArrayItem.toFixed(); // Error: Object is possibly 'undefined'.
