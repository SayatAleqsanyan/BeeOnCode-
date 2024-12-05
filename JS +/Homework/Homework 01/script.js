const div = document.querySelectorAll("div"); 

function colorRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256); 
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`; 
}

function px(a = 1) {
  return `${Math.floor(Math.random() * 100 * a) + 100}px`;
}



setInterval(() => {
  div.forEach(function(element) {
    element.innerHTML = "text"
    element.style.color = colorRGB();
    element.style.backgroundColor = colorRGB();
    element.style.width = "300px"
    element.style.height = "300px"
    element.style.fontSize = px()
});},1000)

