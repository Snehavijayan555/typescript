// infer types(implicit types)

// let userName="Sneha";
// let subscribers=30_00;




// Defining types(Explicit types)
// let userName: string = "Sneha";
// let subscribers: number = 30_000;
// let isSubscribed: boolean =true;
// let skills: string[] = ["JS","CSS","TS"];
// let count : number[] = [1,2,3,4];
// let emptyArray: [] = [];
// let userDetail: {name: string; age:number; salary:number } = {
//     name :"sneha",
//     age : 26,
//     salary:30_000,
// };
// userDetail.age=20;




// interface

// interface Details {
// name:string;
// age:number;
// salary:number;
// getName: () => void;
// } 

// let userDetail: Details = {
//     name :"sneha",
//     age : 26,
//     salary:30_000,
//     getName() {
//         console.log(this.name);
//     },
// };




// Type

// type Details = {
//     name:string;
// age:number;
// salary:number;
// getName: () => void;
// }

// let userDetail: Details = {
//     name :"sneha",
//     age : 26,
//     salary:30_000,
//     getName() {
//         console.log(this.name);
//     },
// };





// Union/Optional

// type Details = {
//     name:string;
// age:number | string;
// salary:number;
// getName: () => void;
// }

// let userDetail: Details = {
//     name :"sneha",
//     age : 26,
//     salary:30_000,
//     getName() {
//         console.log(this.name);
//     },
// };

// let skills: (string | number | boolean)[] = ["JS","CSS","TS",20,10,30,true];

// optional

// type Details = {
//     name:string;
// age:number | string;
// salary?:number;
// getName?: () => void;
// }

// let userDetail: Details = {
//     name :"sneha",
//     age : 26,
//     salary:100,
// };





// Functions

// type Details = {
//     name:string;
// age:number | string;
// salary?:number;
// getName?: () => void;
// }
// let userDetail: Details = {
//     name :"sneha",
//     age : 26,
//     salary:100,
// };

// type GetUserName = {
//     name:string;
//     age: number | string ;
// };

// function getUserName(userDetail:Details ) : GetUserName{
//     return {name : userDetail.name , age : userDetail.age };
// }

// getUserName(userDetail);





// Named Types
type StatusType = "pending1" | "completed1" | "failed1" | "";
type ToggleSwitch = "on" | "off";

let currentStatus : StatusType = "";
let toggleSwitch : ToggleSwitch = "off";

