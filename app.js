let newItem = document.getElementById("new-note");

let allNotes = []

let totalNotes = 0

calcNotes = () => { 
    totalNotes = allNotes.length + 1;
    pushNewNote();
    addNewNote();
    setNotes();
}

pushNewNote = () => {
    allNotes.push(newItem.value)
}

addNewNote = () => localStorage.setItem(totalNotes , newItem.value)

clearAll = () => localStorage.clear();

clearClear = () => {
    clearAll();
    location.reload()
}

document.getElementById("submit").onclick = () => { event.preventDefault(), calcNotes() }
document.getElementById("remove-all").onclick = () => { clearClear() }

setNotes = () => {
    for (let i = 0; i < localStorage.length; i++) {
        myNotes = localStorage.getItem([i + 1]);
    }
    let onScreen = document.getElementById("all-notes");
    let newOnScreen = document.createElement("p");
    newOnScreen.appendChild(document.createTextNode(myNotes));
    onScreen.appendChild(newOnScreen)
}

getAllNotes = () => {
    for (let i = 0; i < localStorage.length; i++) {
        getAll = localStorage.getItem([i + 1]);
        let allScreen = document.getElementById("all-notes");
        let newAllScreen = document.createElement("p");
        newAllScreen.appendChild(document.createTextNode(getAll));
        allScreen.appendChild(newAllScreen)
    }
}

getAllNotes();
