const DogService = require('../services/dog');

const getAllDogs = async (req, res) => {
  try {
    const {
      page = 1, amount = 10, title = '', breed = null,
    } = req.query;
    const dogs = await DogService.getAll(Number(page - 1), Number(amount), title, breed);

    return res.status(200).json({
      message: 'Dog list successfully received!',
      payload: { dogs },
    });
  } catch (error) {
    return res.status(400).json({
      message: 'Unknown error while get dog list',
      error,
    });
  }
};

module.exports = { getAllDogs };
