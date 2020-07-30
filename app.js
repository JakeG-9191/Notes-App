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

// clearThisNote = (num) => {
//   console.log('ble');

//   localStorage.removeItem(num);
//   location.reload();
// };

// let result = (clearThisNote = (n) => {
//   console.log(n);
//   clearThisNote(n);
// });

setNotes = () => {
  for (let i = 0; i < localStorage.length; i++) {
    myNotes = localStorage.getItem([i + 1]);
  }
  let onScreen = document.getElementById('all-notes');
  let newOnScreen = document.createElement('p');
  // newOnScreen.setAttribute('datavalue', allNotes.length);
  // newOnScreen.setAttribute('value', allNotes.length);
  newOnScreen.id = 'my-little-note';
  newOnScreen.appendChild(document.createTextNode(myNotes));
  let button = document.createElement('button');
  button.id = `app-button`;
  button.className = 'btn btn-danger';
  button.setAttribute('value', allNotes.length);
  // button.onclick = result;
  button.innerHTML = 'Delete';
  newOnScreen.appendChild(button);
  onScreen.appendChild(newOnScreen);
};

getAllNotes = () => {
  for (let i = 0; i < localStorage.length; i++) {
    getAll = localStorage.getItem([i + 1]);
    let allScreen = document.getElementById('all-notes');
    let newAllScreen = document.createElement('p');
    newAllScreen.setAttribute('datavalue', i + 1);
    newAllScreen.id = 'my-little-note';
    newAllScreen.appendChild(document.createTextNode(getAll));
    let button = document.createElement('button');
    button.id = 'app-button';
    button.className = 'btn btn-danger';
    button.setAttribute('data-value', i + 1);
    // button.onclick = clearThisNote;
    button.innerHTML = 'Delete';
    newAllScreen.appendChild(button);
    allScreen.appendChild(newAllScreen);
  }
};

pushOldNote();
getAllNotes();
