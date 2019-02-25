const fs = require('fs'); //  Core Node Module

var fetchNotes = () => {
    // Try-Catch statement for if the notes-data.json file did not yet exist
    try {
        // Get JSON string of notes from notes-data.json file.
        var notesString = fs.readFileSync('notes-data.json')
        // Parse existing notes back into JS Objects.
        return JSON.parse(notesString);
    } catch (error) {
        return [];
    }
}

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));

}

var addNote = (title, body) => {
    // Create Static Variables.
    var notes = fetchNotes();
    var note = {
        title,
        body
    };
    //filter array method that uses a callback taking argument of the note object to check against code inside.
    var duplicateNotes = notes.filter((note) => {
        return note.title === title;
    });
    // If 0 then there are not duplicates as the duplicateNotes array is returned empty.
    if (duplicateNotes.length === 0) {
        notes.push(note); // push new note to notes array.
        saveNotes(notes); // pass in notes array defined above.
        return note;
    };
};

var getAll = () => {
    return fetchNotes();
};

var getNote = (title) => {
    // 1. Fetch Notes
    var notes = fetchNotes();
    // 2. Filter Notes which match the Title that equal Title argument passed.
    // Will return either no note, or the matching note. 
    var filteredNotes = notes.filter((note) => {
        return note.title === title;
    });
    return filteredNotes[0];
};

var removeNote = (title) => {
    // 1. Fetch Notes
    var notes = fetchNotes();
    // 2. Filter Out Notes - removing one with title argument 
    // Returns all notes in the notes file that do not contain the title of the note we passed in.
    var filteredNotes = notes.filter((note) => {
        return note.title !== title;
    });
    // 3. Save New Notes Array
    // Passes in the new notes array, which is an array or notes less the note passed in.
    saveNotes(filteredNotes);

    return notes.length !== filteredNotes.length;
};

var logNote = (note) => {
    console.log('======');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
};
