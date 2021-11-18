const { Dog } = require('../models');

const getAll = async (page, amount, query) => {
  const dogs = await Dog.find(query)
    .populate('breed')
    .skip(page * amount)
    .limit(amount);

  const countAll = await Dog.find(query).count();

  return { dogs, countAll };
};

module.exports = { getAll };
