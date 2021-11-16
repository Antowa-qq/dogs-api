const { Schema, model, Types } = require('mongoose');

const Dog = new Schema({
  breed: { type: Types.ObjectId, ref: 'Breed', required: true },
  image: { type: String, required: true },
  title: { type: String, required: true },
});

module.exports = model('Dog', Dog);
