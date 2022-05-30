import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList';

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
  },
  {
    id: 'p2',
    title: 'Sagrada  Familia!',
    description: 'Sagrada Família is a large unfinished minor basilica in the Eixample district of Barcelona, Catalonia, Spain. Designed by the Catalan architect Antoni Gaudí, his work on the building is part of a UNESCO World Heritage Site. On 7 November 2010, Pope Benedict XVI consecrated the church and proclaimed it a minor basilica',
    imageUrl: 'https://image.dnevnik.hr/media/images/804x607/Sep2018/61565210.jpg',
    address: 'C. de Mallorca, 401, 08013 Barcelona, Spain',
    location: {
      lat: 41.403611,
      lng: 2.174444
    },
    creator: 'u2'
  }
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;

