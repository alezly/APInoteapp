const { Notes, NotesSchema } = require('./notes_model');

function setupModels(sequelize) {
    Notes.init(NotesSchema, Notes.config(sequelize));
}

module.exports = setupModels;
