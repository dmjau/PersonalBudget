var express = require('express');
var router = express.Router();

const ctrlRegister = require('../controllers/register.controller');

//Route to get register
router.get('/api/register', ctrlRegister.getRegister);

module.exports = router;