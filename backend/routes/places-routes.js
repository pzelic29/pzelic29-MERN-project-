const express = require('express');

const HttpError =require('../models/htttp-error');

const router = express.Router();

const DUMMY_PLACES = [
    {
      id: 'p1',
      title: 'Sagrada  Familia',
      description: 'Sagrada Família is a large unfinished minor basilica in the Eixample district of Barcelona, Catalonia, Spain. Designed by the Catalan architect Antoni Gaudí, his work on the building is part of a UNESCO World Heritage Site. On 7 November 2010, Pope Benedict XVI consecrated the church and proclaimed it a minor basilica',
      imageUrl: 'https://image.dnevnik.hr/media/images/804x607/Sep2018/61565210.jpg',
      address: 'C. de Mallorca, 401, 08013 Barcelona, Spain',
      location: {
        lat: 41.403611,
        lng: 2.174444
      },
      creator: 'u1'
    }
  ];

router.get('/:placeid', (req, res, next) => {
  const placeId = req.params.placeid; 

  const place = DUMMY_PLACES.find(p => {
    return p.id === placeId;
  });

  if (!place) {
    throw new HttpError('Could not find a place.',404);
   
  }

  res.json({ place }); 
});

router.get('/user/:userid', (req, res, next) => {
  const userId = req.params.userid;

  const place = DUMMY_PLACES.find(p => {
    return p.creator === userId;
  });

  if (!place) {
    return next(new HttpError('Could not find a place.',404));
  }
  res.json({ place });
});

module.exports = router;
