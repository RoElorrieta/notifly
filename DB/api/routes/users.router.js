const router = require('express').Router()

const {
  getAllUsers,
  getUserById,
  deleteByID,
  updateUser
} = require('../controllers/users.controller')

const { 
  authUser 
} = require('../utils/authUser.js')

router.get('/', authUser, getAllUsers) 
router.get('/:checkID', authUser, getUserById)
//router.delete('/:checkID', authUser, deleteByID)
router.put('/:checkID', authUser, updateUser)

module.exports = router