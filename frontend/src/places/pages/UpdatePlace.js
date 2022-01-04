import React from 'react';
import { useParams } from 'react-router-dom';

import Input from '../../shared/FormElements/Input';
import Button from '../../shared/FormElements/Button';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH
} from '../../shared/util/validators';
import './NewPlace.css';
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
      title: 'Sagrada  Familia',
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
  

const UpdatePlace = () => {
  const placeId = useParams().placeId;

  const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId);

  if (!identifiedPlace) {
    return (
      <div className="center">
        <h2>Could not find place!</h2>
      </div>
    );
  }

  return (
    <form className='place-form'>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={() => {}}
        value={identifiedPlace.title}
        valid={true}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (min. 5 characters)."
        onInput={() => {}}
        value={identifiedPlace.description}
        valid={true}
      />
      <Button type="submit" disabled={true}>
        UPDATE PLACE
      </Button>
    </form>
  );
};

export default UpdatePlace;
