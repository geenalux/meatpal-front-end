import axios from "axios";

// INITIAL STATE
const initialState = [
  // {
  //   name: "Steak",
  //   ingredients: "Beef",
  //   imageUrl: "https://www.omahasteaks.com/gifs/990x594/pr_ts004.jpg",
  //   restaurant: "Super Steaks",
  //   location: "5 Hanover Square"
  // },
  // {
  //   name: "Lamb Kebab",
  //   ingredients: "Lamb",
  //   imageUrl:
  //   "https://lh3.googleusercontent.com/Og3wnWggjNnQVokSYyVPEw5XeGLFbf6DlVw9ICPelW7FV3wirwqmc1igWQ0xh4ocn1FKGg88vVycb_cjV5n2AAck2g0845zjLckMCw=w600-l68",
  //   restaurant: "Krazy Kebabs",
  //   location: "225 Liberty Street"
  // },
  // {
  //   name: "Bratwurst",
  //   ingredients: "Whatever is left of the pig",
  //   imageUrl:
  //     "http://howtofeedaloon.com/wp-content/uploads/2016/10/brat-on-grill.jpg",
  //   restaurant: "Best Bratwursts",
  //   location: "111 Wall Street"
  // },
];

// ACTION TYPE CREATORS
const GET_MEALS = "GET_MEALS";

// ACTION CREATORS
export function getMeals(meals) {
  return { type: GET_MEALS, meals };
}

// THUNK CREATORS
export function fetchMeals() {
  return function(dispatch) {
    return axios
      .get("http://172.16.21.48:1337/api/meals")
      .then(res => res.data)
      .then(meals => {
        return dispatch(getMeals(meals))})
      .catch(err => console.error(err));
  };
}

// MEALS SUB-REDUCER
const meals = function(state = initialState, action) {
  switch (action.type) {
    case GET_MEALS:
      return action.meals;
    default:
      return state;
  }
};

export default meals;
