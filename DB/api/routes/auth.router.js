const router = require('express').Router()

const {
  signUp,
  login
} = require('../controllers/auth.controller')

const {
  adminSignUp,
  adminLogin
} = require('../controllers/adminauth.controller')

const {
  authAdmin
} = require('../utils/authAdmin') //midware

router
  .post('/signupadmin', adminSignUp)
  .post('/loginadmin', adminLogin)
  .post('/signup', signUp) //body => {name, email, password}
  .post('/login', login)
  
module.exports = router