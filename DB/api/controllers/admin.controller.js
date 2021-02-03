const adminModel = require('../models/admin.model')
const userModel = require('../models/users.model')
const FlightModel = require ('../models/flights.model')
const { Mongoose } = require('mongoose'); //<--- lo hace VSCode solito

function getUserById (req, res) {
    userModel
        .findById(req.params.checkID)
        .then(user => {
            res.json(user); //<--- volcar en el perfil de usuario
        })
        .catch(err => {
            res.status(500).send('User ID not found');
        })
}

function deleteByID (req, res) {
    userModel
       .findByIdAndDelete(req.params.checkID)
       .then(() => {
           res.status(200);
           console.log('User deleted succesfully');
       })
       .catch(err => {
           res.status(500).send('Error on user deletion. Check out user ID');
       })
}

function getAllUsers (req, res) {
    userModel
      .find()
      .then(users => {
          res.json(users);
      })
      .catch(err => {
          res.status(500).send('Empty');
      })
}
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

function addFlight (req, res) {
    userModel
        .findById({_id: req.params.checkID})
        .then(user => {
            user.flights.push(req.body.flight)
            user.save()
            .then(user => {
                res.status(200).json(user)
                console.log('Flight added gracefully')
            })
            .catch(err => {
                res.status(500).send('Flight not added')
            })
        })
        .catch(err => {
            res.status(500).send(`Could not add a new flight to this user's schedule`)
        })
   } 

/*****************************************
 * ésto debe hacer uso del modelo de vuelo
 ****************************************/
//function createNewFlight (req, res) {}

module.exports = {
    getUserById,
    deleteByID,
    getAllUsers,
    createFlight,
    addFlight
};