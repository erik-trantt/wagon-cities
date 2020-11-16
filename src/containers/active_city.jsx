import React from 'react';
import { connect } from 'react-redux';

const ActiveCity = (props) => {
  const { city } = props;

  if (!city) {
    return (
      <div className="active-city">
        <h3>Unknown city</h3>
        <p>Select a city...</p>
      </div>
    );
  }

  const imgUrl = `https://kitt.lewagon.com/placeholder/cities/${city.slug}`;

  return (
    <div className="active-city">
      <h3>{city.name}</h3>
      <p>{city.address}</p>
      <div><img style={{ width: '100%' }} src={imgUrl} alt="active city" /></div>
    </div>
  );
};

function mapStateToProps(state) {
  return { city: state.selectedCity };
}
// export default ActiveCity;
export default connect(mapStateToProps)(ActiveCity);
