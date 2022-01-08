const express = require('express')
const router = express.Router()
const { isAdmin, isLoggedIn, isRegistered } = require('../../middleware/')

router.use('/auth', require('./auth'))

router.use('/op', require('./op'))
router.use('/admin', isLoggedIn, isAdmin, require('./admin'))
router.use('/logged', isLoggedIn, isRegistered, require('./logged'))

module.exports = router