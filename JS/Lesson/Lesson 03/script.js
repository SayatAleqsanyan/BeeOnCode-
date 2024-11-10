//

// arr[4] = 4

// arr.push(5)
// const deleted = arr.pop()

// console.log(arr[arr.length-1], deleted);

// const shift_r = arr.shift()

// console.log(arr, shift_r)

// function func() {
//     return (
//         1, 2, 3, 4
//     )
// }

// console.log(func())

// MAP _

// arr = arr.map((element, index, array) => {
//     return (
//         element + 100,
//         element + 5,
//         element + 44
//     )
// })

// console.log(arr)

// Filter

// const arr_b = arr.filter((element) => {
//     if (!(element % 2)) {
//         return true
//     }
//     return false
// })

// console.log(arr)
// console.log(arr_b);

// let ret = 0;
// for (let i = 0; i < arr.length; i++) {
//     // const element = array[i];
//     ret = ret + arr[i];
// }

// console.log(ret);

// Reduce

// const test = arr.reduce((a, b) => {
//     if (!b) {
//         return a
//     }
//   return a * b;
// }, 1);

// console.log(test);

// ForEach

// let arr = [0, 1, 2, 3, 4];
// arr.forEach((element, index, array) => {
//   if (element % 2 === 0) {
//     console.log(element * 2);
//   }
//   console.log(element);
// });

// console.log( arr_c.find((element) => element == "peac2h"));

// Find

// if (arr_c.find((element) => element == "peach")) {
//     console.log(888888)
// }

// const arr_c = ["apple", "cherry", "peach", "orange", "apple"];

// FindIndex

// const test = arr_c.findIndex((element) => {
//     return element !== "peach"
// })

// console.log(test);

// const arr_d = [15, 25, 65, 70, 80, 90, 100]

// Some
// console.log(arr_d.some((element) => {
//     return element > 100
// }));

// Every
// console.log(arr_d.every((element) => {
//     return element % 2 === 0
// }));

// Includes
// const arr_c = ["apple", "cherry", "peach", "orange", "apple"];
// console.log(arr_c.includes("apple2"));

// Sort
const arr_d = [15, 80, 90, 70, 25, 65, 100];
// console.log(arr_d.sort((a, b) => b - a));

// let tmp;
// for (let i = 0; i < arr_d.length - 1; i++) {
//     for (let j = i + 1; j < arr_d.length; j++) {
//         if (arr_d[i] > arr_d[j]) {
//             // arr_d[i] = arr_d[i] + arr_d[j]
//             // arr_d[j] = arr_d[i] - arr_d[j]
//             // arr_d[i] = arr_d[i] - arr_d[j]
//             [arr_d[i], arr_d[j]] = [arr_d[j], arr_d[i]]
//         }
//     }
// }
// console.log(arr_d);


// Concat()

// const arr_a = [1, 2, 3]
// const arr_b = [4, 5, 6]
// const arr_c = [4, 5, 6]

// const group = arr_a.concat(arr_b, arr_c)

// console.log(group);

// Slice
// const arr_d = [15, 80, 90, 70, 25, 65, 100]

// const result = arr_d.slice(0, arr_d.length)
// console.log(result);

// Splice
// const arr_d = [15, 80, 90, 70, 25, 65, 100]

// arr_d.splice(2,2,28, 29)

// console.log(arr_d);

// const newArr = [...arr_d]

// console.log(...arr_d);
