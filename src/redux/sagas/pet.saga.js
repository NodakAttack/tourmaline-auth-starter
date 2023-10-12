// Step 1: create saga

import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

// get
function* getPetList() {
  try {
    let response = yield axios.get("/api/pets");
    // pass to the reducer
    yield put({ type: "SET_PET_LIST", payload: response.data });
  } catch (error) {
    console.log("ERROR in getPetList", error);
    alert("Something went wrong!");
  }
}

// post
function* addPet(action) {
    try{
        yield axios.post('/api/pets', action.payload)
        yield put({type: 'FETCH_PET_LIST'})
    } catch (error) {
        console.log("ERROR in addPet", error);
        alert("Something went wrong!");
      }
}

// put

// delete

function* petSaga(){
    // step 2: add to our list of sagas
    yield takeLatest('FETCH_PET_LIST', getPetList);
    yield takeLatest('ADD_PET', addPet);
}

export default petSaga;