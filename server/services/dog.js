const { Dog } = require('../models');

const getAll = async (page, amount, title, breed) => {
  const dogs = await Dog.find({
    $or: [{ breed }, { title: { $regex: `.*${title}.*` } }],
  })
    .populate('breed')
    .skip(page * amount)
    .limit(amount);
  return dogs;
};

module.exports = { getAll };
