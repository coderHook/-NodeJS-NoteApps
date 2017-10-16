console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOptions = {
  describe: 'Title of note',
  demand: true,
  alias: 't'
};
const bodyOptions = {
  describe: 'The body of the note',
  demand: true,
  alias: 'b'
};

const argv = yargs
  .command('add', 'Add a new note', {
    title: titleOptions,
    body: bodyOptions
  })
  .command('list', 'List all notes')
  .command('read', 'Read a note', {
    title: titleOptions,
    body: bodyOptions
  })
  .command('remove', 'Remove note', {
    title: titleOptions
  })
  .help()
  .argv;
var command = process.argv[2];
console.log('Command ', command);
console.log('Yargs ', argv);

if (command === 'add'){
  console.log('Adding a new Note...');
  var note = notes.addNote(argv.title, argv.body);
  if(note){console.log('Created Note ', note.title);}
  else { console.log('Note not Created');}
  console.log(note);
} else if ( command === 'list'){
  console.log('Listing all Notes.')
  var allNotes = notes.getAll();
  console.log('Printing ${allNotes.length notes.')
  allNotes.forEach((note) => notes.logNote(note));
} else if (command === 'read' ){
  console.log('Reading Note');
  var note = notes.getNote(argv.title);
  var message = note.length === 0 ? 'Note not Found' : 'Note found';
  console.log(message);
  notes.logNote(note[0]);
} else if(command === 'remove') {
  console.log('Removing Note');
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? 'Note was removed' : 'Any note was removed';
  console.log(message);

} else {
  console.log("Command not Recognized");
}
