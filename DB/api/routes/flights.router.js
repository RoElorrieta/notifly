const router = require('express').Router()

const {
  createFlight,
  updateFlight,
  cancelFlight
} = require('../controllers/flights.controller')

const { 
  authAdmin
} = require('../utils/authAdmin') //midware

router.post('/:checkID', authAdmin, createFlight) 
router.put('/:checkID/:date', authAdmin, updateFlight)
router.delete('/:checkID/:date', authAdmin, cancelFlight)

module.exports = router