const express = require('express');
const { check } = require('express-validator');

const placesControllers = require('../controllers/places-controller');

const router = express.Router();

router.get('/:placeid', placesControllers.getPlaceById);

router.get('/user/:userid', placesControllers.getPlacesByUserId);

router.post(
    '/',
    [
      check('title')
        .not()
        .isEmpty(),
      check('description').isLength({ min: 5 }),
      check('address')
        .not()
        .isEmpty()
    ],
    placesControllers.createPlace
  );

router.patch(
  '/:placeid',
  [
    check('title')
      .not()
      .isEmpty(),
    check('description').isLength({ min: 5 })
  ],
  placesControllers.updatePlace
);

router.delete('/:placeid', placesControllers.deletePlace);

module.exports = router;
