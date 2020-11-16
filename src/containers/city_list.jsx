import React from 'react';
import City from './city';

class CityList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { cities } = this.props;
    return (
      <div className="cities">
        <ul>
          {cities.map((city, index) => {
            return (
              <City
                key={city.address}
                selected={this.props.selectedCity.slug === city.slug}
                selectCity={this.props.selectCity}
                index={index}
                {...city}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default CityList;
