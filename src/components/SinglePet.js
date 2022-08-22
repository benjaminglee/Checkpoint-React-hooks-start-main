import React from 'react';
function SinglePet({ pet }) {
  const [adopted, setAdopted] = React.useState(false);
  const toggle = () => {
    setAdopted(!adopted);
  };
  React.useEffect(() => {
    const data = window.localStorage.getItem(`${pet.name} adoptionStatus`);
    setAdopted(JSON.parse(data));
  }, []);
  React.useEffect(() => {
    window.localStorage.setItem(
      `${pet.name} adoptionStatus`,
      JSON.stringify(adopted)
    );
  }, [adopted]);
  return (
    <div className={`single-pet ${adopted ? 'adopted' : ''}`}>
      <div>{pet.name}</div>
      <div>{pet.description}</div>
      <div>{pet.species}</div>
      <div>{adopted ? 'Adopted!' : 'Available for Adoption'}</div>
      <button onClick={toggle}>Toggle Status</button>
      <button className="delete-pet">Delete</button>
    </div>
  );
}
export default SinglePet;
