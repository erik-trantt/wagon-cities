import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { selectCity } from '../actions';

class City extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  isSelected = () => {
    return this.props.selectedCity && this.props.selectedCity.slug === this.props.city.slug;
  }

  handleClick = (ev) => {
    ev.preventDefault();
    if (this.isSelected()) return;

    // console.log("update active city");
    this.props.selectCity(this.props.city);
  }

  render() {
    const { city } = this.props;

    return (
      <li>
        <a
          href='#'
          className={this.isSelected() ? 'active' : ''}
          onClick={this.handleClick}
        >{city.name}</a>
      </li>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedCity: state.selectedCity
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectCity }, dispatch
  );
}
// export default City;
export default connect(mapStateToProps, mapDispatchToProps)(City);
