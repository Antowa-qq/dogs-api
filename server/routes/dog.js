const router = require('express').Router();
const dogController = require('../controllers/dog');

router.get('/', dogController.getAllDogs);
// router.post('/');
// router.get('/:dogId');
// router.put('/:dogId');
// router.delete('/:dogId');

module.exports = router;
