const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

// Load notes from localStorage on page load
function showNotes() {
    if (localStorage.getItem("notes")) {
        notesContainer.innerHTML = localStorage.getItem("notes");
    }
}
showNotes();

// Save notes to localStorage
function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

// Create a new note
createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "delete.png";
    img.alt = "Delete Note";
    notesContainer.appendChild(inputBox).appendChild(img);
    updateStorage();
});

// Handle delete and edit events
notesContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove(); // Remove the note
        updateStorage(); // Update localStorage
    } else if (e.target.tagName === "P") {
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function () {
                updateStorage(); // Update localStorage when editing
            };
        });
    }
});

// Prevent the default Enter key behavior
document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
});
