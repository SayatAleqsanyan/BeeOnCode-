
function MyCreateElement(tagName, id, classes = []) {

  const tmp = document.createElement(tagName)

  if (id) { tmp.id = id }

  if (Array.isArray(classes)) 
    { tmp.classList.add(...classes)
  } else {
    tmp.className = classes
  }

  return tmp
}

const TLBody = document.createElement('div')
TLBody.id = "TLBody"
const redCirc = MyCreateElement('div', "redCirc", "circle")
const yellowCirc = MyCreateElement('div', "yellowCirc", "circle")
const greenCirc = MyCreateElement('div', "greenCirc", "circle")

// -----------------------------------------------------------------------




const fTime = (ms) => new Promise((resolve, reject) => setTimeout(resolve, ms))


const fColor = async function (selectedElement, ms) {
  redCirc.classList.remove("active");
  yellowCirc.classList.remove("active");
  greenCirc.classList.remove("active");

  selectedElement.classList.add("active");
  await fTime(ms);
};


// const fColor = async function (id, ms) {
//   id.classList.add("active");
//   await fTime(ms);
//   id.classList.remove("active");
// };

const start = async function () {
  while (true) {
    await fColor(redCirc, 5000);
    await fColor(yellowCirc, 2500);
    await fColor(greenCirc, 5000);
    await fColor(yellowCirc, 2500);
  }
};

// const fRed = async function () { 
//   redCirc.classList.add("active");
//   yellowCirc.classList.remove("active");
//   greenCirc.classList.remove("active");
//   await fTime(5000)
// }

// const fYellow = async function () {
//   yellowCirc.classList.add("active");
//   redCirc.classList.remove("active");
//   greenCirc.classList.remove("active");
//   await fTime(2500)
// }

// const fGreen = async function () { 
//   greenCirc.classList.add("active");
//   redCirc.classList.remove("active");
//   yellowCirc.classList.remove("active");
//   await fTime(5000)
// }

// const start = async function () {
//   while (true) {
//     await fRed()
//     await fYellow()
//     await fGreen()
//     await fYellow()
//   }
// }

start()



// -----------------------------------------------------------------------
TLBody.append(redCirc, yellowCirc, greenCirc)
root.appendChild(TLBody)