const router = require ('express').Router()

router.use('/auth', require ('./auth.router.js'))
router.use('/admin', require ('./admin.router.js'))
router.use('/users', require ('./users.router.js'))
router.use('/flights', require('./flights.router.js'))
//router.use('/airports', require('./airports.router.js'))

module.exports = router;
