let a: number | string | boolean;
a = "12";

// Interface and Type Aliases are two ways to define custom types in TypeScript. Both can be used to define the shape of an object, but they have some differences.

interface User {
    name: string;
    email: string;
    password: string;
}

function getDataOfUser(obj: User){
    
    return obj;
}

console.log(getDataOfUser({name: "Shubhankar", email: "shubhankar@example.com", password: "password123"}));