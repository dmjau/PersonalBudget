var express = require('express');
var router = express.Router();

const ctrlRegister = require('../controllers/register.controller');

//Route to get all registers
router.get('/', ctrlRegister.getRegisters);
//Route to create register
router.post('/', ctrlRegister.createRegister);
//Route to get one register
router.get('/:id', ctrlRegister.getOneRegister);
//Route to edit register
router.put('/:id',ctrlRegister.editRegister);
//Route to delete register
router.delete('/:id', ctrlRegister.deleteRegister);

module.exports = router;