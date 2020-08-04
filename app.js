document.getElementById('submit').onclick = () => {
  event.preventDefault();
  calcNotes();
};

document.getElementById('remove-all').onclick = () => {
  clearAll();
};

let newItem = document.getElementById('new-note');

let allNotes = [];

calcNotes = () => {
  pushNewNote();
  setNotes();
  eraseText();
};

pushNewNote = () => {
  allNotes.push(newItem.value);
  localStorage.setItem(1, allNotes);
  eraseText();
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
    const valueNum = $(this).attr('data-value');
    console.log(valueNum);
    // allNotes.splice(valueNum, 1);
  });
};

let noteTally;

setNotes = () => {
  noteTally = 0;
  $('#all-notes').empty();
  allNotes.map((note) => {
    let onScreen = document.getElementById('all-notes');
    let newOnScreen = document.createElement('p');
    newOnScreen.className = 'my-little-note';
    newOnScreen.appendChild(document.createTextNode(note));
    console.log(note);
    let button = document.createElement('button');
    button.className = 'btn btn-danger';
    button.setAttribute('data-value', noteTally);
    button.innerHTML = 'Delete';
    button.onclick = clearThisNote();
    newOnScreen.appendChild(button);
    onScreen.appendChild(newOnScreen);
    noteTally++;
  });
};

getAllNotes = () => {
  allNotes = localStorage.getItem(1) ? localStorage.getItem(1).split(',') : [];
  for (let i = 0; i < allNotes.length; i++) {
    let allScreen = document.getElementById('all-notes');
    let newAllScreen = document.createElement('p');
    newAllScreen.className = 'my-little-note';
    newAllScreen.appendChild(document.createTextNode(allNotes[i]));
    let button = document.createElement('button');
    button.className = 'btn btn-danger';
    button.setAttribute('data-value', i);
    button.innerHTML = 'Delete';
    button.onclick = clearThisNote();
    newAllScreen.appendChild(button);
    allScreen.appendChild(newAllScreen);
  }
};

getAllNotes();
