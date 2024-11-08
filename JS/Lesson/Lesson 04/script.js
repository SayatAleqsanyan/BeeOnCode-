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






















