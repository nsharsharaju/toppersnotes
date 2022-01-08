const express = require('express')
const router = express.Router()
const adminCtrl = require('../../../controllers/admin')

router.get('/getCategories',adminCtrl.getCategories)
router.post('/createCategory',adminCtrl.createCategory)
router.post('/editCategory',adminCtrl.editCategory)
router.post('/deleteCategory',adminCtrl.deleteCategory)

router.get('/getLocations',adminCtrl.getLocations)
router.post('/createLocation',adminCtrl.createLocation)
router.post('/editLocation',adminCtrl.editLocation)
router.post('/deleteLocation',adminCtrl.deleteLocation)

router.get('/getEvents',adminCtrl.getEvents)
router.post('/createEvent',adminCtrl.createEvent)
router.post('/editEvent',adminCtrl.editEvent)
router.post('/deleteEvent',adminCtrl.deleteEvent)


module.exports = router