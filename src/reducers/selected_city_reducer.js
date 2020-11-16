const SelectedCityReducer = (state = null, action) => {
  // TODO: handle some actions
  switch (action.type) {
    case 'SET_SELECTED_CITY':
      return action.payload;
    default:
      return state;
  }
};

export default SelectedCityReducer;
