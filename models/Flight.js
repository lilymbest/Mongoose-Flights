var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DAL', 'LAX', 'SEA']
    },
    arrival: {
        type: Date
    }
});

var ticketSchema = new Schema({
    seat: {
        type: String,
        match: /[A-F][1-9]\d?/
    },
    price: {
        type: Number,
        min: 0
    },
    flight: {
        type: Object,
        ref: 'Flight'
    }
});

var flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United'],
        required: true,
    },
    flightNo: { 
        type: Number,
        min: 10,
        max: 9999,
        required: true
    },
    departs: {
        type: Date,
        default: function () {
            var date = new Date();
            date.setFullYear(date.getFullYear()+1)
            return date
            }
    },
    airport: {
        type: String, 
        enum: ['AUS', 'DAL', 'LAX', 'SEA'],
        default: 'SEA',
    },
    destination: [destinationSchema]
}, {
    timestamps: true
});



module.exports = mongoose.model('Flight', flightSchema)