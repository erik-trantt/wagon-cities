import React from 'react';
import City from './city';

class CityList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { cities } = this.props;
    return (
      <ul>
        {cities.map((city, index) => <City key={city.address} selectCity={this.props.selectCity} index={index} {...city} />)}
      </ul>
    );
  }
}

export default CityList;
