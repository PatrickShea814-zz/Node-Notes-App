
const fs = require('fs');
const _ = require('lodash'); //lodash is commonly named as _ rather than lodash.
const yargs = require('yargs'); // Parses, takes progress.argv and parses in background.

const notes = require('./notes.js');

//process.argv grabs command line arguments.
// JSON JavaScript Object Notation

const titleOptions = {
    title: {
        describe: 'title',
        demand: true, // making this a required argument.
        alias: t // allows to enter data as t rather than title.
    }
};
const bodyOptions = {
    body: {
        describe: 'Details of your note.',
        demand: true,
        alias: b
    }
};

const argv = yargs
    // Command User will enter, what the command does, object that specifies what arguments are required.
    .commands('add', 'Add A New Note.', {
        title: titleOptions,
        body: bodyOptions
    })
    .command('list', 'List all notes.')
    .command('read', 'Read a note.', {
        title: titleOptions,
    })
    .command('remove', 'Remove a note.', {
        title: titleOptions,
    })
    .help() // Set ups yargs to provide useful information when using this application.
    .argv // makes Process.argv function as Process.yargs.argv

var command = argv._[0]; // Process.argv already has 0, 1 index built in. 0 is bin 1 is path.

if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    // because the return note in the if statement is returned, passed as the statement check.
    if (note) {
        console.log('Note Created.');
        notes.logNote(note);
    } else {
        console.log('Note title taken.')
    }
}
else if (command === 'list') {
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.forEach(() => {
        notes.logNote(note);
    });
}
else if (command === 'read') {
    var note = notes.getNote(argv.title);
    if (note) {
        console.log('Note found.');
        notes.logNote(note);
    } else {
        console.log('Note not found.');
    };
}
else if (command === 'remove') {
    var noteRemoved = notes.removeNote(argv.title);
    // Turnary Operator Format
    // ========= Condition ? Truthy Expression : Falsy Expression
    var message = noteRemoved ? 'Note was removed.' : 'Note not found.';
    console.log(message);
}
else {
    console.log('Invalid Command');
};

