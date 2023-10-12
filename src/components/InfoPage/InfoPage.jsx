import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

function InfoPage() {
  const dispatch = useDispatch();
  const petList = useSelector((store) => store.petList);

  const [petName, setPetName] = useState("");

  useEffect(() => {
    getPetList();
  }, []);

  const getPetList = () => {
    dispatch({ type: 'FETCH_PET_LIST'})
  };

  const addPet = (e) => {
    e.preventDefault();
    dispatch({type: 'ADD_PET', payload: { name: petName }})
  };

  return (
    <div className="container">
      <h2>Add a Pet</h2>
      <form onSubmit={addPet}>
        Name:{" "}
        <input
          type="text"
          value={petName}
          onChange={(e) => setPetName(e.target.value)}
        />
        <br />
        <button>Submit</button>
      </form>
      <hr />
      <h2>Pet List:</h2>
      <div>
        {petList.map((pet) => (
          <div
            key={pet.id}
            style={{
              padding: "10px",
              margin: "10px",
              borderRadius: "10px",
              border: "2px solid gray",
            }}
          >
            <h4>{pet.name}</h4>
            <p>User ID: {pet.user_id}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default InfoPage;
