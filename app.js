document.getElementById('submit').onclick = () => {
  event.preventDefault();
  calcNotes();
};
document.getElementById('remove-all').onclick = () => {
  clearClear();
};

let newItem = document.getElementById('new-note');

let allNotes = [];

let totalNotes = 0;

calcNotes = () => {
  totalNotes = allNotes.length + 1;
  pushNewNote();
  addNewNote();
  setNotes();
  eraseText();
};

pushNewNote = () => {
  allNotes.push(newItem.value);
};

pushOldNote = () => {
  for (let i = 0; i < localStorage.length; i++) {
    allNotes.push(localStorage.getItem[i]);
  }
  console.log(allNotes.length);
};

eraseText = () => {
  document.getElementById('new-note').value = '';
};

addNewNote = () => localStorage.setItem(totalNotes, newItem.value || '');

clearAll = () => localStorage.clear();

clearClear = () => {
  clearAll();
  location.reload();
};

clearThisNote = () => {
  $('.btn-danger').on('click', function () {
    var valueNum = $(this).attr('data-value');
    console.log(valueNum);
    // console.log(window.localStorage.getItem(window.localStorage.key(valueNum)));
    allNotes.splice(valueNum - 1, 1);
    // localStorage.removeItem(parseInt(valueNum));
    // location.reload();
    getAllNotes();
  });
};

setNotes = () => {
  for (let i = 0; i < localStorage.length; i++) {
    myNotes = localStorage.getItem([i + 1]);
  }
  let onScreen = document.getElementById('all-notes');
  let newOnScreen = document.createElement('p');
  newOnScreen.className = 'my-little-note';
  newOnScreen.appendChild(document.createTextNode(myNotes));
  let button = document.createElement('button');
  // button.id = `app-button-${localStorage.length}`;
  button.className = 'btn btn-danger';
  button.setAttribute('data-value', allNotes.length);
  button.onclick = clearThisNote();
  button.innerHTML = 'Delete';
  newOnScreen.appendChild(button);
  onScreen.appendChild(newOnScreen);
};

getAllNotes = () => {
  for (let i = 1; i < localStorage.length; i++) {
    getAll = localStorage.getItem([i]);
    let allScreen = document.getElementById('all-notes');
    let newAllScreen = document.createElement('p');
    newAllScreen.className = 'my-little-note';
    newAllScreen.appendChild(document.createTextNode(getAll));
    let button = document.createElement('button');
    // button.id = 'app-button';
    button.className = 'btn btn-danger';
    button.setAttribute('data-value', i);
    button.onclick = clearThisNote();
    button.innerHTML = 'Delete';
    newAllScreen.appendChild(button);
    allScreen.appendChild(newAllScreen);
  }
};

pushOldNote();
getAllNotes();
