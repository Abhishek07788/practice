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
// Array.prototype.MyReduce = function(callback, initialValue){
//    let acc = initialValue;
//    let startIndex = 0;
   
//    if(initialValue === undefined){
//        acc = this[0];
//        startIndex = 1;
//    }
//    for(let i = startIndex; i<this.length; i++){
//        acc = callback(acc, this[i], i, this)
//    }
//    return acc;
// }

// const arr = [1, 2, 3, 4, 5, 6];
// let ans = arr.MyReduce((acc, el) => {
//   return (acc += el);
// }, 0);

// console.log(ans);

// // ---- Custom Memoization ----
// function myMemoize(func, context) {
//   const res = {};
//   return (...arg) => {
//     var argCache = JSON.stringify(arg);
//     if (!res[argCache]) {
//       res[argCache] = func.call(context || this, ...arg);
//     }
//     return res[argCache];
//   };
// }

// function add(a, b) {
//   for (let i = 0; i < 99999999; i++) {}
//   return a + b;
// }

// const memoizedFunc = myMemoize(add);

// console.time("First Call");
// console.log(memoizedFunc(455, 443));
// console.timeEnd("First Call");

// console.time("Second Call");
// console.log(memoizedFunc(455, 443));
// console.timeEnd("Second Call");

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

// --------- Second largest number -------
// let arr = [1, 8, 0, 3, 1, 7, 3, 9, 9, 2];
// let x = [...new Set(arr.sort((a, b) => b - a))][1];
// console.log("x: ", x);

// ---- create our trueLength property
// Object.defineProperty(Array.prototype, "trueLength", {
//   get: function () {
//     return this.filter((el) => el).length;
//   },
// });
// let arr = [1, , 4, null, 4, 6, undefined];
// console.log("arr.trueLength: ", arr.trueLength);


// // ---- create our trueLength method
// Array.prototype.trueLength = function () {
//   return this.filter((el) => el).length;
// };
// let arr = [1, , 4, null, 4, 6, undefined];
// console.log("arr.trueLength: ", arr.trueLength());
