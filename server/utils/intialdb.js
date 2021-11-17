const axios = require('axios');
const { Dog, Breed } = require('../models');

const NUMBER_RECORDS = 100;
const API_DOGS_URL = 'https://dog.ceo/api/breeds/image/random';
const BREEDS = {};

const parseMessage = (message) => {
  const s = message.split('/');
  const breed = s[4];
  BREEDS[breed] = breed;
  return { image: message, breed, title: s[5].split('.').shift() };
};

const fetchData = async () => {
  const {
    data: { message },
  } = await axios.get(API_DOGS_URL);
  return parseMessage(message);
};

const initial = async (req, res) => {
  await Dog.collection.drop();
  await Breed.collection.drop();

  const result = await Promise.all([...Array(NUMBER_RECORDS)].map(() => fetchData()));

  await Breed.collection.insertMany(Object.keys(BREEDS).map((i) => ({ title: i })));
  const breeds = await Breed.find();

  await Dog.collection.insertMany(
    // eslint-disable-next-line no-underscore-dangle
    result.map((i) => ({ ...i, breed: breeds.find((b) => b.title === i.breed)._id })),
  );

  return res.status(200).json({});
};

module.exports = { initial };
