const express = require('express');
const router = express.Router();

const aggregate = require('../services/aggregate');
const input = require('../data.json');

/* GET users listing. */
router.get('/', (req, res, next) =>
  res.render('index', { data: aggregate(input) }));

module.exports = router;
