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


    