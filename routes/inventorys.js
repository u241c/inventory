const express = require('express');
const router = express.Router();
const inventorysCtrl = require('../controllers/inventorys');

router.get('/', inventorysCtrl.index);
router.get('/new', inventorysCtrl.new);

router.post('/', inventorysCtrl.create);
router.delete('/:id', inventorysCtrl.delete);
router.get('/edit', inventorysCtrl.edit);
router.put('/:id', inventorysCtrl.update);




module.exports = router;