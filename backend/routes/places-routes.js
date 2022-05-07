const express = require('express');

const placesControllers = require('../controllers/places-controller');

const router = express.Router();

router.get('/:placeid', placesControllers.getPlaceById);

router.get('/user/:userid', placesControllers.getPlaceByUserId);

router.post('/',placesControllers.createPlace);

router.patch('/:placeid', placesControllers.updatePlaceById);

router.delete('/:placeid', placesControllers.deletePlace);

module.exports = router;
