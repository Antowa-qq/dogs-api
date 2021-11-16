const { Schema, model } = require('mongoose');

const Breed = new Schema({
  title: { type: String, required: true },
});

module.exports = model('Breed', Breed);
