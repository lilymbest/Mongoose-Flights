var Flight = require('../models/Flight');

module.exports = {
    create
};

function create(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
      flight.destination.push(req.body);
      flight.save(function(err) {
        res.redirect(`/flights/${flight.id}`);
      });
    });
}