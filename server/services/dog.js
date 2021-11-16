const { Dog } = require('../models');

const getAll = async () => {
  const dogs = await Dog.find();
  return dogs;
};

module.exports = { getAll };
