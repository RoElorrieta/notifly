const AirportModel = require('../models/airports.model')

function addAirport (req, res) {
    AirportModel
        .create({
            name : req.body.name,
            country : req.body.country,
            IATAcode : req.body.code,
            base : req.body.base
        })
        .then(airport => {
            res.json(airport)
        })
        .catch(err => {
            res.status(500).send('Error adding airport')
        })
}

function modifyAirport(req, res) {
    AirportModel
        .findByIdAndUpdate(req.params.id),{
            name : req.body.name,
            country : req.body.country,
            IATAcode : req.body.code,
            base : req.body.base 
        }
        .then(airport => {
            res.json(airport)
        })
        .catch(err => {
            res.status(500).send('Error updating airport')
        })
}

function deleteAirport (req, res) {
    AirportModel
        .findByIdAndDelete({_id : req.params.id})
        .then(airport => {
            res.send(airport)
        })
        .catch(err => {
            res.status(500).send('Error deleting airport')
        })
}

module.exports = {
    addAirport,
    modifyAirport,
    deleteAirport
};