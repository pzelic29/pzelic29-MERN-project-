const bcrypt=require('bcrypt')
const mongoose = require('mongoose')
const User=require('../models/user') 
const pomocni=require('./pomocni')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)


beforeEach(async () => {
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
    passHash = await bcrypt.hash('supersecret_dont_share',12);
    userObject = new User({
        name: "test2",
        email: "test2@gmail.com",
        password: passHash,
        image: 'https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg',
        places: []
    });
    await userObject.save();
  });

test('korisnici se vraćaju kao JSON', async () => {
 await api
 .get('/api/users')
 .expect(200)
 .expect('Content-Type', /application\/json/)
})

test('check username for first user', async () => {
    const response = await api.get('/api/users');
    expect(response.body.users[0].name).toBe('test1');
  });

  test('database has two users', async () => {
    const response = await api.get('/api/users');
    expect(response.body.users).toHaveLength(2);
  });
  test('User login: password is invalid', async () => {
    const user = {
      email: 'test1',
      password: '12345678',
    };
    const response = await api
      .post('/api/users/login')
      .send(user)
      .expect(403)
      .expect('Content-Type', /application\/json/);
    expect(response.body.message).toContain('Invalid credentials, could not log you in.');
  });

afterAll(() => {
    mongoose.connection.close()
   })