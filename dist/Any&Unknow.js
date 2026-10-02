"use strict";
// Any is a type that can hold any value. It is similar to the Object type, but it is more flexible and allows you to assign any value to a variable of type any. However, using any can lead to potential runtime errors, as it bypasses TypeScript's type checking.
Object.defineProperty(exports, "__esModule", { value: true });
// Example of using any type
let randomValue = 10; // randomValue is of type any
console.log(randomValue); // Output: 10
//Unknown is a type that represents any value, but it is safer than any because it requires you to perform type checking before performing operations on it. You cannot directly assign an unknown value to a variable of a specific type without first checking its type.
// Example of using unknown type
let unknownValue = "Hello, World!"; // unknownValue is of type unknown 
// Different between any and unknown is that any allows you to perform operations on the variable without any type checking, while unknown requires you to perform type checking before performing operations on it. This makes unknown a safer option when dealing with values of unknown types.
let a;
a = 10; // a is of type any
a = "Hello"; // a can be assigned any value without type checking
a.toUpperCase(); // This will throw a runtime error because a is not guaranteed to be a string
let b;
b = 10;
b = "Hello"; // b can be assigned any value, but it is of type unknown
// b.toUpperCase(); // This will throw a compile-time error because b is of type unknown and we cannot call methods on it without type checking
if (typeof b === "string") {
    b.toUpperCase(); // Now it's safe to call toUpperCase() because we've checked the type
}
function abcd() {
    console.log("Hello, World!");
}
//# sourceMappingURL=Any&Unknow.js.map