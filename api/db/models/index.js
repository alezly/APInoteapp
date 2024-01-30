const { Person, PersonSchema } = require('./notes_model');

function setupModels(sequelize) {
    Person.init(PersonSchema, Person.config(sequelize));
}

module.exports = setupModels;
