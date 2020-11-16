import React from 'react';
import CityList from '../containers/city_list';
import ActiveCity from '../containers/active_city';
// import cities from '../data/cities';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app">
        <CityList />
        <ActiveCity />
      </div>
    );
  }
}

export default App;
