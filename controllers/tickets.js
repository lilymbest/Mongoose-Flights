var Flight = require('../models/Flight');
var Ticket = require('../models/Tickets');

module.exports = {
    new: newTicket,
    create
};

function newTicket(req, res) {
    Flight.findById(req.params.id, function(err, ticket) {
        res.render('flights/tickets/new', {title: 'ticket', ticket});
    });
} ;

function create(req, res) {
    req.body.flight = req.params.id;
    Ticket.create(req.body, function (err, ticket) {  
      let newTicket = new Ticket(req.body);
      newTicket.save(function(err, result) {
          res.redirect(`/flights/${req.params.id}`);
      })
    })
};