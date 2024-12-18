// const str = `
// User0:
//     Login: user1
//     Name: Ani Sargsyan
//     Age: 28
//     Phone: 374 93 648663

// User1:
//     Login: user1
//     Name: Ani Sargsyan
//     Age: 28
//     Phone: +374 93 648663

// User2:
//     Login: user1
//     Name: Ani Sargsyan
//     Age: 28
//     Phone: 93 648663

// User3:
//     Login: user1
//     Name: Ani Sargsyan
//     Age: 28
//     Phone: 93 64 86 63

// User4:
//     Login: user1
//     Name: Ani Sargsyan
//     Age: 28
//     Phone: 93 64-86-63

// User5:
//     Login: user1
//     Name: Ani Sargsyan
//     Age: 28
//     Phone: 093 64-86-63

// User6:
//     Login: user2
//     Name: Karen Hakobyan
//     Age: 35
//     Phone: (093) 64-86-63

// User7:
//     Login: user3
//     Name: Lusine Harutyunyan
//     Age: 22
//     Phone: +374(93)648663

// User8:
//     Login: user4
//     Name: Hayk Grigoryan
//     Age: 40
//     Phone: 093 64 86 63`;

// const regex = 
// `

// (
// \+?
// \d{1,3}
// \s?
// )?

// \(?
// \d{2,3}
// \)?
// \s?
// \d{2}
// (\s|\-)?
// \d{2}
// (\s|\-)?
// \d{2}
// `
// console.log(str.match(regex));



const ul1 = document.querySelector('ul')


// parentElement - ծնող տեգը

// children - դուստր տեգը

// childNodes - բոլոր դուստր տեգերը

// firstElementChild
// lastElementChild


// console.log(ul1.parentElement.parentElement.children[1].children[0].style.backgroundColor = "red");



// --------------------------------------------------------------------
document.addEventListener("mousemove", function(event) {
    hip.innerText = `X: ${event.clientX} Y: ${event.clientY}`
    
    const sharik = this.createElement("div")
    sharik.className = "sharik"

    sharik.style.top = `${event.clientY}px`
    sharik.style.left = `${event.clientX}px`

    document.body.appendChild(sharik)

    setTimeout(() => {
        sharik.remove()
    }, 1000)
})