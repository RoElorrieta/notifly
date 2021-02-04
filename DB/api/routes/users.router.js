const router = require('express').Router()

const {
  getProfile,
  getAllUsers,
  getUserById,
  deleteByID,
  updateUser
} = require('../controllers/users.controller')

const { 
  authUser 
} = require('../utils/authUser.js')

router.get('/', authUser, getAllUsers) //para admin OK
router.get('/me', authUser, getProfile) //OK
router.get('/:checkID', authUser, getUserById) //OK
router.delete('/:checkID', authUser, deleteByID) //se queda pensando pero borra el usuario
router.put('/:checkID', authUser, updateUser) //se queda pensando pero actualiza bien

module.exports = router