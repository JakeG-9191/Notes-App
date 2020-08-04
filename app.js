document.getElementById('submit').onclick = () => {
  event.preventDefault();
  calcNotes();
};

document.getElementById('remove-all').onclick = () => {
  clearAll();
};

let newItem = document.getElementById('new-note');

let allNotes = [];

let totalNotes = 0;

calcNotes = () => {
  totalNotes = allNotes.length + 1;
  pushNewNote();
  setNotes();
  eraseText();
  pushOldNote();
};

pushNewNote = () => {
  allNotes.push(newItem.value);
  localStorage.setItem(allNotes.length, allNotes);
  eraseText();
};

pushOldNote = () => {
  console.log(allNotes.length);
};

eraseText = () => {
  document.getElementById('new-note').value = '';
};

clearAll = () => {
  localStorage.clear();
  allNotes.length = 0;
  location.reload();
};

clearThisNote = () => {
  $('.btn-danger').on('click', function () {
    var valueNum = $(this).attr('data-value');
    console.log(valueNum);
    console.log(allNotes);
    // console.log(window.localStorage.getItem(window.localStorage.key(valueNum)));
    allNotes.splice(valueNum - 1, 1);
    // getAllNotes();
    // setNotes();
    // localStorage.removeItem(parseInt(valueNum));
    // location.reload();
  });
};

setNotes = () => {
  for (let i = 0; i < allNotes.length; i++) {
    myNotes = allNotes[i];
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
  for (let i = 1; i < allNotes.length; i++) {
    let allScreen = document.getElementById('all-notes');
    let newAllScreen = document.createElement('p');
    newAllScreen.className = 'my-little-note';
    newAllScreen.appendChild(document.createTextNode(allNotes[i]));
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
