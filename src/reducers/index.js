import { combineReducers } from 'redux';
import CitiesReducer from './cities_reducer';
import SelectedCityReducer from './selected_city_reducer';

// State and reducers
const reducers = combineReducers({
  cities: CitiesReducer,
  selectedCity: SelectedCityReducer
});

export default reducers;
