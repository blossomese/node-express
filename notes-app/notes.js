
const fs = require("fs");
const { title } = require("process");


const addNote =  (title, body) => {
  const notes = loadNotes();
const duplicateNote = notes.find((note) => note.title === title)
if(!duplicateNote) {
  notes.push({
    title: title,
    body: body,
  });
  savedNotes(notes)
  console.log('New notes added');
} else{
  console.log('Note title taken');
}
};


const readNotes = (title) => {
  const notes = loadNotes()
  const note = notes.find((note) => note.title === title)
 if(note){
console.log(`${note.title} ${note.body}`);
 }  else {
  console.log(`Note not found`);
 }
};


const removeNote = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter((note) => note.title !== title)
    savedNotes(notesToKeep)
}


const listNotes = ()=> {
  const notes = loadNotes()
console.log(`Your note`);
notes.forEach((note) => {
  console.log(note.title);
});
}

const savedNotes = (notes) => {
const dataJSON = JSON.stringify(notes)
fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};




module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNotes: readNotes
};
