import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

function InfoPage() {
  const user = useSelector((store) => store.user);
  const [petList, setPetList] = useState([]);
  const [petName, setPetName] = useState('');

  useEffect(() => {
    getPetList();
  }, []);

  const getPetList = () => {
    axios.get('/api/pets')
      .then(response => setPetList(response.data))
      .catch(error => {
        console.error(error);
        alert('Something went wrong.');
      });
  }

  const addPet = (e) => {
    e.preventDefault();
    axios.post('/api/pets', { name: petName })
      .then(response => getPetList())
      .catch(error => {
        console.error(error);
        alert('Something went wrong.');
      });
  }

  return (
    <div className="container">
      <h2>Add a Pet</h2>
      <form onSubmit={addPet}>
        Name: <input type="text" value={petName} onChange={e => setPetName(e.target.value)} />
        <br />
        <button>Submit</button>
      </form>
      <hr />
      <h2>Pet List:</h2>
      <div>
        {
          petList.map(pet => (
            <div key={pet.id} style={{ padding: '10px', margin: '10px', borderRadius: '10px', border: '2px solid gray' }}>
              <h4>{pet.name}</h4>
              <p>User ID: {pet.user_id}</p>
            </div>
          ))
        }
      </div>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default InfoPage;
