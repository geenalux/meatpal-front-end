import axios from "axios";

// Initial State
const initialState = {
  name: "meat",
  ingredients: "just meat",
  imageUrl: "https://www.omahasteaks.com/gifs/990x594/pr_ts004.jpg",
  restaurant: "meat restaurant",
  location: "123 Meat Street"
};

// ACTION TYPE CREATORS
const GET_MEAL = "GET_MEAL";

// ACTION CREATORS
export function getMeal(meal) {
  return { type: GET_MEAL, meal };
}

// THUNK CREATOR
export function fetchMeal(meal) {
  return function(dispatch) {
    return axios.get(`http://172.16.21.48:1337/api/meals/${meal.id}`)
    .then(res => res.data)
    .then(meal => dispatch(getMeal(meal)))
    .catch(err => console.error(err));
  };
}

// MEALS SUB-REDUCER
const meal = function(state = initialState, action) {
  switch (action.type) {
    case GET_MEAL:
      return action.meal;
    default:
      return state;
  }
};

export default meal;
