const arr = [ 5, 3, 8, 6, 2, 4, 1, 7];
arr[8] = 9;
console.log("Array: " + arr);
console.log("Array Length: " + arr.length);

const arrString = ["Am", "Ru", "Net", "Com", "Am", "Org", "Am", "Info", "New"];
console.log("Array String: " + arrString);

arr.push(0) // avelacnel element verjic
console.log("push: " + arr);
arr.pop(); // jnjel verjin element@
console.log("pop: " + arr);
arr.unshift(0); //avelacnel element skzbic
console.log("unshift: " + arr);
arr.shift(); // jnjel arajin element@
console.log("shift: " + arr);

// popoxel bolor elementner@ nuyn chapov
const arrMap = arr.map((element, index, array) => element + 10 )
console.log("Map: " + arrMap);

// filtrel
const arrFilter = arr.filter((element)=> {
    if(element % 2 === 0) return true
    else return false
})
console.log("Filter: " + arrFilter);

// hashvel bolor andamneri bazmapatik@ kam gumar@
const arrReduce = arr.reduce((a, b) => {
    if (!b) return a
    return a * b;
}, 1);
console.log("Reduce: " + arrReduce);

// ForEach
let arrForEach = [0, 1, 2, 3, 4];
arrForEach.forEach((element, index, array) => {
    if (element % 2 === 0) {
    console.log(element * 2);
  }
  else console.log(element);
});

// Length cat
const arrLength = [0,1,2,3,4,5,6,7,8,9]
console.log("arrLength: " + arrLength);
arrLength.length = 5;
console.log("arrLength: " + arrLength);

// Delete
const arrDel = arr.map((element)=> element);
delete arrDel[2];
console.log("Delete: " + arrDel);
console.log("Array: " + arr);

// Concat
const arr_a = [1, 2, 3];
const arr_b = [4, 5, 6];
const arr_c = [4, 5, 6];
const group = arr_a.concat(arr_b, arr_c)
console.log("Arr1: " + arr_a + " Arr2: " + arr_b + " Arr3 :" + arr_c);
console.log("Concat: " + group);

// Find
const arrFind = arrString.map((element)=> element);
if (arrFind.find((element) => element == "Am")) {
    console.log("Find: " + true);
} else {
    console.log("Find: " + false);
}

// FindIndex
const FindIndex = arrFind.findIndex((element) => element !== "Am");
console.log(FindIndex);

const array = [15, 25, 65, 70, 80, 90, 100]

//Some
console.log(array.some((element) => element > 100));

// Every
console.log(array.every((element) => element % 5 === 0));

// Includes
const arrIncludes = ["apple", "cherry", "peach", "orange", "apple"];
console.log(arrIncludes.includes("apple1"));

// Sort
console.log(array.sort((a, b) => b - a)); // mecic - poqr
console.log(array.sort((a, b) => a - b)); // poqric - mec 

// Slice
const arrResult = array.slice(1, 5);
console.log(arrResult);

// Splice
const arrSplice = [15, 80, 90, 70, 25, 65, 100];
arrSplice.splice(2, 3, "28", "29");
console.log(arrSplice);

// ...array
const newArr = [...array]
console.log(...array);

/*
const arr = [
    {name: "ani", age:21},
    {name: "ani", age:22},
    {name: "ani", age:23},
    {name: "ani", age:24},
    {name: "ani", age:25},
  ]
  
  console.log(arr[arr.length - 1]);
  console.log(arr.at(-2));
  
  console.log(arr.find((val) => val.age === 25));
  console.log(arr.findLast((val) => val.age === 25));
  
  console.log(arr.findIndex((val) => val.age === 25));
  console.log(arr.findLastIndex((val) => val.age === 25));
  
  const number = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const testS = [...number].sort()
  console.log(testS);
  
  console.log(number.toSorted());
  
  console.log(number); 
  
  console.log(number.reverse);
  console.log(number.toReversed); 
  
  console.log(number.With(1, 9));
  
  //---string--------------------------------------------------------------
  
  const str = "abcdef"
  console.log(str.length);
  
  console.log(str[0]);
  console.log(str.charAt(0));
  
  console.log(str.toUpperCase());
  console.log(str.toLowerCase());
  
  console.log(str.includes("def", 2));
  console.log(str.indexOf("def", 3));
  
  console.log(str.slice(0,3));
  
  const str2 = "Es im anush Hayastani ... ";
  console.log(str2.split(" ", 5));
  const arrStr = str2.split("a");
  console.log(arrStr.join("a")); 
  
  console.log(str2.trim());
  console.log(str2.replace("a" , "b")); // arjinn e poxum
  console.log(str2.replaceAll("a" , "b")); // bolorn e poxum
  
  const str3 = "5";
  const str4 = "55";
  
  console.log(str3.padStart(4, "0"));
  console.log(str4.padStart(4, "0"));
  
  console.log(str3.padEnd(4, "0"));
  console.log(str4.padEnd(4, "0"));
  
  
  
  function palindrom(params) {
    const tmp = params.toLowerCase()
    
    return(tmp === tmp.split("").reverse().join(""))
  } 
  
  log(palindrom("Menak katak kanem"));
  
  const aaa = []
  const bbb =new Array()
  
  console.log(aaa, bbb);

*/































