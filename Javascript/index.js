// let arr = ["123whs", "1hdgj"];
// // let sum = 0;

// // arr.map((el) => {
// //   let x = el.split("").map(Number);
// //   for (let i = 0; i < x.length; i++) {
// //     if (x[i]) {
// //       sum += x[i];
// //     }
// //   }
// // });
// // console.log(sum);

// // // -----------(2nd)---------------
// // var searchMatrix = function (matrix, target) {
// //   let n = matrix.length;
// //   // let m = matrix[0].length;
// //   for (let i = 0; i < n; i++) {
// //     let el = matrix[i];
// //     for (let j = 0; j < el.length; j++) {
// //       if (el[j] === target) {
// //         return true;
// //       }
// //     }
// //   }
// //   return false;
// //   // return false;
// // };

// // let matrix = [
// //   [1, 2, 3],
// //   [6, 8, 3],
// //   [3, 5, 7],
// //   [5, 8, 9],
// // ];
// // let target = 7;
// // console.log(searchMatrix(matrix, target));

// --------------- Event loop -----------------

// (function() {
//   Promise.reject(6).catch(console.log);
//   console.log(1);
//   setTimeout(function(){console.log(2)}, 1000);
//   Promise.resolve(5).then(console.log);
//   setTimeout(function(){console.log(3)}, 0);
//   console.log(4);
// })(); // 1,4,6,5,3,2

// // ------------- (React class component) ------------------

// // import React from "react";
// // class myComponent extends ReadableByteStreamController.Component {
// //   render() {
// //     return (
// //       <div>
// //         <h1> List </h1>
// //         <p>Li 1</p>
// //         <p>Li 2</p>
// //         <p>Li 3</p>
// //       </div>
// //     );
// //   }
// // }

// // export default myComponent;

// // -----------curring----------

// function sum(a) {
//   return (b) => {
//     if (b) return sum(a + b);
//     return a;
//   };
// }

// let x =(sum(1)(2)(3)(6));
// console.log(x());

// ---------- call apply bind -----------
// let x = {
//   fname: "Abhishek",
//   lname: "Solanki",
//   age: 18,
// };

// function getDetails(city, country) {
//   console.log(this.fname + " " + this.lname + " " + city + " " + country);
// }

// let y = {
//   fname: "Abhi",
//   lname: "Thakur",
//   age: 18,
// };

// getDetails.call(x, "delhi", "India");
// getDetails.apply(y, ["delhi", "India"]);
// let Binded = getDetails.bind(y, "delhi", "India");
// Binded();

// ---------- HOF ---------
// const findSquare = (num) => {
//     return num * num;
//   };

//   const findQueue = (num) => {
//     return num * num * num;
//   };

//   const HOF = (arr, func) => {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//       newArr.push(func(arr[i]));
//     }
//     return newArr;
//   };
//   let arr = [1, 2, 3, 4, 5];
//   let square = HOF(arr, findSquare);
//   let queue = HOF(arr, findQueue);
//   console.log("square: ", square);
//   console.log("queue: ", queue);

// ----------- Prototypes ----------
// const obj1 = {
//   fname: "Abhishek",
//   lname: "Thakur",
//   age: 18,
// };

// const obj2 = {
//   fullName: "Abhi Solanki",
//   age: 20,
//   __proto__: obj1,
// };

// const obj3 = {
//     fullName: "Aditya Solanki",
//     age: 17,
//     __proto__: obj2,
//   };
// console.log(obj3);

// ----- Prototype polyfill Map -------

// Array.prototype.MyMap = function (callback) {
//   let arr = [];
//   for (let i = 0; i < this.length; i++) {
//     arr.push(callback(this[i], i, this));
//   }
//   return arr;
// };

// const arr = [1, 2, 3, 4, 5, 6];
// let ans = arr.MyMap((el,i, a) => {
//   return el;
// });

// ----- Prototype polyfill forEach -------
// Array.prototype.MyForeach = function (callback) {
//   for (let i = 0; i < this.length; i++) {
//     callback(this[i], i, this);
//   }
// };

// const arr = [1, 2, 3, 4, 5, 6];
// arr.MyForeach((el, i, a) => {
//   console.log(el);
// });

// ----- Prototype polyfill filter -------
// Array.prototype.MyFilter = function (callback) {
//   let arr = [];
//   for (let i = 0; i < this.length; i++) {
//     if (callback.call(this, this[i], i, this)) {
//       arr.push(this[i]);
//     }
//   }
//   return arr;
// };

// const arr = [1, 2, 3, 4, 5, 6];
// let ans = arr.MyFilter((el, i, a) => {
//   return el > 2;
// });

// ----- Prototype polyfill reduce -------
// Array.prototype.MyReduce = function (callback, initial) {
//   let acc = initial;
//   for (let i = 0; i < this.length; i++) {
//     if (acc != undefined) {
//       acc = callback.call(undefined, acc, this[i], i, this);
//     } else {
//       acc = this[i];
//     }
//   }
//   return acc;
// };

