// Առաջադրանքներ 07: setTimeout և setInterval՝
// -------------------------------------------------------------------------------------
// Առաջադրանք 1: Ունենք getRandomNumber(a = 1, b = 2) ֆունկցիան, որը ստանում է 2
// պարամետր և յուրաքանչյուր 1000 միլիվայրկյան ինտերվալը(setInterval) մեկ գեներացնում է
// պատահական թիվ (Math.random()), եթե գեներացված թիվը գտնվում է a-ից b միջակայքում ապա
// Promise-ի resolve-ի միջոցով վերադարձնում է (return) արդյունքը:
// async function Spinner(a, b) ֆունկցիայի մեջ անհրաժեշտ է 5 անգամ կանչել
// getRandomNumber(a, b); ֆունկցիան, և վերջում համեմատել վերադարձրած արժեքները, եթե
// բոլորը արժեքները մինյանց հավասար են, ապա alert-ի կամ document.write-ի միջոցով էկրանին
// տպել "WIN!!!!", եթե ոչ` "LOSE!!!!".
// Spinner(1,1) -ի դեպքում հաղթելու հավանականությունը կլինի 100%, իսկ Spinner(1,2) -ի
// դեպքում՝ 6.25%

function getRandomNumber(a = 1, b = 2) {
  return new Promise((resolve, reject) => {
    const randomNumber = Math.random() * (b - a) + a;
    console.log(randomNumber);

    if (randomNumber => a && randomNumber <= b) {
      resolve(randomNumber);
    } else {
      reject('Number out of range');
    }
  });
}

async function Spinner(a, b) {
  const results = [];

  for (let i = 0; i < 5; i++) {
    try {
      const result = await getRandomNumber(a, b);
      results.push(result);
    } catch (error) {
      console.error(error);
      results.push(null);
    }
  }

  if (results.every(result => result === results[0])) {
    document.write("WIN!!!!");
  } else {
    document.write("LOSE!!!!");
  }
}

Spinner(2, 2);  


// -------------------------------------------------------------------------------------
// Առաջադրանք 2: Ստեղծել սուրճի մեքենայի իմիտացիա, որը կստանա պատվերներ տարբեր տեսակի
// սուրճերի համար և կցուցադրի պատրաստման գործընթացը քայլ առ քայլ։
// Օգտագործողը կարող է պատվիրել երեք տեսակի սուրճ՝ espresso, latte կամ cappuccino։ Եթե
// օգտվողը փորձի պատվիրել անթույլատրելի տեսակի սուրճ (օրինակ, "tea"), սուրճի մեքենան
// պետք է տեղեկացնի դրա մասին։
// Ստեղծեք makeCoffee(coffeeType) ֆունկցիա, որը ստանում է մեկ փոփոխական՝ սուրճի
// տեսակը(անունը)։ Եթե սուրճի տեսակը անթույլատրելի է, ֆունկցիան պետք է վերադարձնի սխալ։
// Օգտագործեք console.log() հաղորդագրությունները ցուցադրելու համար։
// Ցուցադրեք սուրճ պատրաստելու քայլերը, ինչպիսիք են՝ "Տեղադրում ենք բաժակը", "Լցնում ենք
// ջուր", "Ավելացնում ենք սուրճ", "Ավելացնում ենք շաքարավազ", "Խառնում ենք":
// Պատվերները պետք է իրականացվեն սինխրոն։ Անհրաժեշտ է օգտագործել async/await ասինխրոն
// գործողությունները կառավարելու համար։
// Հուշում՝ վերհիշեք Promise((reslove, reject) => {})
// Նմուշ։ https://prnt.sc/6lfd6NFlhYX8
// // espresso-ն պատրաստում են առանց շաքարավազի!!


function placeCup() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Տեղադրում ենք բաժակը");
      resolve();
    }, 1000);
  });
}

function addWater() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Լցնում ենք ջուր");
      resolve();
    }, 1000);
  });
}

function addCoffee() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Ավելացնում ենք սուրճ");
      resolve();
    }, 1000);
  });
}

function addSugar() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Ավելացնում ենք շաքարավազ");
      resolve();
    }, 1000);
  });
}

function stir() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Խառնում ենք");
      resolve();
    }, 1000);
  });
}

async function makeCoffee(coffeeType) {
  if (coffeeType !== 'espresso' && coffeeType !== 'latte' && coffeeType !== 'cappuccino') {
    console.log("Սխալ: Չկա նման տեսակի սուրճ");
    return;
  }

  console.log(`Պատրաստում ենք ${coffeeType}...`);

  try {
    await placeCup();
    await addWater();
    await addCoffee();
    
    if (coffeeType === 'latte' || coffeeType === 'cappuccino') {
      await addSugar(); 
    }
    
    await stir();
    
    console.log(`${coffeeType} պատրաստված է։`);

  } catch (error) {
    console.error("Սխալ տեղի ունեցավ պատրաստման ընթացքում:", error);
  }
}

makeCoffee('latte'); 

//----------------------------------------------------------------
// test 

// const cont = [
//   "start", "0001", "0002", "0003", "end"
// ]

// async function test(arr) {
//   for (let e of arr) {
//     await new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       resolve (console.log(e) )
//     }, 1000)
//   })
// }}

// test(cont)

const COFFE_APP_ARR = [
  "Պատրաստում ենք ",
  "Տեղադրում ենք բաժակը",
  "Լցնում ենք ջուր",
  "Ավելացնում ենք սուրճ",
  "Ավելացնում ենք շաքարավազ",
  "Խառնում ենք",
  " պատրաստված է։",
];

async function test(num) {
  let currentCoffee = "";
  switch (num) {
    case 1:
      currentCoffee = "espresso";   // առանց շաքարավազ
      break;
    case 2:
      currentCoffee = "latte";
      break;
    case 3:
      currentCoffee = "cappuccino";
      break;
    default:
      console.log("Սխալ: Չկա նման տեսակի սուրճ");
      return;
  }
  for (let i = 0; i < COFFE_APP_ARR.length; i++) {

    if (currentCoffee === "espresso" && i === 4) {
      continue
    }
    await new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve(checker(COFFE_APP_ARR[i], i, currentCoffee, COFFE_APP_ARR));
      }, 1000);
    });
  }
}

function checker(string, index, currentCoffee, arr) {
  if (index === 0) {
    string += currentCoffee
  }
  if (index === arr.length - 1) {
    string = currentCoffee + string
  }
  console.log(string, index)
}

const NUM = 1
test(NUM);