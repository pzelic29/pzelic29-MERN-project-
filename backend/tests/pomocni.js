const Place = require('../models/place')
const User = require('../models/user')
const bcrypt = require("bcrypt")

const passHash = async () => {
    return await bcrypt.hash('supersecret_dont_share', 12)
}

const DUMMY_USERS = [
    {
        id: 'u1',
        name: "Petra",
        email: "pzelic@gmail.com",
        password: passHash,
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
        places: []
    }
  ];
  const DUMMY_PLACES = [
    {
      title: 'Empire State Building',
      description: 'One of the most famous sky scrapers in the world!',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
      address: '20 W 34th St, New York, NY 10001',
      location: {
        lat: 40.7484405,
        lng: -73.9878584
      },
      creator: 'u1'
    },
    {
      title: 'Emp. State Building',
      description: 'One of the most famous sky scrapers in the world!',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
      address: '20 W 34th St, New York, NY 10001',
      location: {
        lat: 40.7484405,
        lng: -73.9878584
      },
      creator: 'u2'
    }
  ];

  const dohvatiPodatke = async () => {
    const podaci = await Place.find({})
    return podaci.map(p => p.toJSON())
}

const dohvatiKorisnike = async () => {
    const podaci = await User.find({})
    return podaci.map(p => p.toJSON())
}

module.exports = { DUMMY_PLACES, DUMMY_USERS, dohvatiPodatke, dohvatiKorisnike }
