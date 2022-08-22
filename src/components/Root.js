import React from 'react';
import PetList from './PetList';
import Axios from 'axios';

// We'll render these sample pets for now. Later, we'll instead fetch the list
// of pets from the server! We won't need samplePets after that.
//import samplePets from '../petdata';

const Root = () => {
  const [pets, setPets] = React.useState([]);
  const [error, setError] = React.useState(false);
  React.useEffect(() => {
    async function getPets() {
      try {
        const { data } = await Axios.get('/api/pets');
        setPets(data);
        setError(false);
      } catch (error) {
        console.error('Something went wrong!', error);
        console.log(error);
        setError(true);
      }
    }
    getPets();
  }, []);
  if (error) {
    return <p>Something Went Wrong</p>;
  }
  if (pets.length === 0) {
    return <>Loading...</>;
  }
  return (
    <>
      <h1>Adoption Center</h1>
      <PetList pets={pets} />
    </>
  );
};

export default Root;
