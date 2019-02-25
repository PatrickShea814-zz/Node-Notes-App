// var obj = {
//     name: 'Patrick'
// };

// // Takes object, returns JSON stringified version, result stored in stringObj is a string and no longer an object.
// var stringObj = JSON.stringify(obj); 
// console.log(typeof stringObj); // Testing type of var stringObj
// console.log(stringObj);


var personString = '{"name": "Patrick", "age": 29}'; //JSON uses double quotes inside of itself
var person = JSON.parse(personString); // personString is JSON string, person converts back into original object form.
console.log(typeof person); // Prove that it is converted back into a Object.
console.log(person); // See that it is in object form.

// ================================================================================
const fs = require('fs');

var originalNote = {
    title: 'Some title',
    body: 'Some body'
};

// 1. originalNoteString- Set to JSON value of object originalNote.
var originalNoteString = JSON.stringify(originalNote); // Convert the object into a JSON string and write to fs.
fs.writeFileSync('notes.json', originalNoteString);

console.log(typeof originalNoteString);
console.log(originalNoteString);

var noteString = fs.readFileSync('notes.json');
// 2. note
var note = JSON.parse(noteString); //String JSON and convert the read note back into an JS object.

console.log(typeof note);
console.log(note.title);