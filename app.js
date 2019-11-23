document.getElementById("all-notes").onclick = () => { deleteNote() };
document.getElementById("submit").onclick = () => { event.preventDefault(), calcNotes() };
document.getElementById("remove-all").onclick = () => { clearClear() };

let newItem = document.getElementById("new-note");

let allNotes = []

let totalNotes = 0

calcNotes = () => {
    totalNotes = allNotes.length + 1;
    pushNewNote();
    addNewNote();
    setNotes();
    eraseText()
}

pushNewNote = () => {
    allNotes.push(newItem.value)
}

pushOldNote = () => {
    for (let i = 0; i < localStorage.length; i++) {
        allNotes.push(localStorage.getItem[i])
    }
    console.log(allNotes.length)
}

eraseText = () => {
    document.getElementById("new-note").value = "";
}

addNewNote = () => localStorage.setItem(totalNotes, newItem.value)

clearAll = () => localStorage.clear();

clearClear = () => {
    clearAll();
    location.reload()
}

setNotes = () => {
    for (let i = 0; i < localStorage.length; i++) {
        myNotes = localStorage.getItem([i + 1]);
    }
    let onScreen = document.getElementById("all-notes");
    let newOnScreen = document.createElement("p");
    newOnScreen.appendChild(document.createTextNode(myNotes));
    let button = document.createElement("button")
    button.id = "app-button"
    button.className = "btn btn-danger"
    button.setAttribute("data-value", allNotes.length)
    button.innerHTML = "Delete"
    newOnScreen.appendChild(button)
    onScreen.appendChild(newOnScreen)
}

getAllNotes = () => {
    for (let i = 0; i < localStorage.length; i++) {
        getAll = localStorage.getItem([i + 1]);
        let allScreen = document.getElementById("all-notes");
        let newAllScreen = document.createElement("p");
        newAllScreen.appendChild(document.createTextNode(getAll));
        let button = document.createElement("button")
        button.id = "app-button"
        button.className = "btn btn-danger"
        button.setAttribute("data-value", i + 1)
        button.innerHTML = "Delete"
        newAllScreen.appendChild(button)
        allScreen.appendChild(newAllScreen)
    }
}

deleteNote = () => {
    let itemDel = document.getElementById("app-button").getAttribute("data-value")
    console.log(itemDel)
}

pushOldNote();
getAllNotes();


// $("#crystal-color1").on("click", function () {
//     var valueCrystal = ($(this).attr("data-crystalvalue"));
//     valueCrystal = parseInt(crystalNumber);
//     roundScore += valueCrystal;
//     console.log("value crystal " + valueCrystal);
//     $("#round-score").text(roundScore);
//     checkIfWon();
// });

// // Inital Crystal Values are 0
// var crystalNumber = 0;
// var crystalNumber2 = 0;
// var crystalNumber3 = 0;
// var crystalNumber4 = 0;

// var scoreTarget = $("#number-to-guess").text(targetScore)

// // Functions
// // Generates new random number each game, to try to keep wide range of potential values, each crystalNumber is calculated at a progressive value
// function generateRandomNumber() {
//     crystalNumber = (Math.floor(Math.random() * 4) + 1);
//     crystalNumber2 = (Math.floor(Math.random() * 7) + 1);
//     crystalNumber3 = (Math.floor(Math.random() * 19) + 1);
//     crystalNumber4 = (Math.floor(Math.random() * 11) + 1);
// };