// const arr = [1, 2, 3, 4, 5, 6];
// let ans = arr.MyReduce((acc, el) => {
//   return (acc += el);
// }, 0);

// console.log(ans);

// ----------- SetTime out polyfill -------
// function MySetTimeout(callback, time) {
//   let i = 0;
//   while (i < time * 999999) i++;
//   callback();
// }

// MySetTimeout(() => {
//   console.log("Abhishek");
// }, 1000);

//------------Promise---------------
//promise is an object representing the eventual completion or failure of an asynchronous operation
//we use promises to have control on the code to avoid callback hell and inversion of control.

// let x = 10;
// let promise = new Promise((resolve, reject) => {
//   if (x == 10) {
//     resolve("Hello");
//   } else {
//     reject("Something is wrong");
//   }
// });

// promise
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// ---------- var Functional Scope -------
// function x()
// {
//     var a = 10;
// }
// x();
// console.log(a);

// // ---------- shadow copy ---------
// let obj = {
//   name: "x",
//   age: 20,
// };

// let x = { ...obj };
// x.name = "Abhishek";
// console.log(obj);
// console.log(x);

// ---------- hard copy --------------
// let obj = {
//   name: "x",
//   age: 20,
//   more: {
//     city: "kasganj",
//   },
// };
// let x = JSON.parse(JSON.stringify(obj));
// x.more.city = "Agra";
// console.log(obj);
// console.log(x);

// --------------------
// function foo1(){
//     return {
//         bar:"hello"
//     }
// }
// function foo2(){
//     return {
//         bar:"hello"
//     }
// }
// console.log("foo1 returns");
// console.log(foo1());
// console.log("foo2 returns");
// console.log(foo2());

// ------- ( spread ) --------
// function log(arg) {
//   console.log(...arg);
// }
// let arr = [1, 2, 3, 4, 6];
// log(arr);

// ------- ( rest ) --------
// function log(...arg) {
//   console.log(arg);
// }
// log(1, 2, 3, 4, 6);

// ---------- reverse ------------
// let str = "This is JavaScript Code";
// let result = str.split(" ").map((el) => el.split("").reverse().join("")).join(" ");
// console.log("result: ", result);

// ----------- Find max and min elements ----------
// let str = "This is JavaScript Code";
// str = str.split(" ").join("");
// let obj = {};
// for (let i = 0; i < str.length; i++) {
//   let el = str[i];
//   if (obj[el]) {
//     obj[el]++;
//   } else {
//     obj[el] = 1;
//   }
// }

// let max = -Infinity;
// let min = Infinity;
// let MaxObjKey = "";
// let MinObjKey = "";
// for (let key in obj) {
//   if (obj[key] > max) {
//     max = obj[key];
//     MaxObjKey = key;
//   } else {
//     min = obj[key];
//     MinObjKey = key;
//   }
// }
// console.log(MaxObjKey + "=>" + max);
// console.log(MinObjKey + "=>" + min);

// ---------Selection sort -------
// TC:- O(n^2)
// SC:- O(1)
// let arr = [8, 3, 6, 8, 4, 2];
// let N = 6;
// for(let i=0; i<N; i++){
//     let minIndex = i;
//     for(let j=i+1; j<N; j++){
//         if(arr[j] < arr[minIndex]){
//             minIndex = j;
//         }
//     }
//     if(minIndex !== i){
//         temp = arr[i];
//         arr[i] = arr[minIndex];
//         arr[minIndex] = temp;
//     }
// }
// console.log(arr);

// --------- Insertion sort -------
// TC:- O(n^2)
// SC:- O(1)
// let arr = [8, 3, 6, 8, 4, 2];
// let N = 6;
// for (let i = 1; i < N; i++) {
//   let temp = arr[i];
//   let j = i - 1;
//   while (j >= 0 && arr[j] > temp) {
//     arr[j + 1] = arr[j];
//     j--;
//   }
//   arr[j + 1] = temp;
// }
// console.log(arr);

// --------- quick sort -------
// TC:- O(n log n)
// SC:- O(1)
// function quicksort(arr) {
//     if (arr.length <= 1) {
//       return arr;
//     }
//     let pivot = arr[arr.length - 1];
//     let left = [];
//     let right = [];
//     for (let i = 0; i < arr.length - 1; i++) {
//       if (arr[i] < pivot) {
//         left.push(arr[i]);
//       } else {
//         right.push(arr[i]);
//       }
//     }
//     return quicksort(left).concat(pivot, quicksort(right));
//   }
// let arr = [8, 3, 6, 8, 4, 2];
// let N = 6;
// console.log(quicksort(arr));

// -----------------------------
// function findValue(arr, N, K) {
//   let low = 0;
//   let high = N - 1;
//   let ans = -1;

//   while (low <= high) {
//     var mid = Math.floor((low + high) / 2);
//     if (arr[mid] === K) {
//       return mid;
//     } else if (arr[mid] < K) {
//       low = mid + 1;
//     } else {
//       high = mid - 1;
//     }
//   }
//   return -1;
// }
// let arr = [8, 3, 6, 8, 4, 2];
// let N = 6;
// let K = 4;
// console.log(findValue(arr, N, K));

