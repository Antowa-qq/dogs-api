const router = require('express').Router();
const breedController = require('../controllers/breed');

router.get('/', breedController.getAllBreeds);

module.exports = router;
