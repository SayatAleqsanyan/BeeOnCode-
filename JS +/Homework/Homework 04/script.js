function color() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256); 
  let b = Math.floor(Math.random() * 256); 
  return `rgb(${r}, ${g}, ${b})`;
}

function cordinats(classes) {
  var x = Math.floor(Math.random() * (window.innerWidth - 50)); 
  var y = Math.floor(Math.random() * (window.innerHeight - 50));

  classes.style.left = `${x}px`;
  classes.style.top = `${y}px`;
} 

function MyCreateElement(tagName, id, classes, text) {
    const tmp = document.createElement(tagName);
  
    if (id) tmp.id = id;
  
    if (Array.isArray(classes)) {
      tmp.classList.add(...classes); 
    } else {
      tmp.className = classes; 
    }

    tmp.textContent = text;
  
    return tmp;
}

const divz = []

const container = document.getElementById('container');

const button1 = MyCreateElement('button', 'NewFrames', 'button', 'New Frames');
const button2 = MyCreateElement('button', 'NewColors', 'button', 'New Colors');
const button3 = MyCreateElement('button', 'DeleteALL', 'button', 'Delete ALL');

const form = document.createElement('div');
form.style.position = 'absolute'; form.style.display = 'none';  
container.appendChild(form);

form.append(button1, button2, button3);

document.addEventListener('click', function(e) {
  if (form.contains(e.target)) {
    return;
  }
  form.style.display = 'none'; 
});

document.addEventListener('contextmenu', function(e) {
  e.preventDefault(); 

  if (form.style.display === 'block') {
    form.style.display = 'none';
  } else {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    form.style.left = `${mouseX}px`;
    form.style.top = `${mouseY}px`;
    form.style.display = 'block'; 
  }
});

button1.addEventListener('click', function() {
  for (let i = 0; i < 20; i++) {
    divz[i] = MyCreateElement('div', undefined, 'blocksD')
    divz[i].style.backgroundColor = color()
    cordinats(divz[i]) 
  
    container.appendChild(divz[i]);
  }
});

button2.addEventListener('click', function() {
  document.querySelectorAll(".blocksD").forEach(function(block) {
    block.style.backgroundColor = color(); 
  });
});

button3.addEventListener('click', function() {
  document.querySelectorAll(".blocksD").forEach(function(block) {
    block.remove();
  });
});

