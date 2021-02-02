const router = require('express').Router()

const {
  getAllUsers,
  getUserById,
  deleteByID,
  addFlight
} = require('../controllers/admin.controller')

const {
  adminSignUp, //<--- no se está usando, pero mola tenerlo
  adminLogin
} = require('../controllers/adminauth.controller')

const { 
  authAdmin 
} = require('../utils/authAdmin.js') //midware

router.post('/', adminSignUp, adminLogin) //OK
router.get('/all', authAdmin, getAllUsers) //OK
router.get('/:checkID', authAdmin, getUserById)//OK
router.put('/:checkID/flights', authAdmin, addFlight) //testing
router.delete('/delete/:checkID', authAdmin, deleteByID)//OK

module.exports = router