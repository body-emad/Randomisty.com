/*
  - Map Data Type
  Methods
  --- set
  --- get
  --- delete
  --- clear
  --- has

  Properties
  --- size
*/
// Map Methods
// let myMap = new Map([
//   [10, "Number"],
//   ["Name", "String"],
//   [false, "Boolean"],
// ]);

// // myMap.set(10, "Number");
// // myMap.set("Name", "String");

// console.log(myMap);

// console.log(myMap.get(10));
// console.log(myMap.get("Name"));
// console.log(myMap.get(false));

// console.log("####");

// console.log(myMap.has("Name"));

// console.log("####");

// console.log(myMap.size);

// console.log(myMap.delete("Name"));

// console.log(myMap.size);

// myMap.clear();

// console.log(myMap.size);

// let mapUser = { theName: "Body", theAge: 16 };
// let myMap = new Map();
// myMap.set(mapUser, "Object Model");
// console.log(myMap);
// let weekMapUser = { theName: "Body", theAge: 16 };
// let newWeekMap = new WeakMap();
// newWeekMap.set(mapUser, "Object Model");
console.log(Array.from ("Body"))
/*
  Array Methods
  - Array.from(Iterable, MapFunc, This)
  --- Variable
  --- String Numbers
  --- Set
  --- Using The Map Function
  --- Arrow Function
  --- Shorten The Method + Use arguments
*/

// console.log(Array.from("Osama"));
// console.log(
//   Array.from("12345", function (n) {
//     return +n + +n;
//   })
// );
// console.log(Array.from("12345", (n) => +n + +n));

// let myArray = [1, 1, 1, 2, 3, 4];

// let mySet = new Set(myArray);

// console.log(Array.from(mySet));

// // console.log([...new Set(myArray)]); // Future

// function af() {
//   return Array.from(arguments);
// }

// console.log(af("Osama", "Ahmed", "sayed", 1, 2, 3));
// Target means where exactly are you gonna place that thing that you're copying
// There might alot of that target that you wanna replace it
// let myArray = [10,20,30,40,50,60,70];
// myArray.copyWithin(-1,0)
// myArray.copyWithin(3,0,1);
// myArray.copyWithin(0,-3,-2)
// console.log(myArray)
/*
  Array Methods
  - Array.some(CallbackFunc(Element, Index, Array), This Argument)
  --- CallbackFunc => Function To Run On Every Element On The Given Array
  ------ Element => The Current Element To Process
  ------ Index => Index Of Current Element
  ------ Array => The Current Array Working With
  --- This Argument => Value To Use As This When Executing CallbackFunc
  --
  Using
  - Check if Element Exists In Array
  - Check If Number In Range
*/

// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let myNumber = 10;

// // let check = nums.some(function (e) {
// //   console.log("Test");
// //   return e > 5;
// // });

// let check = nums.some(function (e) {
//   return e > this;
// }, myNumber);

// // let check = nums.some((e) => e > 5);

// console.log(check);

// function checkValues(arr, val) {
//   return arr.some(function (e) {
//     return e === val;
//   });
// }

// console.log(checkValues(nums, 20));
// console.log(checkValues(nums, 5));

// let range = {
//   min: 10,
//   max: 20,
// };

// let checkNumberInRange = nums.some(function (e) {
//   // console.log(this.min);
//   // console.log(this.max);
//   return e >= this.min && e <= this.max;
// }, range);

// console.log(checkNumberInRange);
// const locations = {
//   20: "Place 1",
//   30: "Place 2",
//   50: "Place 3",
//   40: "Place 4",
// };

// let mainLocation = 15;
// let myArray = Object.keys(locations);
// let arrayNums = myArray.map((n) => +n)
// console.log(arrayNums);
// let check = arrayNums.every(function (e) {
//   return e > this;
// }, mainLocation);
// console.log(check)
/*
  Spread Operator => ...Iterable
  "Allow Iterable To Expand In Place"
*/

// Spread With String => Expand String

// console.log("Osama");
// console.log(..."Osama");
// console.log([..."Osama"]);

// // Concatenate Arrays

// let myArray1 = [1, 2, 3];
// let myArray2 = [4, 5, 6];

// let allArrays = [...myArray1, ...myArray2];
// console.log(allArrays);

// // Copy Array

// let copiedArray = [...myArray1];
// console.log(copiedArray);

// // Push Inside Array

// let allFriends = ["Osama", "Ahmed", "Sayed"];
let thisYearFriends = ["Sameh", "Mahmoud"];

allFriends.push(...thisYearFriends);

console.log(allFriends);

// Use With Math Object

let myNums = [10, 20, -100, 100, 1000, 500];
console.log(Math.max(...myNums));

// Spread With Objects => Merge Objects

let objOne = {
  a: 1,
  b: 2,
};
let objTwo = {
  c: 3,
  d: 4,
};

console.log({ ...objOne, ...objTwo, e: 5 });