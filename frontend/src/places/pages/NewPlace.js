import React, {useCallback} from 'react';

import Input from '../../shared/FormElements/Input';
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/util/validators';
import './NewPlace.css';

const NewPlace = () => {

  const titleInputHandler =useCallback((id, value, isValid) => {},[]);
  const descriptionInputHandler =useCallback((id, value, isValid) => {},[]);

  return (
    <form className="place-form">
      <Input
      id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Enter a valid name."
        onInput={titleInputHandler}
      />
      <Input
      id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Enter a valid description."
        onInput={descriptionInputHandler}
      />
    </form>
  );
};

export default NewPlace;
