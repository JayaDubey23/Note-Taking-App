**Note-Taking App Documentation
**Overview**
This documentation provides an overview and explanation of the Note-Taking App, including its functionality, structure, and usage. The app allows users to create, edit, and delete notes. Notes are stored in the browser's local storage, enabling persistence across page refreshes.

Project Structure
HTML (index.html)
The HTML file defines the structure of the note-taking app.
Key Elements:
div.container: Contains the main components of the app.
h1: Displays the title of the app.
button.btn: Allows users to create new notes.
div.notes-container: Holds all the created notes.
CSS (style.css)
The CSS file provides styles for the app.
Design Highlights:
Gradient background and rounded buttons for a modern look.
Media queries ensure responsiveness for different screen sizes.
Each note (.input-box) has a defined width, height, and delete icon.
JavaScript (script.js)
The JavaScript file contains the logic for creating, editing, deleting, and persisting notes.

Features
1. Create Notes
Users can create new notes by clicking the "Create Notes" button.
Each note is editable and has a delete button.
2. Edit Notes
Notes are editable inline with contenteditable.
Changes to notes are saved automatically to local storage.
3. Delete Notes
Each note has a delete icon (trash bin) that allows users to remove the note.
4. Persistence
Notes are stored in the browser's localStorage.
Upon page reload, saved notes are reloaded automatically.
Usage Instructions
Open the app in a browser.
Click "Create Notes" to add a new note.
Edit notes inline and changes will be saved automatically.
Click the delete icon to remove notes.
Refresh the page to see persisted notes.