// ------------------------------
// function BinarySearchIterative(N, K, arr) {
//   let low = 0;
//   let high = N - 1;
//   let upper = -1;
//   while (low <= high) {
//     let mid = low + Math.floor((high - low) / 2);
//     if (arr[mid] === K) {
//       high = mid - 1;
//       upper = mid;
//     } else if (arr[mid] > K) {
//       high = mid - 1;
//     } else {
//       low = mid + 1;
//     }
//   }
//   return upper;
// }
// arr = [1, 3, 8, 4, 0, 8];
// N = 6;
// K = 8;
// console.log(BinarySearchIterative(N, K, arr));

// --------------------------------
// function factorial(N){
//     if(N == 1 || N == 0){
//         return 1;
//     }
//     return N * factorial(N-1);
// }
// console.log(factorial(5));

// ---------------------
// function fibonacci(n) {
//     if (n <= 0) {
//         return 0;
//     } else if (n === 1) {
//         return 1;
//     } else {
//         return fibonacci(n-1) + fibonacci(n-2);
//     }
// }
// console.log(fibonacci(10));

// -------------------
// function quickSort(arr){
//     if(arr.length <= 1){
//         return arr;
//     }
//     let top = arr[arr.length -1];
//     let left = [];
//     let right = [];
//     for(let i=0; i<arr.length-1; i++){
//         if(arr[i] < top){
//             left.push(arr[i]);
//         }else{
//             right.push(arr[i])
//         }
//     }
//     return quickSort(left).concat(top, quickSort(right));
// }

// let arr = [8, 3, 6, 8, 4, 2];
// console.log(quickSort(arr));

// // --------------- find missing odd -----------
// let arr = [5, 7, 9, 11, 15, 17];
// let missing = 0;
// for (let i = 0; i < arr.length; i++) {
//   let el = arr[i];
//   let next_el = arr[i + 1];
//   if (next_el - el !== 2) {
//     missing = el + 2;
//     break;
//   }
// }
// console.log(missing);

// Add numbers apart from current index and push into array
// let arr = [2, 7, 11, 4, -2];
// let output = [];
// for (let i = 0; i < arr.length; i++) {
//   let sum = 0;
//   for (let j = 0; j < arr.length; j++) {
//     if (j == i) {
//       continue;
//     } else {
//       sum += arr[j];
//     }
//   }
//   output.push(sum);
// }
// console.log(output);

// ------ Code sniped -> 1 --------

// console.log("First"); // 1
// setTimeout(() => console.log("Second"), 0); // 3 // task queue
// console.log("Third"); // 2

// ------ Code sniped -> 2 --------

// console.log("First"); // 1
// function secondCall() {
//   console.log("Second"); // 4
// }
// setTimeout(secondCall, 2000); // task queue
// setTimeout(() => console.log("Third"), 0); // 3 / task queue
// console.log("four"); // 2

// process.stdin.setEncoding('utf8'); // Set the encoding to UTF-8
// console.log('enter data:');

// process.stdin.on('data', function (data) {
//   // This function is called whenever new input is available
//   // The 'data' parameter contains the input data as a string
//   console.log('Input received: ' + data)
// });

// process.stdin.on('end', function () {
//   // This function is called when the input stream ends (e.g. when the user presses Ctrl+D)
//   console.log('Input stream ended.');
// });

// const city = ["noida", "delhi", "mumbai", "delhi"];
// console.log([new Set(city)]);

// ---------- ConCat --------
// const arr = [
//   [1, 2],
//   [4, 2],
// ];
// let x = arr.reduce(
//   (acc, curr) => {
//     return acc.concat(curr);
//   },
//   [1, 3]
// );
// console.log("x: ", x); // [1,3,1,2,4,2];

// ------------------------------------------
// const nam = ["Abhi", "Pratap", "Solanki", "Abhi"];
// const age = [21, 17, 30, 34];
// const arr = [];
// for (let i = 0; i < age.length; i++) {
//   const obj = {};
//   obj["name"] = nam[i];
//   obj["age"] = age[i];
//   arr.push(obj);
// }
// arr.sort((a, b) => a.age - b.age);
// console.log(arr);

// --------- Second largest number -------
// let arr = [1, 8, 0, 3, 1, 7, 3, 9, 9, 2];
// let x = [...new Set(arr.sort((a, b) => b - a))][1];
// console.log("x: ", x);

// function getSecondLargest(arr){
//     if(arr.length < 2){
//         console.log(null);
//     }
//     let first = -Infinity;
//     let second = -Infinity;
    
//     for(let el of arr){
//         if(el > first){
//             second = first;
//             first = el;
//         } else if(el > second && el !== first){
//             second = el;
//         }
//     }
//     console.log(first)
//     console.log(second)
// }

// getSecondLargest([1,4,7,9,3,5,9])
