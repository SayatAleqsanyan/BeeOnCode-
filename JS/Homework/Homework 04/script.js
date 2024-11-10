const str = "Hello my dear friend. How are you my friend. I heard strange sounds in the yard. Can you check it   out?";
// Ունենք կամայական տեքստ, տեքսից հեռացնել կրկնվող բառերը:

const arrStr1 = str.split(" ");
const arrStr10 = new Set(arrStr1);
const arrStr11 = new Array (...arrStr10);

console.log("Զանգվածը որի տեքսից պետք է հեռացնել կրկնվող բառերը");
console.log(arrStr1);
console.log("Զանգվածի տեքսից հեռացված են կրկնվող բառերը");
console.log(arrStr11);

// Ունենք կամայական տեքստ: prompt-ում մուտքագրում ենք x և y բառերը: Տեքստում x -բառերը փոխարինել y բառով:

const arrStr2 = str;
const x2 = prompt("Մուտքագրել տեքստում որ բառը փոխարինել")
const y2 = prompt("Մուտքագրել ինչ բառով փոխարինել")
console.log("Զանգվածի տեքստում x-բառերը փոխարինել y-ով" + arrStr2.replaceAll(x2, y2));

// Ունենք կամայական տեքստ, հաշվել, թե նրա բառերից քանիսն են սկսվում a տառով:

const arrStr3 = [...str];
let count3 = 0;
arrStr3.forEach(arrStr3 => {
    if (arrStr3.toLowerCase().startsWith('a')) {
        count3++;
    }
});
console.log("Զանգվածի բառերից քանիսն են սկսվում a տառով։ " +   count3);


// A1(x,k) - ֆունկցիան վերադարձնում է x տողի մեջ k տառի հանդիպման բոլոր ինդեքսները
// Օրինակ՝ A1(“ararat”, “a”) -ի դեպքում կստանանք այսպիսի զանգված՝ [0,2,4], քանի որ a տառը “ararat”  բառի մեջ հանդիպում է 0, 2, եւ 4 ինդեքսներում

function A1(x, k) {
  const result = [];
  // Անցնում ենք տողի բոլոր տառերով
  for (let i = 0; i < x.length; i++) {
    if (x[i] === k) {
      result.push(i);
    }
  }
  return result;
}

console.log("Զանգվածի x տողի մեջ k տառի հանդիպման բոլոր ինդեքսները։ " + A1("ararat", "a"));

// A2(x,y,z) - ստանում է զանգված և երկու թիվ, այն վերադարձնում է true, եթե զանգվածի թվերը գտնվում են միայն այս միջակայքում: 
// Եթե զանգվածում առկա է այնպիսի թիվ, որը նշված միջակայքում չի, ֆունկցիան վերադարձնում է false 
// Օրինակ՝ A2([5, 11, 15, 6, 25], 10, 20) -ի դեպքում կստանանք False

function A2(arr, min, max) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min || arr[i] > max) {
      return false;
    }
  }
  return true; 
}

console.log("Զանգվածի տարրերը գտնվում են միայն այս միջակայքում թէ ոչ։ " + A2([5, 11, 15, 6, 25], 5, 20));

// A3(x) - եթե x զանգվածի տարրերը աճման կարգով են դասավորված, վերադարձնում է true, հակառակ դեպքում false
// Օրինակ՝ A3([5, 10, 20, 30, 31, 32]) -ի դեպքում կստանանք true

function A3(x2) {
  for (let i = 1; i < x2.length; i++) {
    if (x2[i] < x2[i - 1]) {
      return false; 
    }
  }
  return true; 
}

console.log("Զանգվածի տարրերը աճման կարգով են դասավորված թէ ոչ։ " + A3([5, 10, 20, 30, 31, 32]));

