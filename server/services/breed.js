const { Breed } = require('../models');

const getAll = async () => {
  const dogs = await Breed.find();
  return dogs;
};

module.exports = { getAll };
