const router = require('express').Router();
const { initial } = require('../utils/intialdb');

router.get('/', initial);

module.exports = router;
