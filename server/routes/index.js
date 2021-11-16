const router = require('express').Router();
const dogRouter = require('./dog');

router.use('/dogs', dogRouter);

module.exports = router;
