const router = require('express').Router()

const {
  createFlight,
  updateFlight,
  cancelFlight
} = require('../controllers/flights.controller')

const { 
  authAdmin
} = require('../utils/authAdmin') //midware

router.post('/:checkID', authAdmin, createFlight) //lo crea en compass pero escupe el error en el js LOL
router.put('/:checkID/:date', authAdmin, updateFlight) //NYET.cuidadin con el formato de la fecha
router.delete('/:checkID/cancel/:date', authAdmin, cancelFlight) //NYET

module.exports = router