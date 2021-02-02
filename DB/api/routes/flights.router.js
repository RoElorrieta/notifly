const router = require('express').Router()

const {
  getFlight,
  //createFlight,
  updateFlight,
  cancelFlight
} = require('../controllers/flights.controller')

const {
  authUser
} = require('../utils/authUser') //midware
const { 
  authAdmin
} = require('../utils/authAdmin') //midware

router.get('/users/:checkID/', authUser, getFlight)
//router.post('/:checkID', authAdmin, createFlight) //lo crea en compass pero escupe el error en el js LOL
router.put('/:checkID/:date', authAdmin, updateFlight) //NYET.cuidadin con el formato de la fecha
router.delete('/:checkID/cancel/:date', authAdmin, cancelFlight) //NYET

module.exports = router