import React from 'react';
import { connect } from 'react-redux';

import City from './city';

class CityList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // console.log(this.props);
    const { cities } = this.props;
    return (
      <div className="cities">
        <ul>
          {cities.map((city, index) => {
            return (
              <City
                key={city.address}
                index={index}
                city={city}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cities: state.cities
  };
}

// export default CityList;
export default connect(mapStateToProps)(CityList);
