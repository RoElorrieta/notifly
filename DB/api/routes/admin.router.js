const router = require('express').Router()

const {
  getAllUsers,
  getUserById,
  deleteByID
} = require('../controllers/admin.controller')

/*const {
  adminSignUp, //<--- no se está usando, pero mola tenerlo
  adminLogin
} = require('../controllers/adminauth.controller')*/

const { 
  authAdmin 
} = require('../utils/authAdmin.js') //midware

//router.post('/', adminSignUp, adminLogin)
router.get('/all', authAdmin, getAllUsers) 
router.get('/:checkID', authAdmin, getUserById)
router.delete('/delete/:checkID', authAdmin, deleteByID)

module.exports = router