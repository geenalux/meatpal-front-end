import axios from "axios";

// INITIAL STATE
const initialState = [];

// ACTION TYPE CREATORS
const GET_MEALS = "GET_MEALS";

// ACTION CREATORS
export function getMeals(meals) {
  return { type: GET_MEALS, meals }
}

// THUNK CREATORS
export function fetchMeals() {
  return function (dispatch) {
    return
    axios.get("/api/meals")
    .then(res => res.data)
    .then(meals => dispatch(getMeals(meals)))
    .catch(err => console.error(err))
  }
}

// MEALS SUB-REDUCER
export default function meals(state = initialState, action) {
  switch(action.type) {
    case GET_MEALS:
      return action.meals;
    default:
      return state;
  }
}
