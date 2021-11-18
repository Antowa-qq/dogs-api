const DogService = require('../services/dog');

const getAllDogs = async (req, res) => {
  try {
    const {
      page = 1, amount = 5, title = '', breed = null,
    } = req.query;

    const query = {};
    const queryValues = [];

    if (title !== '') {
      queryValues.push({ title: { $regex: `.*${title}.*` } });
    }

    if (breed !== null && breed !== 'null') {
      queryValues.push({ breed });
    }

    if (queryValues.length > 0) {
      query.$or = queryValues;
    }

    const { dogs, countAll } = await DogService.getAll(Number(page - 1), Number(amount), query);

    return res.status(200).json({
      message: 'Dog list successfully received!',
      payload: { dogs, countAll },
    });
  } catch (error) {
    return res.status(400).json({
      message: 'Unknown error while get dog list',
      error,
    });
  }
};

module.exports = { getAllDogs };
