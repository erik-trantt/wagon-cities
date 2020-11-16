import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setCities } from '../actions';
import City from './city';

class CityList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  UNSAFE_componentWillMount() {
    this.props.setCities();
    // console.log("When component will mount");
  }

  // componentDidMount() {
  //   console.log("When component did mount");
  // }

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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setCities }, dispatch);
}

function mapStateToProps(state) {
  return {
    cities: state.cities,
    selectedCity: state.selectedCity
  };
}

// export default CityList;
export default connect(mapStateToProps, mapDispatchToProps)(CityList);
