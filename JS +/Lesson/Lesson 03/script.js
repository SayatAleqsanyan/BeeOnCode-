// // document.createElement() տեգի ստեղծում ---------------------------------------
// const newDiv = document.createElement('div')

// // Հատկությունների սահմանում
// newDiv.innerHTML = "Մեր Նոր Դիվը"

// // class
// newDiv.classList.add('new-class')
// newDiv.classList.add('new-class2')
// newDiv.classList.remove('new-class2')

// console.log(newDiv.classList.contains("new-class"));

// // id
// newDiv.id = "d1"
// console.log(newDiv.id);

// // style
// newDiv.style.width = "150px"

// // setAttribute()
// newDiv.setAttribute("my-data", "25")

// // getAttribute()
// console.log(newDiv.getAttribute("my-data"));

// // -----children, parent--------------------------------------------------------------------
// // console.log(document.querySelector("#root").children);

// // ում մեջ ավելացնեմ.appendChild(ինչը) տեգի ավելացում ---------------------------------------
// // document.getElementById("root")
// // document.querySelector("#root")
// // root.appendChild(newDiv)

// // -----children, --------------------------------------------------------------------
// const myTag = document.querySelector("#root").children
// console.log(myTag[0]);

// // parent --------------------------------------------------------------------
// // console.log(d1.parentElement);

// // delete  --------------------------------------------------------------------
// // root.innerHTML = ""
// // d1.remove()

// // focus  --------------------------------------------------------------------
// // i1.focus()

// // document.title = "Լուսացույց"



// const newDiv2 = document.createElement('div')
// newDiv2.id = "d2"

// // ավելացնում է տեգը ծնողի մեջը վերջից
// // root.appendChild(newDiv)
// // root.appendChild(newDiv2)

// // ավելացնում է տեգերը ծնողի մեջը վերջից 
// // root.append(newDiv, newDiv2)

// // ----------------------------------------------------------------------------
// // document.querySelector("#root").prepend(newDiv, newDiv2)


// // ----------------------------------------------------------------------------
// const myFristChild = root.lastChild
// document.querySelector("#root").insertBefore(newDiv2, myFristChild)

// // ----------------------------------------------------------------------------
// root.replaceChild(newDiv2, d3)

// Traffick

function MyCreateElement(tagName, id, classes = []) {
  const tmp = document.createElement(tagName)
  if (id) {
    tmp.id = id
  }
  if (Array.isArray(classes)) {
    tmp.classList.add(...classes)
  } else {
    tmp.className = classes
  }
  return tmp
}

const TLBody = document.createElement('div')
TLBody.id = "TLBody"

const redCirc = document.createElement('div')
redCirc.id = "redCirc"
redCirc.className = "circle"
const yellowCirc = MyCreateElement('div', "yellowCirc", ["circle", "new"])
const greenCirc = MyCreateElement('div', "greenCirc", "circle")
// -----------------------------------------------------------------------
// greenCirc.classList.add("active")
// setTimeout(() => {
//   greenCirc.classList.remove("active")
// }, 1000)
// -----------------------------------------------------------------------
TLBody.append(redCirc, yellowCirc, greenCirc)
root.appendChild(TLBody)