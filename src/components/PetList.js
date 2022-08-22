import React from 'react';
import SinglePet from './SinglePet';

// PetList only renders one SinglePet. We'd like it to render a list of pets,
// passed in as props.pets. Don't forget to add a unique key to each one!
function PetList({ pets }) {
  const [petList, setPetList] = React.useState(pets);
  return (
    <>
      <select
        name="select"
        onChange={(e) => {
          if (e.target.value === 'all') setPetList(pets);
          if (e.target.value === 'cats')
            setPetList(pets.filter((pet) => pet.species === 'cat'));
          if (e.target.value === 'dogs')
            setPetList(pets.filter((pet) => pet.species === 'dog'));
        }}
      >
        <option value="all">all</option>
        <option value="cats">cats</option>
        <option value="dogs">dogs</option>
      </select>
      <div className="pet-list">
        {petList.map((animal) => {
          return <SinglePet key={animal.id} pet={animal} />;
        })}
      </div>
    </>
  );
}

export default PetList;
