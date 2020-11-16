import React from 'react';

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

export default ActiveCity;
