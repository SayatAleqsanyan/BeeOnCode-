
// parentElement - ծնող տեգը
// children - դուստր տեգը
// childNodes - բոլոր դուստր տեգերը

// firstElementChild
// lastElementChild

// console.log(ul1.parentElement.parentElement.children[1].children[0].style.backgroundColor = "red");

// --------------------------------------------------------------------

function color() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256); 
    let b = Math.floor(Math.random() * 256); 
    return `rgb(${r}, ${g}, ${b})`;
}

const ul1 = document.querySelector('ul')

document.addEventListener("mousemove", function(event) {
    hip.innerText = `X: ${event.clientX} Y: ${event.clientY}`
    
    const sharik = this.createElement("div")
    sharik.className = "sharik"

    sharik.style.top = `${event.clientY}px`
    sharik.style.left = `${event.clientX}px`
    

    sharik.style.backgroundColor = color()

    document.body.appendChild(sharik)

    setTimeout(() => {
        sharik.remove()
    }, 4000)
})


