const router = require('express').Router();
const dogRouter = require('./dog');
const breedRouter = require('./breed');
const helperRouter = require('./helper');

router.use('/dogs', dogRouter);
router.use('/breeds', breedRouter);
router.use('/initial', helperRouter);

module.exports = router;
