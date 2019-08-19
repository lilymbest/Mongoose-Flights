var express = require('express');
var router = express.Router();
var ticketCtrl = require('../controllers/tickets');

router.get('/flights/:id/tickets/new', ticketCtrl.new);
router.post('/tickets/:id', ticketCtrl.create);

module.exports = router;