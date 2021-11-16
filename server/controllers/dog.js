const DogService = require('../services/dog');

const getAllDogs = async (req, res) => {
  try {
    const dogs = await DogService.getAll();

    return res.status(200).json({ dogs });
  } catch (error) {
    return res.status(400).json({});
  }
};

module.exports = { getAllDogs };
