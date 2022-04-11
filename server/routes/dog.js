const router = require('express').Router();
const dogController = require('../controllers/dog');

router.get('/', dogController.getAllDogs);

module.exports = router;
