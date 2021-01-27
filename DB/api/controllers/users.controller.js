const UserModel = require('../models/users.model')

/************************************
 * REST functions. 
 * Obtain a user by id. 
 ***********************************/

function getUserById (req, res) {
    UserModel
        .findById(req.params.checkID)
        .then(user => {
            res.json(user); //<--- volcar en el perfil de usuario
        })
        .catch(err => {
            res.status(500).send('User ID not found');
        })
}

/*********************************
 * Update a user by id (profile)
 ********************************/

function updateUser (req, res) {
    UserModel
        .findByIdAndUpdate(req.params.checkID, req.body)
        .then(() => {
            res.status(200);
            console.log('Update successful');
        })
        .catch(err => {
            res.status(500).error('There was an error on update');
        })
}

/******************************
 * Delete a user by id
 *****************************/

 function deleteByID (req, res) {
     UserModel
        .findByIdAndDelete(req.params.checkID)
        .then(() => {
            res.status(200);
            console.log('User deleted succesfully');
        })
        .catch(err => {
            res.status(500).error('Error on user deletion. Check out user ID');
        })
 }

 /*****************************
  * Gets all users (marketplace)
  ****************************/

  function getAllUsers (req, res) {
      UserModel
        .find()
        .then(users => {
            res.json(users);
        })
        .catch(err => {
            res.status(500).error('Empty');
        })
  }

module.exports = {
    getUserById,
    updateUser,
    deleteByID,
    getAllUsers
  };