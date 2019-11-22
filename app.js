let newItem = document.getElementById("new-note");

let allNotes = []

let totalNotes = 0

calcNotes = () => { 
    totalNotes = allNotes.length + 1;
    pushNewNote();
    addNewNote();
    allAppend();
}

pushNewNote = () => {
    allNotes.push(newItem.value)
}

addNewNote = () => localStorage.setItem(totalNotes , newItem.value)

clearAll = () => localStorage.clear();

clearSection = () => document.getElementById("all-notes").value("")

clearClear = () => {
    clearAll();
    clearSection();
}

document.getElementById("submit").onclick = () => { event.preventDefault(), calcNotes() }
document.getElementById("remove-all").onclick = () => { clearClear() }

const allAppend = () => {
    let node = document.getElementById("all-notes");
    let newNode = document.createElement("p");
    newNode.appendChild(document.createTextNode(newItem.value
    ));
    node.appendChild(newNode);
}