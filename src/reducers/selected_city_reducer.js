import cities from '../data/cities';

const selectedCityReducer = (state, action) => {
  if (state === undefined) {
    // Reducer initialisation
    return cities[0];
  }
  // TODO: handle some actions
  switch (action.type) {
    case 'SET_SELECTED_CITY':
      return action.payload;
    default:
      return state;
  }
};
export default selectedCityReducer;
