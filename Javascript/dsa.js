//Group items on the basis of age of given array of object
// let people = [
//   {
//     name: "a",
//     age: 23,
//   },
//   {
//     name: "b",
//     age: 23,
//   },
//   {
//     name: "c",
//     age: 24,
//   },
//   {
//     name: "d",
//     age: 24,
//   },
//   {
//     name: "e",
//     age: 21,
//   },
// ];

// function groupBy(arr) {
//   let result = {};
//   //Business logic here
//   for (let i = 0; i < arr.length; i++) {
//     let el = arr[i];
//     if (result[el.age] === undefined) {
//       result[el.age] = [el];
//     } else {
//       result[el.age].push(el);
//     }
//   }
//   return result;
// }
// console.log(groupBy(people));

//out put
/* [{23:[{
      name: "a",
      age: 23
    },
    {
      name: "b",
      age: 23
    }]},....]*/

// function isPrime(num) {
//   let count = 0;
//   for (let i = 1; i <= num; i++) {
//     if (num % i === 0) {
//       count++;
//     }
//   }
//   return count === 2 ? true : false;
// }

// console.log(isPrime(12)); // Output: false

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

// // --- Bubble Sort -----
// // TC: O(N*N)
// // SC: O(1)
// let arr = [1, 2, 6, 7, 3, 7, 3, 6, 4];
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr.length - 1; j++) {
//     if (arr[j] > arr[j + 1]) {
//       let temp = arr[j];
//       arr[j] = arr[j + 1];
//       arr[j + 1] = temp;
//     }
//   }
// }
// console.log(arr);
