const { Dog } = require('../models');

const getAll = async (page, amount, title, breed) => {
  const dogs = await Dog.find({
    $or: [{ breed }, { title: { $regex: `.*${title}.*` } }],
  })
    .populate('breed')
    .skip(page * amount)
    .limit(amount);
  const countAll = await Dog.count();
  return { dogs, countAll };
};

module.exports = { getAll };
