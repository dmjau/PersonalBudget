const Register = require('../models/register');

//This file contains methods
const registerCtrl = {};

//Get all registers
registerCtrl.getRegisters = async function(req, res){
   const registers = await Register.find();
   res.json(registers);
};

//Create register
registerCtrl.createRegister = async function(req, res){
    const register = new Register(req.body);
    await register.save();
    console.log(register);
    res.json({
        'status': 'Register Saved'
    });
};

//Get one register
registerCtrl.getOneRegister = async function(req, res){
    const register = await Register.findById(req.params.id);
    res.json(register);
};

//Edit one register
registerCtrl.editRegister = async function(req, res){
    const { id } = req.params;
    const registerUpdate = {
        concept: req.body.concept,
        amount: req.body.amount,
        dateYear: req.body.dateYear,
        dateMonth: req.body.dateMonth,
        dateDay: req.body.dateDay,
        kind: req.body.kind,
        category: req.body.category
    };
    await Register.findByIdAndUpdate(id, {$set: registerUpdate}, {new: true});
    res.json({
        status: 'Register Update'
    });
};

//Delete one register
registerCtrl.deleteRegister = async function(req, res){
    await Register.findByIdAndDelete(req.params.id);
    res.json({status: 'Register Deleted'});
}


module.exports = registerCtrl;
