const mongoose = require('mongoose')
const bcrypt=require('bcrypt')
const User=require('../models/user') 
const Place=require('../models/place')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)

const auth = {
    "email": "test1@gmail.com",
    "password": "secret"
}
beforeEach(async () => {
    await Place.deleteMany({});
    await User.deleteMany({});
    let passHash= await bcrypt.hash('supersecret_dont_share',12);
    let userObject = new User({
        name: "test1",
        email: "test@gmail.com",
        password: passHash,
        image: 'https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg',
        places: []
    });
    await userObject.save();
  
    const user = await User.findOne({});
    console.log('user: ', user);
    let place = new Place({
        title: "Empire State Building",
        description: "A nice place",
        address: '20 W 34th St, New York, NY 10001',
        location: {
        lat: 40.7484405,
        lng: -73.9878584
      },
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
      creator: user._id,
    });
    await place.save();
    user.places = user.places.concat(place._id);
    await user.save();
    console.log("User and place",user);
  });
  test('korisnici se vraćaju kao JSON', async () => {
    await api
    .get('/api/users')
    .expect(200)
    .expect('Content-Type', /application\/json/)
   })
   test("podaci se vracaju kao json", async () => {

    //zatrazit token
    const rez = await api.post("/api/users/login").send(auth)
    const token = rez.body.token

    await api.get("/api/users/places").auth(token, { type: 'bearer' }).expect(200).expect('Content-Type', /application\/json/)
})
test('Add new place', async () => {
  const user = {
    email: 'test@gmail.com',
    userPassword: 'password',
  };
  const result = await api
    .post('/api/users/login')
    .send(user)
    .expect(200)
    .expect('Content-Type', /application\/json/);

  const token = 'bearer ' + result.body.token;

  const newPlace = {
    title: "Empire State Building",
        description: "A nice place",
        address: '20 W 34th St, New York, NY 10001',
        location: {
        lat: 40.7484405,
        lng: -73.9878584
      },
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
      creator: user._id,
  };

  await api
    .post('/api/places/new')
    .set('Authorization', token)
    .send(newPlace)
    .expect(200)
    .expect('Content-Type', /application\/json/);

  const response = await api
    .get('/api/places/new')
    .set('Authorization', token)
    .expect(200)
    .expect('Content-Type', /application\/json/);

  expect(response.body).toHaveLength(2);
});

test('check description of first place', async () => {
  const user = {
    email: 'test@gmail.com',
    password: 'password',
  };
  const result = await api
    .post('/api/users/login')
    .send(user)
    .expect(200)
    .expect('Content-Type', /application\/json/);

  const token = 'bearer ' + result.body.token;

  const response = await api
    .get('/api/users/places')
    .set('Authorization', token)
    .expect(200)
    .expect('Content-Type', /application\/json/);

  expect(response.body[0].description).toBe('A nice place');
});

test('delete place', async () => {
  const user = {
    email: 'test@gmail.com',
    password: 'password',
  };
  const result = await api
    .post('/api/users/login')
    .send(user)
    .expect(200)
    .expect('Content-Type', /application\/json/);

  const token = 'bearer ' + result.body.token;

  const response = await api
    .get('/api/users/places')
    .set('Authorization', token)
    .expect(200)
    .expect('Content-Type', /application\/json/);

  console.log('id: ', response.body[0].id);
  await api.delete(`/api/users/places/${response.body[0].id}`).expect(204);

  const endResponse = await api
    .get('/api/users/places')
    .set('Authorization', token)
    .expect(200)
    .expect('Content-Type', /application\/json/);

  expect(endResponse.body).toHaveLength(response.body.length - 1);
});

afterAll(() => {
  mongoose.connection.close();
});