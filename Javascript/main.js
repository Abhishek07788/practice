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
//   if (num <= 2) return false;
//   let res = 0;
//   for (let i = 1; i <= num; i++) {
//     if (num % i === 0) {
//       res = res + 1;
//     }
//   }
//   return res === 2 ? true : false;
// }

// console.log(isPrime(4)); // Output: false
