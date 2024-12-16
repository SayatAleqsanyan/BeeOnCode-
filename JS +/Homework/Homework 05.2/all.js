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

  const resultContainer = document.createElement("div");
  resultContainer.classList.add("result-container");
  div1.appendChild(resultContainer);  

  const header = document.createElement("h3");
  header.textContent = `Սուրճի պատրաստում՝ ${currentCoffee}`;
  resultContainer.appendChild(header);

  for (let i = 0; i < COFFE_APP_ARR.length; i++) {
    if (currentCoffee === "espresso" && i === 4) {
      continue; // Espresso-ն չի ունենա շաքարավազի ավելացում
    }

    await new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve(checker(COFFE_APP_ARR[i], i, currentCoffee, COFFE_APP_ARR, resultContainer));
      }, 1000);
    });
  }

  const readyButton = document.createElement("button");
  readyButton.textContent = "Պատրաստ է";
  resultContainer.appendChild(readyButton);

  readyButton.addEventListener("click", function () {
    alert("Ստացել եք պատվերը!");
    
    readyButton.disabled = true; 

    setTimeout(() => {
      resultContainer.remove(); 
    }, 5000);
  });
}

function checker(string, index, currentCoffee, arr, resultContainer) {
  if (index === 0) {
    string += currentCoffee;
  }
  if (index === arr.length - 1) {
    string = currentCoffee + string;
  }

  const p = document.createElement("p");
  p.textContent = string;
  resultContainer.appendChild(p);

}

// ---------------------------------------------------------------------------------------------------------------

const myfunc = function (tegNem, idN, classN, text = "") {
  const nam = document.createElement(tegNem);  
  nam.className = classN; 
  nam.id = idN;
  nam.textContent = text;
  return nam;
}

const div0 = document.querySelector("#root");

const button1 = myfunc("button", "button1", "button-class", "espresso");
const button2 = myfunc("button", "button2", "button-class", "latte");
const button3 = myfunc("button", "button3", "button-class", "cappuccino");
const div1 = myfunc("div", "div1", "divs");

div0.append(button1, button2, button3, div1);

button1.addEventListener("click", function () { 
  test(1); 
});

button2.addEventListener("click", function () {
  test(2);
});

button3.addEventListener("click", function () {
  test(3); 
});
