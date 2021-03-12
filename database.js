const mongooseClient = require("mongoose");

mongooseClient.connect("mongodb://localhost/notepadDB", {useNewUrlParser: true, useUnifiedTopology: ture},(err)=> {
    if(err) console.log(err);
});

const NotesSchema = mongooseClient.Schema({
    title: String,
    description: String,
})

const Notes = mongooseClient.model("Notes", NotesSchema);

modeule.exports = Notes;