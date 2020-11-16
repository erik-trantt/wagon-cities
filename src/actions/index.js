// TODO: add and export your own actions
export function selectCity(city) {
  return {
    type: 'SET_SELECTED_CITY',
    payload: city
  };
}
