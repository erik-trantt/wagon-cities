import React from 'react';
import CityList from '../containers/city_list';
import ActiveCity from '../containers/active_city';
import cities from '../data/cities';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCity: cities[0],
    };
  }

  handleClick = (selectedIndex) => {
    if (this.state.selectedCity.slug !== cities[selectedIndex].slug) {
      this.setState({ selectedCity: cities[selectedIndex] });
      console.log("update city");
    }
  }

  render() {
    return (
      <div className="app">
        <CityList
          cities={cities}
          selectedCity={this.state.selectedCity}
          selectCity={this.handleClick}
        />
        <ActiveCity city={this.state.selectedCity} />
      </div>
    );
  }
}

export default App;
