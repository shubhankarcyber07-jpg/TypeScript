"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let name = "Shubhankar";
let age = 21;
console.log(name);
console.log(age);
//Arrays
let a = [1, 2, 3, 4, 5, "Shubhankar", { name: "Shubhankar" }];
// let b = a;
let b = [1, 2, 3, 4, 5, "Shubhankar", { name: "Shubhankar" }];
//Tuple is a fixed length array with fixed types. Example: [string, number, boolean] is a tuple of length 3 with types string, number and boolean respectively.
let arr = ["Shubhankar", 21, true];
var UserRoles;
(function (UserRoles) {
    UserRoles["ADMIN"] = "admin";
    UserRoles["GUEST"] = "guest";
    UserRoles["SUPER_ADMIN"] = "super-admin";
})(UserRoles || (UserRoles = {}));
var StatusCodes;
(function (StatusCodes) {
    StatusCodes["ABANDONED"] = "abandoned status code 500";
    StatusCodes["NOTFOUND"] = "not found status code 404";
    StatusCodes["SUCCESS"] = "success status code 200";
})(StatusCodes || (StatusCodes = {}));
StatusCodes.NOTFOUND; // "not found status code 404"
//# sourceMappingURL=basics.js.map