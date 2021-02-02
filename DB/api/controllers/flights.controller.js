const FlightModel = require ('../models/flights.model')

function getFlight (req, res) {
    FlightModel
        .findById({_id :req.params.id})
        .then(flight=>{
            res.json(flight)
        })
        .catch(err => {
            res.status(404).send('Not found')
        })
}
/*
function createFlight (req, res) {
    FlightModel
        .create({
            date : req.body.date,
            code : req.body.code,
            route : req.body.route,
            length : req.body.length,
            fleet : req.body.fleet,
            registration : req.body.registration,
            PAX : req.body.pax
        })
        .then(flight => {
            flight.save()
            res.json(flight)
        })
        .catch(err => {
            res.status(500).send('Could not create flight')
        })
}
*/
function updateFlight (req, res) {
    FlightModel
        .findByIdAndUpdate(req.params.id),{
            date : req.body.date,
            code : req.body.code,
            route : req.body.route,
            length : req.body.length,
            fleet : req.body.fleet,
            registration : req.body.registration,
            PAX : req.body.pax
        }
        .then(flight => {
            res.json(flight)
        })
        .catch(err => {
            res.status(500).send('Error updating flight')
        })
}

function cancelFlight (req, res) {
    FlightModel
        .findByIdAndDelete({_id : req.params.id})
        .then(flight => {
            res.send(flight)
        })
        .catch(err => {
            res.status(500).send(`Could not delete flight ${FlightModel.code}`)
        })
}
module.exports = {
    getFlight,
    //createFlight,
    updateFlight,
    cancelFlight
};