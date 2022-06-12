const mongoose = require("mongoose");

const noteSchema = mongoose.Schema({});
const Note = mongoose.model("Note", noteSchema);
module.exports = Note;
