const BreedService = require('../services/breed');

var x = 'hello';

const getAllBreeds = async (req, res) => {
  try {
    const breeds = await BreedService.getAll();

    return res.status(200).json({
      message: 'Breeds list successfully received!',
      payload: { breeds },
    });
  } catch (error) {
    return res.status(400).json({
      message: 'Unknown error while get breeds list',
      error,
    });
  }
};

module.exports = { getAllBreeds };
