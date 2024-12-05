// Առաջադրանք 1։
// Ունենք անուններով լի զանգված՝
// let messages = ["ani", "anna", "aram", "mark"];
// Ցուցադրել բոլոր անունները կայքի էջում, օգտագործելով ցիկլ և
// innerHTML հատկությունը։ innerHTML հատկությունը թույլ է
// տալիս ավելացնել տեգում մեկ այլ տեգեր, օրինակ՝
// ...innerHTML += `<div class="․․․">Ani</div>`

let messages = ["ani", "anna", "aram", "mark"];

const div1 = document.querySelector("#div1")

for(i = 0; i < messages.length; i++) {
    div1.innerHTML += `<div class="A1"> ${messages[i]} </div>`
}

// Առաջադրանք 2։
// Ենթադրենք որևէ մարդ ցանկանում է գրանցվել դասընթացների
// և տեսնել, թե որքան կարժենա իր ընտրած դասընթացները։
// Երբ սեղմում է “մասնակցել դասընթացին” կոճակի վրա
// անհրաժեշտ է հաշվել և ասել, թե որքան գումար պետք է վճարի
// ընտրված դասընթացին X անգամ մասնակցելու դեպքում:
// Օրինակ
// Ենթադրենք ընտրել է HTML/CSS, Java, և Ալգորիթմների
// տեսություն եռյակը
// Դիցուք դրանցից յուրաքանչյուրի մեկ դասի արժեքը
// համապատասխանաբար կազմում է 4200, 5700, 12500 դրամ
// Ենթադրենք մարդը ընտրել է դասընթացի 12
// մասնակցություն:
// Այս դեպքում նա պետք է վճարի 12*4200 + 12*5700 + 12*12500
// Այսինքն՝ 12 * (4200 + 5700 +12500) = 268800 դրամ
// Ընտրելուց հետո օգտատերը պետք է քլիկ անի հաստատել
// կոճակին։
// Քլիկից հետո էկրանին ցույց տալ՝ “Դուք պետք է վճարեք X
// դրամ”, որտեղ X -ը պետք է լինի գումարի հաշվարկման
// արդյունքը
// Եթե դասընթացի մասնակցության գումարը գերազանցում է
// 300,000 դրամը, ապա անհրաժեշտ է ցույց տալ հետեւյալը
// Դուք պետք է վճարեք X դրամ, սակայն ստանում եք 40% զեղչ եւ
// այժմ կարող եք վճարել (x-40%) դրամ



document.getElementById("calculate-button").addEventListener("click", function() {
  
  const htmlCssPrice = 4200;
  const javaPrice = 5700;
  const algorithmsPrice = 12500;

  const isHtmlCssSelected = document.getElementById("html-css").checked;
  const isJavaSelected = document.getElementById("java").checked;
  const isAlgorithmsSelected = document.getElementById("algorithms").checked;

  const sessions = parseInt(document.getElementById("sessions").value);

  let totalAmount = 0;
  if (isHtmlCssSelected) totalAmount += htmlCssPrice * sessions;
  if (isJavaSelected) totalAmount += javaPrice * sessions;
  if (isAlgorithmsSelected) totalAmount += algorithmsPrice * sessions;

  let finalAmount = totalAmount;

  if (finalAmount > 300000) {
      finalAmount = finalAmount - (finalAmount * 0.40);
      document.getElementById("result").innerHTML = `Դուք պետք է վճարեք ${totalAmount} դրամ, սակայն ստանում եք 40% զեղչ եւ այժմ կարող եք վճարել ${finalAmount.toFixed(0)} դրամ`;
  } else {
      document.getElementById("result").innerHTML = `Դուք պետք է վճարեք ${finalAmount} դրամ`;
  }
});