const uuid =require("uuid");
const { validationResult} = require('express-validator');
const mongoose = require('mongoose');

const HttpError = require('../models/htttp-error');
const getCoordsForAddress = require('../util/location');
const Place = require('../models/place');
const User = require('../models/user');


let DUMMY_PLACES = [
  {
    id: 'p1',
      title: 'Sagrada  Familia',
      description: 'Sagrada Família is a large unfinished minor basilica in the Eixample district of Barcelona, Catalonia, Spain. Designed by the Catalan architect Antoni Gaudí, his work on the building is part of a UNESCO World Heritage Site. On 7 November 2010, Pope Benedict XVI consecrated the church and proclaimed it a minor basilica',
      imageUrl: 'https://image.dnevnik.hr/media/images/804x607/Sep2018/61565210.jpg',
      address: 'C. de Mallorca, 401, 08013 Barcelona, Spain',
      location: {
        lat: 41.403611,
        lng: 21.174444
      },
      creator: 'u1'
  }
];

const getPlaceById =async (req, res, next) => {
  const placeId = req.params.placeid; 
  let place;
  try{
    place=await Place.findById(placeId);
  }catch (err) {
    const error=new HttpError('Somethnig went wrong, could not finde a place',500);
    return next(error);
  }

  if (!place) {
    const error= new HttpError('Could not find a place.', 404);
    return next(error);
  }
  res.json({ place: place.toObject({getters:true}) }); // => { place } => { place: place }
};


const getPlacesByUserId = async(req, res, next) => {
  const userId = req.params.userid;
  let places;
  try{
  places =await Place.find({ creator: userId });
  }catch (err){
    const error=new HttpError('Somethnig went wrong',500);
    return next(error);
  }
  if (!places || places.length===0) {
    return next(
      new HttpError('Could not find a place.', 404)
    );
  }

  res.json({ places: places.map(place => place.toObject({getters: true})) });
};

const createPlace = async (req, res, next)=>{
  const errors = validationResult(req);
  console.log(errors);
  if (!errors.isEmpty()) {
    next(new HttpError('Invalid inputs passed, please check your data.', 422));
  }

  const { title, description, address, creator } = req.body;

  
  let coordinates;
  try {
    coordinates = await getCoordsForAddress(address);
  } catch (error) {
    return next(error);
  }

  // const title = req.body.title;
  const createdPlace = new Place({
    title,
    description,
    address,
    location:coordinates,
    image:'https://image.dnevnik.hr/media/images/804x607/Sep2018/61565210.jpg',
    creator
  });

  let user;
  try {
    user=await User.findById(creator);
    
  } catch (err) {
    const error = new HttpError('Creating place failed, please try again',500);
    return next(error);
  }

  if (!user){
    const error =new HttpError('Could not find user for the provided id',404);
    return next(error);
  }
  console.log(user);


  try {
    //sesije i transakcije
    const sess= await mongoose.startSession();
    sess.startTransaction();
    await createdPlace.save({ session: sess });
    //metoda za stvaranje veze
    user.places.push(createdPlace);
    await user.save({session: sess})
    await sess.commitTransaction();

  } catch (err){
    const error =new HttpError(
      'Creating place failed, please try again.',
      500
    );
    return next(error);
  }

  res.status(201).json({ place: createdPlace });
};

const updatePlace = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new HttpError('Invalid inputs passed, please check your data.', 422);
  }

  const { title, description } = req.body;
  const placeId = req.params.placeid;

  let place;
  try {
    place = await Place.findById(placeId);
  } catch (err) {
    const error=new HttpError('Something went wrong, could not update place',500);
    return next(error);
  }

  place.title = title;
  place.description = description;

  try {
    await place.save();
  } catch (err) {
    const error=new HttpError('Something went wrong, could not update place',500);
    return next(error);
  }

  res.status(200).json({ place: place.toObject({getters: true}) });
};
const deletePlace=async (req,res,next)=>{
  const placeId = req.params.placeid;
  let place;
  try {
    place = await Place.findById(placeId).populate('creator');
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not delete place.',
      500
    );
    return next(error);
  }

  if (!place) {
    const error = new HttpError('Could not find place for this id.', 404);
    return next(error);
  }

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await place.remove({ session: sess });
    place.creator.places.pull(place);
    await place.creator.save({ session: sess });
    await sess.commitTransaction();
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not delete place.',
      500
    );
    return next(error);
  }

  res.status(200).json({ message: 'Deleted place.' });
};

exports.getPlaceById = getPlaceById;
exports.getPlacesByUserId = getPlacesByUserId;
exports.createPlace = createPlace;
exports.updatePlace=updatePlace;
exports.deletePlace=deletePlace;
