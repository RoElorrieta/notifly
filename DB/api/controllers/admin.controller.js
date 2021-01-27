const adminModel = require('../models/admin.model')
const userModel = require('../models/users.model')

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
           res.status(500).error('Error on user deletion. Check out user ID');
       })
}

function getAllUsers (req, res) {
    userModel
      .find()
      .then(users => {
          res.json(users);
      })
      .catch(err => {
          res.status(500).error('Empty');
      })
}

/*****************************************
 * ésto debe hacer uso del modelo de vuelo
 ****************************************/
//function createNewFlight (req, res) {}

module.exports = {
    getUserById,
    deleteByID,
    getAllUsers
};