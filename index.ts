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
// type StatusType = "pending1" | "completed1" | "failed1" | "";
// type ToggleSwitch = "on" | "off";

// let currentStatus : StatusType = "";
// let toggleSwitch : ToggleSwitch = "off";





// Function Overloading

// with numbers

// function add(num1:number,num2:number):number{
//     return num1+num2;
// }
// add(2,2);


// one function with different datatype

// function add(num1:number | string,num2:number | string):number | string{
//     if(typeof num1 === "string" || typeof num2 === "string"){
//         return num1+ "" +num2;
//     }
//     return num1+num2;
// }
// add(2,2);
// add("2","2");


// properway of overloading

// function add(num1:number ,num2:number ):number;
// function add(num1:string ,num2:string ):string;

// function add(num1:any ,num2:any ):any{
//     return num1+num2;
// }
// add(2,2);
// add("2","2");






// Generics

// example 1
// function getAge<T>(age : T) : T{
//     return age;
// }
// getAge<string>("20");
// getAge<number>(20);


// example 2
// type UserDetail = {
//     name : string;
//     age : number;
// }
// type AdminDetail = {
//     firstName : string;
//     role : string;
// }
// const userDetails : UserDetail = {
//     name : "Sneha",
//     age : 26,
// }
// const adminDetails : AdminDetail = {
//     firstName : "Sneha",
//     role : "admin",
// }

//  function getDetails<T>(details : T) : T{
//     return details;
//  }
// const userValue = getDetails<UserDetail>(userDetails);
// const adminValue = getDetails<AdminDetail>(adminDetails);

// userValue.name;
// adminValue.role;


// example 3 - using Type
// type UserDetail = {
//     name : string;
//     age : number;
// }
// type AdminDetail = UserDetail & {
//     role : string;
// }
// const userDetails : UserDetail = {
//     name : "Sneha",
//     age : 26,
// }
// const adminDetails : AdminDetail = {
//     name : "Sneha",
//     age : 20 ,
//     role : "admin",
// }


// Using interface
// interface UserDetail  {
//     name : string;
//     age : number;
// }
// interface AdminDetail extends UserDetail  {
//     role : string;
// }
// const userDetails : UserDetail = {
//     name : "Sneha",
//     age : 26,
// }
// const adminDetails : AdminDetail = {
//     name : "Sneha",
//     age : 20 ,
//     role : "admin",
// }







// enums / as const
//  type StatusType = "pending" | "completed" | "failed";

// example1 with number
// enum StatusType{
//     PENDING=1,
//     COMPLETED,
//     FAILED,
// }

// function getStatus(orderID: string, status: StatusType){
//     console.log(orderID, "==", status);
// }
// getStatus("1234",StatusType.COMPLETED);


// example2 with strings
// enum StatusType{
//     PENDING="pending",
//     COMPLETED="completed",
//     FAILED="failed",
// }

// function getStatus(orderID: string, status: StatusType){
//     console.log(orderID, "==", status);
// }
// getStatus("1234",StatusType.COMPLETED);


// as const
// let userName = "sneha" as const;
// userName = "sneha";






// keyof / typeof

// const StatusType = {
//     PENDING:"pending",
//     COMPLETED:"completed",
//     FAILED:"failed",
// } as const

// function getStatus(orderID: string, status: keyof typeof StatusType){
//     StatusType.PENDING="Hello";
//     console.log(orderID, "==", StatusType[status]);
// }
// getStatus("1234","COMPLETED");






// utility types

// type Users = {
//     name: string;
//     age : number;
// }

// const userDetails : Readonly<Users> = {
//     name : "sneha",
//     age : 20,
// };
// userDetails.age = 30;
// userDetails.name = "sneha";


// Partial utility type
// type Users = {
//     name: string;
//     age : number;
// }
// const userDetails : Partial<Users> = {
//     name : "sneha",
//     age : 20,
// };


// Required Type
// type Users = {
//         name: string;
//         age ?: number;
//     }
//     const userDetails : Required<Users> = {
//     name : "sneha",
//     age : 20,
// };


// if u need only specific property

// type Users = {
//         name: string;
//         age : number;
//         salary : number;
//     }
//     const userDetails : Pick<Users , "name" | "age"> = {
//     name : "sneha",
//     age : 20,
// };
   

// if u want to remove any properties

// type Users = {
//         name: string;
//         age : number;
//         salary : number;
//     }
// const userDetails : Omit<Users , "salary" > = {
//         name : "sneha",
//         age : 20,
//     };