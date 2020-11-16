import cities from '../data/cities';

const CitiesReducer = (state = null, action) => {
  // TODO: handle some actions
  switch (action.type) {
    case 'SET_CITIES': {
      return action.payload;
    }
    default: {
      return cities;
    }
  }
};

export default CitiesReducer;
