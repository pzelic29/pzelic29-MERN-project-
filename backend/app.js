const express = require('express');
const bodyParser = require('body-parser');
const mongoose=require('mongoose');
const placesRoutes = require('./routes/places-routes');

const usersRoutes = require('./routes/user-routes');
const HttpError=require('./models/htttp-error');
const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');

  next();
});

app.use('/api/places', placesRoutes); // => /api/places...
app.use('/api/users', usersRoutes);
app.use((req,res,next)=>{
  const error = new HttpError('Could not find this route',404);
  throw error;
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500)
  res.json({message: error.message || 'An unknown error!'});
});
mongoose
.connect('mongodb+srv://pzelic1:okviri1234@cluster0.twuc04y.mongodb.net/mern?retryWrites=true&w=majority')
.then(() => {
  console.log("connected")
  app.listen(3001);
})
.catch(err =>{
  console.log(err);
});