let name: string = "Shubhankar";
let age: number = 21;

console.log(name);
console.log(age);

//Arrays
let a: (number | string | { name: string })[] = [1, 2, 3, 4, 5, "Shubhankar", {name: "Shubhankar"}];

// let b = a;


let b: (number | string | { name: string })[] = [1, 2, 3, 4, 5, "Shubhankar", {name: "Shubhankar"}];

//Tuple is a fixed length array with fixed types. Example: [string, number, boolean] is a tuple of length 3 with types string, number and boolean respectively.

let arr: [string, number, boolean] = ["Shubhankar", 21, true];  

enum UserRoles{
    ADMIN = "admin",
    GUEST = "guest",
    SUPER_ADMIN = "super-admin"
}

enum StatusCodes{
    ABANDONED = "abandoned status code 500",
    NOTFOUND = "not found status code 404",
    SUCCESS = "success status code 200"
}

StatusCodes.NOTFOUND; // "not found status code 404"