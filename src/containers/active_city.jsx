import React from 'react';
import { connect } from 'react-redux';

const ActiveCity = (props) => {
  const { city } = props;

  return (
    <div className="active-city">
      <h3>{city.name}</h3>
      <div>{city.address}</div>
      <div><img style={{ width: '100%' }} src={`https://kitt.lewagon.com/placeholder/cities/${city.slug}`} alt="active city" /></div>
    </div>
  );
};

function mapStateToProps(state) {
  return { city: state.selectedCity };
}
// export default ActiveCity;
export default connect(mapStateToProps)(ActiveCity);
