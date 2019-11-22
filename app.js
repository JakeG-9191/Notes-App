let newItem = document.getElementById("new-note");

let allNotes = ["k", "l", "m"]

let totalNotes = 0

calcNotes = () => { 
    totalNotes = allNotes.length + 1;
    pushNewNote();
    addNewNote();
}

pushNewNote = () => {
    allNotes.push(newItem.value)
}

addNewNote = () => localStorage.setItem(totalNotes , newItem.value)

clearAll = () => localStorage.clear();

document.getElementById("submit").onclick = () => { event.preventDefault(), calcNotes() }
document.getElementById("remove-all").onclick = () => { clearAll() }