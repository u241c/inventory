const express = require('express');
const router = express.Router();
const indexCtrl = require('../controllers/index');
const nootropics = require('../controllers/inventorys');


router.get('/', function(req, res){
    res.redirect('/inventorys');

});

module.exports = router;