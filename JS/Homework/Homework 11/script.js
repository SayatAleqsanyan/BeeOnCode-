// Գրել ֆունկցիա, որը ընդունում է թիվ և վերադարձնում իր
// boolean տարբերակը։

function bool(num) {
  console.log(!!(num));

  return !!(num) 
}  

  bool(10);
  bool(0);
  bool(-10);

console.log("-----------------------------------------------------------------");

// Գրել ֆունկցիա, որը ընդունում է տող և վերադարձնում օբյեկտ 
// երկու արժեքով՝ օգտագործելով parseInt և Number
// ֆունկցիաները

function strToNumber(str) {

  const arrStr = [Number(str), parseInt(str)]
  console.log(arrStr);
  
  return arrStr
} 

strToNumber("1456411.25");   

console.log("-----------------------------------------------------------------");

// Գրել ֆունկցիա որը ընդունում է թիվ և վերադարձնում նրա
// Math.ceil, Math.floor, Math.round տարբերակները

function mathType(num) {

  const arrMath = [Math.ceil(num), Math.floor(num), Math.round(num)]
  console.log(arrMath);
  
  return arrMath
} 

mathType(10.5);    

console.log("-----------------------------------------------------------------");


// Գրել ֆունկցիա, որը կընդունի օգտատիրոջ տարիքը և սեռը,
// արական սեռի 21-ից մեծ օգտատերերին և իգական սեռի 24-ից
// մեծ օգտատերերին վերադարձնի true մնացած դեպքերում false

const ARAM = {
  names : "Aram",
  age: 25,
  gender: "boy"
}

const ANI = {
  names : "Ani",
  age: 23,
  gender: "girl"
}

function gends( obj ) {
    if (obj.gender === "boy" && obj.age >= 21 || obj.gender === "girl" && obj.age >= 24) {
      console.log(true);
      return true
    } else { console.log(false);  return false}
}

gends( ARAM );
gends( ANI );

console.log("-----------------------------------------------------------------");

// Գրել ֆունկցիա, որը կհեռացնի զանգվածի վերջին տարրը,
// սկզբում կավելացնի 0 և զանգվածի եջտեղում կտեղադրի
// զանգվածի միջին թվաբանականը։

const ARRS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function arrFunkc(arr) {
  arr.pop()
  arr.unshift(0)

  const arrE = arr.reduce((a, b) => ((a + b)), 0)
  const arrI = ~~(arr.length / 2) 
  const arrRez = arrE / arr.length 

  arr.splice(arrI, 0, arrRez )
  
  console.log(arr);
  return arr
}

arrFunkc(ARRS)

console.log("-----------------------------------------------------------------");

// Ստեղծել Promise որը 2 վարկյան հետո կտպի ավարտ բառը։

let myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
      resolve("ավարտ");
  }, 2000); 
});

myPromise .then(result => {console.log("Ծրագրի " + result)})
          .catch(error => {console.log(error + "Չստացվեց")});



// Զանգվածի պրոտոտիպին ավելացնել նոր մեթոդ, որը կանչելիս
// փոխանցում ենք զույգ կամ կենտ թիվ և ինքը տպում է
// զանգվածի զույգ կամ կենտ թվերի միջին թվաբանականը։

Array.prototype.zuygMijin = function() {
  let sum = this .filter(e => e % 2 === 0).reduce((a, b) => ((a + b)), 0)
  let sumL = this.filter(e => e % 2 === 0).length
  
  console.log(sumL > 0 ? sum / sumL : 0)
  return sumL > 0 ? sum / sumL : 0
}

Array.prototype.kentMijin = function() {
  let sum = this .filter(e => e % 2 === 1).reduce((a, b) => ((a + b)), 0)
  let sumL = this.filter(e => e % 2 === 1).length
  
  console.log(sumL > 0 ? sum / sumL : 0)
  return sumL > 0 ? sum / sumL : 0
}

arrMetod = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

arrMetod.zuygMijin();
arrMetod.kentMijin();

console.log("-----------------------------------------------------------------");
