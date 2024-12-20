const newTag = function (tegNem, idN, text = "", ...classN) {
  const nam = document.createElement(tegNem);
  classN.length ? nam.classList.add(...classN) : null;
  idN ? (nam.id = idN) : null, text ? (nam.innerHTML = text) : null;
  return nam; 
};

const allDiv = document.querySelector('#allDiv')
const allBtn = document.querySelector('#addBtn')
const saveBtn = document.querySelector('#save')
const closeBtn = document.querySelector('#closedB')
const bloc = document.querySelector('#comitCont')
const blocCantent = document.querySelector('#comit')
const story = document.querySelector('#story')


allBtn.addEventListener('click', (e) => {
  bloc.style.display = 'flex'
  story.value = ""
})

closeBtn.addEventListener('click', (e) => {
  bloc.style.display = 'none'
  
})

saveBtn.addEventListener('click', (e) => {
  if(story.value !== "") {
    const newBlock = document.createElement('div');
    newBlock.classList.add('statusBlock');
    
    newBlock.innerHTML = `
      <h3>user status <button class="closeBtn">X</button></h3>
      <button class="toggleCommentsBtn">Show Comments</button>
      <ul class="commentsList"></ul>
      <input type="text" class="commentInput" placeholder="Write a comment">
      <button class="addCommentBtn">Add Comment</button>
    `;

    allDiv.prepend(newBlock);

    const closeBtn2 = newBlock.querySelector('.closeBtn');
    closeBtn2.addEventListener('click', () => {
      allDiv.removeChild(newBlock)
    });

    const commentsBtn = newBlock.querySelector('.toggleCommentsBtn');
    const commentsList = newBlock.querySelector('.commentsList');

    commentsBtn.addEventListener('click', () => {
        commentsList.style.display = commentsList.style.display === 'none' || commentsList.style.display === '' ? 'block'  : 'none'; 
    });

    const addCommentBtn = newBlock.querySelector('.addCommentBtn');
    const commentInput = newBlock.querySelector('.commentInput');

    addCommentBtn.addEventListener('click', () => {
      const newComment = commentInput.value.trim()

      if (newComment) {
          const newLi = document.createElement('li')
          newLi.textContent = newComment
          commentsList.appendChild(newLi)
          commentInput.value = ''
      } 
});

  }
  bloc.style.display = 'none'
})

window.addEventListener('click', (e) => {
  if (e.target === comitCont) {
      comitCont.style.display = 'none'
      
  }
});

