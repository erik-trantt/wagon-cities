import React from 'react';
import CityList from '../containers/city_list';
import cities from '../data/cities';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCity: cities[0],
    }
  }

  handleClick = (selectedIndex) => {
    this.setState({ selectedCity: cities[selectedIndex] });
  }
  
  render() {
    return (
      <div className="app">
        <div className="cities">
          <CityList cities={cities} selectCity={this.handleClick} />
        </div>
        <div className="active-city">
          <div>{this.state.selectedCity.name}</div>
          <div>{this.state.selectedCity.address}</div>
          <div><img style={{ width: '100%' }} src={`https://kitt.lewagon.com/placeholder/cities/${this.state.selectedCity.slug}`} alt="active city"/></div>
        </div>
      </div>
    );
  }
};

export default App;
