let newItem = document.getElementById("new-note");

let noteNum = 0;

myNotes = () => {
    for (let i = 0; i < 25; i++) {
        noteNum = noteNum + i
        noteNum.push(i)
    }
}

addNewNote = () => localStorage.setItem(noteNum, newItem.value);

clearAll = () => localStorage.clear();


document.getElementById("submit").onclick = () => {event.preventDefault(), addNewNote()}
document.getElementById("remove-all").onclick = () => {clearAll()}